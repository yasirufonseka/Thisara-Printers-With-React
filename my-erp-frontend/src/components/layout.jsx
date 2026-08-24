import Sidebar from "./sidebar.jsx";
import {Outlet} from "react-router-dom";
import {useState} from "react";

function Layout() {
    const [collapsed, setCollapsed] = useState(false);
    return (
     <div className="flex h-full" style={{ display: "flex", minHeight: "100vh" }}>
        <div className="overflow-y-auto sticky top-0 ">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>
      <main className={`flex-1 overflow-y-auto mt-10  ${collapsed ? "ml-20":"ml-48"}` } style={{ flex: 1, padding: "1.5rem" }}>
        {/* This is where the matched route's page renders */}
        <Outlet />

      </main>
    </div>
    )

}
export default Layout