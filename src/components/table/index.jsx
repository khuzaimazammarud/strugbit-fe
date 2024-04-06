import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomerDeleteModal from "../Customer/delete";
import { deleteCustomer } from "../../store/slices/customerSlice";

import demoSvg from "../../../src/assets/images/placeholder.jpg";
import uparrow from "../../../src/assets/images/uparrow.svg";
import downarrow from "../../../src/assets/images/download arrow.svg";
function TableComponent({ setSortField, toggleSortOrder, openEditModal }) {
  const dispatch = useDispatch();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const {
    list: customers,
    loading,
    error,
  } = useSelector((state) => state.customers);

  const headerData = [
    {
      field: "",
      clickable: false,
    },
    {
      field: "username",
      clickable: true,
    },
    {
      field: "name",
      clickable: true,
    },
    {
      field: "email",
      clickable: true,
    },
    {
      field: "",
      clickable: false,
    },
  ];

  const toggleDeleteModal = () => {
    setDeleteModalOpen(!deleteModalOpen);
  };

  const onDeleteCustomer = () => {
    dispatch(deleteCustomer(selectedCustomerId));
    toggleDeleteModal();
  };

  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <section className="overflow-scroll px-5 h-full">
          <div className="table-container">
            <div className="table-header w-full">
              {headerData.map((item, idx) => (
                <div
                  key={idx}
                  role="button"
                  onClick={() => {
                    if (item.clickable) {
                      setSortField(item.field);
                    }
                  }}
                  className="table-header-item"
                >
                  <p>{item.field}</p>
                  {item.clickable && (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img
                        src={uparrow}
                        alt=""
                        style={{ marginBottom: "3px" }}
                        role="button"
                        onClick={() => toggleSortOrder("asc")}
                      />
                      <img src={downarrow} alt="" role="button" onClick={() => toggleSortOrder("desc")} />
                    </div>
                  )}
                </div>
              ))}
            </div>
            {loading ? (
              <div>loading...</div>
            ) : (
              <>
                {customers?.map((item, idx) => (
                  <div className="table-row w-full" key={idx}>
                    <div>
                      <img
                        src={item?.profilePicture || demoSvg}
                        alt=""
                        style={{
                          width: "70px",
                          height: "70px",
                          marginLeft: "auto",
                          marginRight: "auto",
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                    <div>{item?.username}</div>
                    <div>
                      <a className="customerLink">{item?.name}</a>
                    </div>
                    <div>{item?.email}</div>
                    <div className="action-buttons">
                      <button
                        className="edit-button"
                        onClick={() => openEditModal(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => {
                          setSelectedCustomerId(item._id);
                          toggleDeleteModal();
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </section>
        {deleteModalOpen && (
          <CustomerDeleteModal
            userType="customer"
            toggleDeleteModal={toggleDeleteModal}
            onDelete={onDeleteCustomer}
          />
        )}
      </div>
    </>
  );
}

export default TableComponent;
