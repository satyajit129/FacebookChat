import React from 'react';
import { Link } from 'react-router-dom'; // Use React Router's Link for routing
import "../../app/globals.css";

const SidebarMenuItem = ({ icon, title, active = false, to = "#" }) => {
  return (
    <li className={active ? 'active' : ''}>
      <Link href={to} data-title={title}> 
        <i className={icon} />
      </Link>
    </li>
  );
};

export default SidebarMenuItem;

