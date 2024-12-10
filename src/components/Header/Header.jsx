// src/components/Header/Header.jsx
import React from "react";
import { FaCommentAlt, FaEnvelope, FaUserCircle } from "react-icons/fa";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
    const commentCount = 5; // Example comment count
    const messageCount = 12; // Example message count
  return (
    <header className={styles.header}>
      <div className={styles.iconContainer}>
      <Link href ='/comment'>
        <div className={styles.iconWrapper}>
         
          <FaCommentAlt className={styles.icon} title="Comments" />
          {commentCount > 0 && <span className={styles.badge}>{commentCount}</span>}
          
        </div>
        </Link>
        <Link href ='/message'>
        <div className={styles.iconWrapper}>
       
          <FaEnvelope className={styles.icon} title="Messages" />
          {messageCount > 0 && <span className={styles.badge}>{messageCount}</span>}
         
        </div>
        </Link>
      </div>
      <div className={styles.userContainer}>
        <FaUserCircle className={styles.userIcon} title="User" />
        <span className={styles.userName}>John Doe</span>
      </div>
    </header>
  );
}
