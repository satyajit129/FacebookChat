import React, { useState } from 'react';
import "../../app/globals.css";

const SidebarProfile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <li className="chat-sidebar-profile">
      <button type="button" className="chat-sidebar-profile-toggle" onClick={toggleDropdown}>
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="Profile"
        />
      </button>
      {isDropdownOpen && (
        <ul className="chat-sidebar-profile-dropdown">
          <li>
            <a href="#">
              <i className="ri-user-line" /> Profile
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ri-logout-box-line" /> Logout
            </a>
          </li>
        </ul>
      )}
    </li>
  );
};

export default SidebarProfile;
