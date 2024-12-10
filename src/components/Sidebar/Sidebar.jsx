"use client";
import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { FaHome, FaUser, FaCog, FaBars } from "react-icons/fa";
import Link from "next/link";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside className={`${styles.sidebar} ${isExpanded ? styles.expanded : ""}`}>
      <div className={styles.menuBar} onClick={toggleSidebar}>
        <FaBars size={24} />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/dashboard">
              <div className={styles.navItem}>
                <FaHome className={styles.icon} />
                {isExpanded && <span>Dashboard</span>}
              </div>
            </Link>
          </li>
          <li>
            <div className={styles.navItem}>
              <FaUser className={styles.icon} />
              {isExpanded && <span>Profile</span>}
            </div>
          </li>
          <li>
            <div className={styles.navItem}>
              <FaCog className={styles.icon} />
              {isExpanded && <span>Settings</span>}
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
