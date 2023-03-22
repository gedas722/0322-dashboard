import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import MenuIcon from "@mui/icons-material/Menu";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <>
          <MenuIcon className="OpenIcon" />
          <HighlightOffIcon className="CloseIcon" />
        </>
        {SidebarData.map((val, key) => {
          return (
            <li
              className="SidebarItem"
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div>{val.icon}</div>
              <div>{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
