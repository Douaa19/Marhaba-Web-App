import React from "react";
import { Outlet } from "react-router-dom";

function Authentication() {
  return (
    <>
      <div className="auth">
        <Outlet />
      </div>
    </>
  );
}

export default Authentication;
