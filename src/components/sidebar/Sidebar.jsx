// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import "./sidebar.css";

// const Sidebar = ({ menuItems, onItemClick }) => {
//   const location = useLocation();

//   return (
//     <div className="sidebar">
//       <ul>
//         {menuItems.map((item, index) => {
//           const isActive =
//             item.path && location.pathname.includes(item.path);

//           return (
//             <li
//              key={item.path || item.name}
//               className={isActive ? "active" : ""}
//               onClick={
//                 item.ref && onItemClick
//                   ? () => onItemClick(item.ref)
//                   : undefined
//               }
//             >
//               {item.path ? (
//                 <Link to={item.path}>{item.name}</Link>
//               ) : (
//                 <span className="sidebar-link">{item.name}</span>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgMenuGridR } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

import "./sidebar.css";

const Sidebar = ({ menuItems, onItemClick }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item) => {
    if (item.ref && onItemClick) {
      onItemClick(item.ref);
    }
    setIsOpen(false); // close sidebar on mobile after click
  };

  return (
    <>
      {/* Mobile menu open icon */}
      <div className="mobile-menu-icon" onClick={() => setIsOpen(true)}>
        <CgMenuGridR />
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Mobile close icon */}
        <div className="mobile-close-icon" onClick={() => setIsOpen(false)}>
          <IoCloseOutline />
        </div>

        <ul>
          {menuItems.map((item) => {
            const isActive = item.path && location.pathname === item.path;

            return (
              <li
                key={item.path || item.name}
                className={isActive ? "active" : ""}
                onClick={() => handleItemClick(item)}
              >
                {item.path ? (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <span className="sidebar-link">{item.name}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
