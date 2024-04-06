import { useDispatch } from "react-redux";
import {
  createCustomer,
  updateCustomer,
} from "../../store/slices/customerSlice";
import { useState } from "react";

function CustomerModal({ toggleCreateModal, mode = "create", data = {} }) {
  const dispatch = useDispatch();
  const [image, setImage] = useState([]);
  const [payload, setPayload] = useState({
    name: data?.name || "",
    username: data?.username || "",
    email: data?.email || "",
    profilePicture: data?.profilePicture || ""
  });

  const handleChange = (e) => {
    const files = e.target.files;
    setImage(files);
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      if (key !== 'profilePicture') formData.append(key, value);
    });

    if (image) {
      formData.append('image', image[0]);
    }

    if (mode === "create") {
      dispatch(createCustomer(formData));
    } else {
      dispatch(updateCustomer({ id: data._id, data: formData }));
    }
    toggleCreateModal();
  };

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span
            role="button"
            className="close"
            onClick={() => toggleCreateModal()}
          >
            &times;
          </span>
          <h2>{mode === "create" ? "Add New Customer" : "Edit Customer"}</h2>
        </div>
        <div className="modal-body">
          <form id="add-customer-form">
            <input
              type="text"
              placeholder="username"
              id="username"
              name="username"
              value={payload?.username}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Customer Name"
              id="customerName"
              name="name"
              value={payload?.name}
              onChange={handleChange}
            />

            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              value={payload?.email}
              onChange={handleChange}
            />

            <label for="uploadPhoto">Upload Photo</label>
            <input type="file" id="uploadPhoto" name="uploadPhoto" onChange={handleChange}/>
            {
              payload?.profilePicture &&(
                <p style={{color: 'black', overflow: 'hidden' }}>{payload?.profilePicture}</p>
              )
            }

            <button type="submit" className="btn-add" onClick={handleSubmit}>
              {mode === "create" ? "Add Customer" : "Edit Customer"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CustomerModal;
