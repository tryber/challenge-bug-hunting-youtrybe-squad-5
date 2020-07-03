import React from 'react';

import Menu from './Menu';
import SearchBar from './SearchBar';
import ProfileFeatures from './ProfileFeatures';

import '../../css/navbar.css';

const Header = ({ changeTheme, theme }) => (
  <nav className="nav">
    <Menu />
    <SearchBar />
    <label className="switch" htmlFor="themeSwitch">
      <input
        type="checkbox"
        id="themeSwitch"
        onChange={changeTheme}
        defaultChecked={theme === 'dark'}
      />
      <span className="slider round" />
    </label>
    <ProfileFeatures />
  </nav>
);

export default Header;
