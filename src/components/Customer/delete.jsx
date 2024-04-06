import DustBin from "../../assets/images/dusbin.svg";
function CustomerDeleteModal({userType,toggleDeleteModal, onDelete}) {

  return (
    <div id="myModalDelete" className="deleteModal">
      <div className="deleteModal-content">
        <div className="deleteModal-header">
          <span className="close" role="button" onClick={() => toggleDeleteModal()}>&times;</span>
          <img src={DustBin} width={80} height={80} alt="delete icon" style={{margin:"auto"}}/>
        </div>
        <div className="deleteModal-body">
          <h3>Are you sure?</h3>
          <p>
            {`Do you really want to delete this ${userType}? This process can not be
            undone.`}
          </p>
          <div className="btn-div" style={{ display: "flex", alignItems: "center" }}>
            <button type="submit" className="btn-cancel" onClick={() => toggleDeleteModal()}>
              CANCEL
            </button>
            <button type="submit" className="btn-delete" onClick={() => onDelete()}>
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDeleteModal;
 