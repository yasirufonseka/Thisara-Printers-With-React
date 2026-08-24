import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import arrowright from "../assets/arrowright.svg";
import arrowleft from "../assets/arrowleft.png";
import { BellIcon, MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline"


function Sidebar({ collapsed, setCollapsed }) {
  //const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: "📊", label: "Dashboard", path: "/dashboard" },
    { icon: "📦", label: "Orders", path: "/orders" },
    { icon: "🏷️", label: "Products", path: "/products" },
    { icon: "👥", label: "Customers", path: "/customers" },
    { icon: "📦", label: "Inventory", path: "/inventory" },
    { icon: "🤝", label: "Suppliers", path: "/suppliers" },
    { icon: "💳", label: "Payments", path: "/payments" },
    { icon: "📈", label: "Reports", path: "/reports" },
    { icon: "🧑", label: "Employees", path: "/employees" },
  ];
  // find active route and set to a variable
  //const [activeItem, setActiveItem] = useState("");
  const location = useLocation();
  const activeLabel = menuItems.find((item) => item.path === location.pathname);

  return (
    <div className="flex flex-row h-fit overflow-y-auto">
      <div
        className={`fixed h-screen shrink-0 bg-slate-900 text-sm font-semibold text-white transition-all duration-300 ${collapsed ? "w-20" : "w-48"
          }`}
      >
        <div className="p-4 border-b border-slate-700 flex items-center justify-between">
          {!collapsed && <span className="font-bold w-48">Thisara Printers</span>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`${collapsed ? "bg-emerald-700" : "bg-yellow-500"
              } w-12 h-10 rounded-md flex items-center justify-center text-white`}
          >
            {collapsed ? (
              <img src={arrowright} alt="Expand" style={{ width: "16px", height: "16px" }} />
            ) : (
              <img src={arrowleft} alt="Collapse" style={{ width: "16px", height: "16px" }} />
            )}
          </button>
        </div>

        <nav className="p-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              title={collapsed ? item.label : undefined}
              className={({ isActive }) =>
                `w-full flex items-center text-sm gap-3 rounded-lg py-2.5 ${collapsed ? "justify-center px-0" : "px-3"
                } ${isActive ? "bg-blue-500" : "hover:bg-slate-800"}`
              }
            >
              <span>{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>

      </div>
      <div className={`bg-white shadow-lg rounded-md p-2 text-black flex flex-row justify-between items-center h-15  fixed top-0  right-0 z-10  
          ${collapsed ? "left-20" : "left-48"}  `}>
        <div className={`flex flex-2  `}>
          <p className="font-bold text-2xl  p-5 ">{activeLabel ? activeLabel.icon + activeLabel.label : "hello"}</p>
        </div>
        <div className="flex fle-row w-full flex-1 items-center justify-center gap-3 ">
           <div className="rounded-4xl flex items-center justify-center p-2  bg-white">
            <span><BellIcon className="size-6 text-black"/></span>
          </div>
          <div className="rounded-4xl flex items-center justify-center p-1   bg-slate-800">
            <span><UserIcon className="size-5 text-white" /></span>
            
          </div>
           <div className="rounded-4xl flex items-center justify-center p-1 pl-3  outline-1 ring-1 border-1 border-blue-500 ring-blue-200 outline-blue-500 focus-within:border-0 focus-within:outline-2 focus-within:ring-0 focus-within:ring-blue-700">
            <span><MagnifyingGlassIcon className="size-5 text-black" /></span>
            <input type="search" name="" id="" placeholder="Search Anything" className="pl-2 outline-0 focus:outline-0 text-gray-600 focus:border-0 focus:ring-0" />
            
          </div>
         
        </div>

      </div>
    </div>

  );
}

export default Sidebar;