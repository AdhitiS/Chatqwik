import { Avatar } from '@material-ui/core';
import React from 'react'
import "./Sidebar.css";


function Sidebar(){
    return (
    <div className="sidebar">
        <h2>I am Sidebar </h2>
        <div className="sidebar_header">
        <Avatar />

        </div>

        <div className="sidebar_chats">
            
        </div>


    </div>
    );
}

export default Sidebar;