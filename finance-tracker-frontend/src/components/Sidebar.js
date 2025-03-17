import React, { useState } from "react";
import { FaHome, FaChartBar, FaWallet, FaCog, FaBars } from "react-icons/fa";
import "./Sidebar.css"; // Import styles

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
            <button className="toggle-btn" onClick={toggleSidebar}>
                <FaBars />
            </button>
            <ul className="sidebar-menu">
                <li>
                    <FaHome className="icon" />
                    {!isCollapsed && <span>Dashboard</span>}
                </li>
                <li>
                    <FaChartBar className="icon" />
                    {!isCollapsed && <span>Reports</span>}
                </li>
                <li>
                    <FaWallet className="icon" />
                    {!isCollapsed && <span>Transactions</span>}
                </li>
                <li>
                    <FaCog className="icon" />
                    {!isCollapsed && <span>Settings</span>}
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
