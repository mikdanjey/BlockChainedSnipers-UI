"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserMenu from "@/components/Layout/UserMenu";

const Navbar = ({ currentUser }) => {
  const pathname = usePathname();
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <div id="navbar" className="navbar-area">
      <div className="edemy-nav">
        <div className="container-fluid">
          <div className="navbar navbar-expand-lg navbar-light">
            <Link href="/" className="navbar-brand">
              {/* <img onClick={toggleNavbar} src="/images/bitcoin.png" alt="logo" /> <span className="custom-navbar-brand">BlockChainedSnipers</span> */}
              <img onClick={toggleNavbar} src="/images/logo.png" alt="logo" />
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              {/* <form className="search-box">
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search for anything"
                />
                <button type="submit">
                  <i className="flaticon-search"></i>
                </button>
              </form> */}

              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link ${pathname === "/" ? "active" : ""}`}
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/follow-us"
                    className={`nav-link ${
                      pathname === "/follow-us" ? "active" : ""
                    }`}
                  >
                    Follow
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/deals"
                    className={`nav-link ${
                      pathname === "/deals" ? "active" : ""
                    }`}
                  >
                    Deals
                  </Link>
                </li>
              </ul>

              <div className="others-option d-flex align-items-center">
                {/* <div className="option-item">
                  <div className="cart-btn">
                    <Link href="/cart">
                      <i className="flaticon-shopping-cart"></i>
                      <span>0</span> 
                    </Link>
                  </div>
                </div> */}
                <UserMenu currentUser={currentUser} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
