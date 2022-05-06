import React from 'react';
import s from './NavbarList.module.css'
import NavbarItem from '../NavbarItem/NavbarItem'

const NavbarList = ({state}) => {

  const links = state.map(linkState =>
    <NavbarItem key={linkState.id}
                state={linkState}
    />
  )
  return (
    <ul className={s.list}>
      {links}
    </ul>
  );
};

export default NavbarList;
