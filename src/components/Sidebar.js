// src/components/Sidebar.js
import React from "react";
import img from "../assets/aa.jpg";
import Pie from "./Piechart"; // Assuming Piechart is a separate component

const Sidebar = ({ show }) => {
    return ( <
        div className = { `position-sticky top-0 left-0 h-100 bg-light shadow-sm pe-2 ${show ? "d-block" : "d-none"}` }
        style = {
            {
                width: "250px",
                zIndex: 1050,
                background: "linear-gradient(to bottom, #d4edda, #ffffff)",
                overflowY: "hidden",
                transition: "transform 0.3s ease-in-out",
                transform: show ? "translateX(0)" : "translateX(-100%)",
                height: "100vh",
            }
        } >
        <
        div className = "text-center mt-5 mb-4" >
        <
        img src = { img }
        alt = "Profile"
        className = "rounded-circle mb-2"
        style = {
            { width: "100px", height: "120px" }
        }
        /> <
        h5 className = "text-center" > Hey, Sonali < /h5> < /
        div >

        <
        ul className = "list-group mb-4"
        style = {
            { background: "transparent" }
        } >
        <
        li className = "list-group-item d-flex align-items-center"
        style = {
            { backgroundColor: "#3F9142", color: "#ffffff", fontWeight: "bold" }
        } >
        <
        i className = "fa-regular fa-clipboard me-2" > < /i> All Tasks < /
        li > <
        li className = "list-group-item d-flex align-items-center" >
        <
        i className = "fa-regular fa-calendar me-2" > < /i> Today < /
        li > <
        li className = "list-group-item d-flex align-items-center" >
        <
        i className = "fa-regular fa-star me-2" > < /i> Important < /
        li > <
        li className = "list-group-item d-flex align-items-center" >
        <
        i className = "fa-regular fa-map me-2" > < /i> Planned < /
        li > <
        li className = "list-group-item d-flex align-items-center" >
        <
        i className = "fa-regular fa-user me-2" > < /i> Assigned to me < /
        li > <
        /ul>

        <
        div >
        <
        h6 className = "text-center" > Today Tasks < /h6> <
        div className = "d-flex justify-content-center mt-3" >
        <
        div style = {
            { width: "150px", height: "150px", borderRadius: "50%" }
        } >
        <
        Pie / >
        <
        /div> < /
        div > <
        /div> < /
        div >
    );
};

export default Sidebar;