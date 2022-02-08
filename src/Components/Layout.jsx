import React from "react";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="grow">
        <div className="w-[90%] my-4 mx-auto">{props.children}</div>
      </main>
    </div>
  );
};

export default Layout;
