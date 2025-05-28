import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PlusCircle, List, ShoppingCart } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    {
      path: "/add",
      icon: <PlusCircle size={20} />,
      label: "Add Items",
    },
    {
      path: "/list",
      icon: <List size={20} />,
      label: "List Items",
    },
    {
      path: "/order",
      icon: <ShoppingCart size={20} />,
      label: "Orders",
    },
  ];

  return (
    <div className="w-64 h-[calc(100vh-4rem)]  bg-yellow-50 border-r border-gray-300 fixed top-18 left-0 p-4 shadow-md">
      <div className="space-y-3">
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-lg ${
              location.pathname === item.path
                ? "bg-orange-200 text-orange-500 font-semibold"
                : "text-gray-800 hover:bg-orange-100"
            }`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
