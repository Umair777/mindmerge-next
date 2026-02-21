import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";

export default function Layout({ title, children }) {
  return (
    <div className="flex flex-col bg-white min-h-screen">

      <Header title={title} />
      
      <div className="flex">

        <Sidebar />

        {/* Main content area */}
        <div className="flex flex-1 gap-[45px] px-10 py-[30px] bg-[#e3f8ff]">
          {children}
        </div>

      </div>

    </div>
  );
}
