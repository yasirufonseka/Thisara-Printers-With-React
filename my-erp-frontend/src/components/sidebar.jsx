import { useState } from "react";
import arrowright from "../assets/arrowright.svg";
import arrowleft from "../assets/arrowleft.png";
import {BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";


function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { icon: "📊", label: "Dashboard",path: "/dashboard" },
    { icon: "📦", label: "Orders" ,path: "/orders" },
    { icon: "🏷️", label: "Products" ,path: "/products" },
    { icon: "👥", label: "Customers" ,path: "/customers" },
    { icon: "📦", label: "Inventory" ,path: "/inventory" },
    { icon: "🤝", label: "Suppliers", path: "/suppliers" },
    { icon: "💳", label: "Payments" , path: "/payments" },
    { icon: "📈", label: "Reports", path: "/reports" },
    { icon: "🧑", label: "Employees", path: "/employees" },
  ];

  return (
    <div className="sidebar flex h-screen">

      <div
        className={`h-full bg-linear-to-b bg-slate-900 text-white font-semibold text-sm transition-all duration-300 ${
          collapsed ? "w-20" : "w-48"
        }`}
      >
        <div className="p-4 border-b border-slate-700 flex items-center justify-between">
          {!collapsed && <span className="font-bold w-48">Thisara Printers</span>}
          <button onClick={() => setCollapsed(!collapsed)} className={`${collapsed ? "bg-emerald-700 w-12 h-10  rounded-md flex items-center justify-center text-white" : "bg-yellow-500  w-12 h-10 rounded-md flex items-center justify-center text-white"}`}>
            {collapsed ? <img src={arrowright} alt="Expand" style={{width: "16px", hight:"16px"}} /> : <img src={arrowleft} alt="Collapse" style={{width: "16px", hight:"16px"}}  />}
          </button>
        </div>
        
        {/* Menu Items */}
        <nav className="p-2">
          {menuItems.map((item) => (
            <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setActive(item.label)}
                title={collapsed ? item.label : undefined}
                className={`w-full flex items-center font-light,
                 text-sm gap-3 rounded-lg py-2.5 ${
                  collapsed ? "justify-center px-0" : "px-3"
                } ${active === item.label ? "bg-blue-500" : "hover:bg-slate-800"}`}
            >
              <span>{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>
        
      </div>
      <div className="flex-1 p-4">

      </div>


    </div>
  );
}

export default Sidebar;