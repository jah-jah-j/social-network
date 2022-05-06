import React from 'react';
import s from './Navbar.module.css';
import NavbarList from './NavbarList/NavbarList'


const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <NavbarList state={props.state}/>
    </nav>
  );
}

export default Navbar;
