import React from "react";
import "../components/Header.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <div className="Header">
      <>
        <MenuIcon className="MenuIcon" />
      </>
      <h3>Header</h3>
      <>
        <NotificationsIcon className="NotificationsIcon" />
      </>
    </div>
  );
}

export default Header;
