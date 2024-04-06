import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCustomers } from "../../store/slices/customerSlice";
import CreateButton from "../subs/createButton";
import TableComponent from "../table";
import CustomerModal from "./create";
import CustomerDeleteModal from "./delete";

function CustomerComponent() {
  const dispatch = useDispatch();
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [modalMode, setModalMode] = useState("create");

  const openEditModal = (customerData) => {
    setModalData(customerData);
    setModalMode("edit");
    setCreateModalOpen(true);
  };

  useEffect(() => {
    dispatch(fetchCustomers({ sortBy: sortField, sortOrder }));
  }, [dispatch, sortField, sortOrder]);

  const toggleSortOrder = (sortType) => {
    setSortOrder(sortType);
  };

  const toggleCreateModal = () => {
    setCreateModalOpen(!createModalOpen);
    if (createModalOpen) {
      setModalData(null);
      setModalMode('create');
    }
  };

  return (
    <>
      <CreateButton text={"CUSTOMER"} toggleCreateModal={toggleCreateModal} />
      <TableComponent
        setSortField={setSortField}
        toggleSortOrder={toggleSortOrder}
        openEditModal={openEditModal}
      />
      {createModalOpen && (
        <CustomerModal
          mode={modalMode}
          data={modalData}
          toggleCreateModal={toggleCreateModal}
        />
      )}
    </>
  );
}

export default CustomerComponent;
