import React from 'react';
import s from './NavbarItem.module.css'
import {NavLink} from 'react-router-dom'

const NavbarItem = ({state}) => {

  function activeLinkClass(isActive) {
    if (isActive) {
      return `${s.link} ${s.activeLink}`
    }
    return s.link
  }

  return (
    <li className={state.isSettings ? `${s.item} ${s.settings}` : s.item}>
      <NavLink to={state.path} className={({isActive}) => activeLinkClass(isActive)}>
        {state.icon()}
      </NavLink>
      <span className={s.linkText}>{state.linkName}</span>
    </li>
  );
};

export default NavbarItem;
