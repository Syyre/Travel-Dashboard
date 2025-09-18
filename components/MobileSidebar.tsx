//@ts-nocheck
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import React from "react";
import { Link } from "react-router";
import NavItems from "./NavItems";

const MobileSidebar = () => {
  let sidebar: SidebarComponent;

  const toggleSidebar = () => {
    sidebar.toggle();
  };
  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/">
          <img src="/public/assets/icons/logo.svg" alt="logo" />
          <h1> Tourvisto</h1>
        </Link>
        <button onClick={toggleSidebar}>
          <img
            src="public/assets/icons/menu.svg"
            alt="menu"
            className="size-7 cursor-pointer"
          />
        </button>
      </header>

      <SidebarComponent
        width={270}
        ref={(Sidebar) => (sidebar = Sidebar)}
        created={() => sidebar.hide()}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type="over"
      >
        <NavItems handleClick={toggleSidebar} />
      </SidebarComponent>
    </div>
  );
};

export default MobileSidebar;
