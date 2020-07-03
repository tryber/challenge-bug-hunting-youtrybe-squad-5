import React, { Component } from 'react';
import youtubeLogo from '../../assets/youlogo.png';

import '../../css/menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <i className="material-icons">menu</i>
        <div className="logo-container">
          <img className="youlogo" alt="Youtube logo" src={youtubeLogo} />
          <span className="logo">YouTrybe</span>
        </div>
      </div>
    );
  }
}

export default Menu;
