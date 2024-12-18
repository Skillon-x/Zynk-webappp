// src/Components/Layout/layout.jsx
import React from 'react';
import Navbar from "./navbar";
import Footer from "./Footer";
import Chatbot from "../Common/Chatbot";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-primary-50">
      <Navbar />
      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default Layout;