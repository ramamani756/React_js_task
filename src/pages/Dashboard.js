// src/Dashboard.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TaskSection from "../components/TaskSection";
import { toggleSidebar } from "../redux/actions"; // Path to your actions.js

const Dashboard = () => {
  const sidebarVisible = useSelector((state) => state.sidebarVisible);

  const dispatch = useDispatch();

  const handleSidebarToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <>
      <Header toggleSidebar={handleSidebarToggle} />
      <div className="d-flex vh-100">
        <Sidebar show={sidebarVisible} />
        <div className={`flex-grow-1 d-flex flex-column transition-all duration-300`}>
          <TaskSection />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
