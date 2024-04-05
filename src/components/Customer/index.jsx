import CreateButton from "../subs/createButton";
import TableComponent from "../table";
import CustomerModal from "./create";

function CustomerComponent() {
  return (
    <>
      <CreateButton text={"CUSTOMER"} />
      <TableComponent />
      <CustomerModal />
    </>
  );
}

export default CustomerComponent;
