import React from "react";
import logo from "../images/icons/logo-sm.png";
import search from "../images/icons/search-icon-sm.png";
import cart from "../images/icons/cart-sm.png";
import HeaderLink from "./HeaderLink";

function Header() {
  return (
    <div>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a className="navbar-brand mx-auto" href="#">
              <img src={logo} />
            </a>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <HeaderLink link="Mac" name="Mac" />
                <HeaderLink link="#" name="iphone" />
                <HeaderLink link="#" name="ipad" />
                <HeaderLink link="#" name="watch" />
                <HeaderLink link="#" name="tv" />
                <HeaderLink link="#" name="Music" />
                <HeaderLink link="#" name="Support" />
                <HeaderLink link1="search" name1={search} />
                <HeaderLink link1="cart" name1={cart} />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
