"use client";

import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import { usePathname } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import { useEffect, useState } from "react";
import $ from "jquery";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Add the ToastContainer here to ensure it's available globally */}
        <ToastContainer />

        {/* Conditional layout rendering */}
        {!isLoginPage && <div>{children}</div>}
        {isLoginPage && <main style={{ flex: 1, overflowY: "auto" }}>{children}</main>}
      </body>
    </html>
  );
}
