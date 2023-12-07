import React from "react";
import { useAuthContext } from "../../Context/authContext";
function Navbar() {
  const {userInfo,logout}=useAuthContext();
  return (
    <div className="Navbar">
      <div className="logo" >
        🦄DataGram
      </div>
        <div>
          <span>Welcome, {userInfo.name}</span>
          <span
            style={{
              cursor: "pointer",
              backgroundColor: "var(--button-color)",
              padding: "0.5rem",
              color: "black",
              borderRadius: "10px",
              marginLeft: "10px",
              marginRight:"10px"
            }}
            onClick={() => logout()}
          >
            Logout
          </span>
        </div>
    </div>
  );
}

export default Navbar;
