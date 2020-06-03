import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./header.css";

//navigation bar created here. Shows up on all pages and is fixed. Created using Reactstrap

//map of all links/pages of application
const links = [
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact" },
  { href: "/services", text: "Services" },
  { href: "/blog", text: "Blog" },
  { href: "/booking", text: "Booking" },
];

//react hook that creates the navbar
const NavHeader = (props) => {

  {/*Sets the state of the drop down menu*/}
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <div>
        <Navbar color="light" light fixed="top" className="navbar-custom">
          <NavbarBrand href="/home" className = 'link-custom'>Pro Finish Nails</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} />
          <Collapse isOpen={!collapsed} className="drop-color" navbar>
            <Nav navbar>{links.map(createNavItem)}</Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

//creates the links or NavLinks to other pages
const createNavItem = ({ href, text }) => (
  <NavItem>
    <NavLink href={href} className ='link-custom'>{text}</NavLink>
  </NavItem>
);

export default NavHeader;
