import React from 'react';
import SidebarProfile from './SidebarProfile';
import "../../app/globals.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ChatSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="chat-sidebar">
      <Link href="/" className="chat-sidebar-logo">
      </Link>
      <ul className="chat-sidebar-menu">
      <li className={pathname === '/dashboard' ? 'active' : ''}>
          <Link href="/dashboard" data-title="Dashboard">
            <i className="ri-dashboard-line" />
          </Link>
        </li>
        <li className={pathname === '/chat' ? 'active' : ''}>
          <Link href="/chat" data-title="Chats">
            <i className="ri-chat-3-line" />
          </Link>
        </li>
        <li className={pathname === '/post_comment' ? 'active' : ''}>
          <Link href="/post_comment" data-title="Comments">
            <i className="ri-chat-1-line" />
          </Link>
        </li>
        
        <SidebarProfile />
      </ul>
    </aside>
  );
};

export default ChatSidebar;
