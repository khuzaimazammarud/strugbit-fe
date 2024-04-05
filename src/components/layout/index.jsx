import { useState } from "react";
import Header from "./navbar";
import Sidebar from "./sidebar";

function Layout({ children }) {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <div className="main-container">
      {children}      
    </div> 
    </div>
  );
}
export default Layout;
