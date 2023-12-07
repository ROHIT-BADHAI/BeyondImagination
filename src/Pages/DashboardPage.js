import React from "react";
import Navbar from "../Features/Navbar/Navbar";
import Sidebar from "../Features/Sidebar/Sidebar";
import Piechart from "../Features/PieChart/Piechart";
import "../Styles/index.css";
import { useAuthContext } from "../Context/authContext";
import { Navigate } from "react-router-dom";

function DashboardPage() {
  const { userInfo } = useAuthContext();
  return (
    <>
      {" "}
      {userInfo ? (
        <div>
          <Navbar />
          <div className="dashboard">
            <Sidebar />
            <Piechart />
          </div>
        </div>
      ) : (
        <Navigate to="/signup" />
      )}
    </>
  );
}

export default DashboardPage;
