import { cn } from "lib/utils";
import React from "react";
import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";

const NavItems = () => {
  const user = {
    name: "John Doe",
    email: "ranodom@gmail.com",
    imageUrl: "/public/assets/images/david.webp",
  };

  return (
    <section className="nav-items">
      <Link to="/" className="link-logo">
        <img
          src="/public/assets/icons/logo.svg"
          alt="logo"
          className="size-[30px]"
        />
        <h1> Tourvisto</h1>
      </Link>

      <div className="container">
        <nav>
          {sidebarItems.map((item) => (
            <NavLink to={item.href} key={item.id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={cn("group nav-item", {
                    "bg-primary-100 !text-white": isActive,
                  })}
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? "brightness-0 invert" : "text-dark-200"}`}
                  />
                  {item.label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
        <footer className="nav-footer">
          <img
            src={user?.imageUrl || "public/assets/images/davd.webp"}
            alt={user?.name || "User"}
          />
          <article>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </article>

          <button
            onClick={() => {
              console.log("Logging out...");
            }}
            className="cursor-pointer"
          >
            <img
              src="/public/assets/icons/logout.svg"
              alt="logout"
              className="size-6"
            />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default NavItems;
