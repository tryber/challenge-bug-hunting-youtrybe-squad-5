import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import './css/mainContents.css';

import Header from './components/header/Header';
import Routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { theme: localStorage.theme || 'light' };
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme() {
    const { theme } = this.state;
    localStorage.theme = theme === 'dark' ? 'light' : 'dark';
    this.setState({ theme: localStorage.theme });
  }

  render() {
    const { theme } = this.state;
    return (
      <div className={theme === 'dark' ? 'App dark' : 'App'}>
        <BrowserRouter>
          <Header changeTheme={this.changeTheme} theme={theme} />
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
