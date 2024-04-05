function CustomerModal() {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close">&times;</span>
          <h2>Add New Customer</h2>
        </div>
        <div className="modal-body">
          <form id="add-customer-form">

            <input type="text" placeholder="username" id="username" name="username" />

      
            <input type="text" placeholder="Customer" id="customerName" name="customerName" />

       
            <input type="email"placeholder="Email"  id="email" name="email" />

            <label for="uploadPhoto">Upload Photo</label>
            <input type="file" id="uploadPhoto" name="uploadPhoto" />

            <button type="submit" className="btn-add">
              ADD CUSTOMER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CustomerModal;
