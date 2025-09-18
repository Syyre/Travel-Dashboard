//@ts-nocheck
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import React from "react";
import { Link } from "react-router";
import NavItems from "./NavItems";

let sidebar: SidebarComponent;

const toggleSidebar = () => {
  sidebar.toggle();
};

const MobileSidebar = () => {
  return (
    <div className="mobile-sidebar wrapper">
      MobileSidebar
      <header>
        <Link to="/">
          <img
            src="/public/assets/icons/logo.svg"
            alt="logo"
            className="size-[30px]"
          />
          <h1> Tourvisto</h1>
        </Link>
        <button onClick={toggleSidebar}>
          <img
            src="public/assets/icons/menu.svg"
            alt="menu"
            className="size-7"
          />
        </button>

        <SidebarComponent
          width={270}
          ref={(Sidebar) => (sidebar = Sidebar)}
          closeOnDocumentClick={true}
          showBackdrop={true}
          type="Over"
        >
          <NavItems handleClick={toggleSidebar} />
        </SidebarComponent>
      </header>
    </div>
  );
};

export default MobileSidebar;
