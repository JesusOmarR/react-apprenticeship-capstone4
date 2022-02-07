import React, { useState, useEffect } from "react";
import {
  Nav,
  NavMenu,
  NavBtn,
  SideNav,
  NavBtnLink,
  Bars,
} from "./Navbar.styled";

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  /*   useEffect(() => {
    const changeWidth = () => {
      let width: number = innerWidth;
      if (width >= 768) {
        setToggleMenu(false);
      }
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []); */

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
    console.log("xd");
  };

  return (
    <>
      <Nav>
        <Bars onClick={() => toggleNav()} />
        <NavMenu>
          <h2>WizeStore</h2>
        </NavMenu>
        <input />
        <NavBtn>
          <img
            onClick={() => toggleNav}
            alt="logo"
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          />
        </NavBtn>
      </Nav>

      <SideNav open={toggleMenu} id="mySidenav">
        <a href="/#" className="closebtn" onClick={toggleNav}>
          &times;
        </a>
        <a onClick={toggleNav} href="/#">
          <h2>WizeStore</h2>
        </a>
      </SideNav>
    </>
  );
}

export default NavBar;
