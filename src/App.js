import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import './css/mainContents.css';

import Header from './components/header/Header';
import VideoPage from './components/content/VideoPage/VideoPage';
import SearchResult from './components/content/SearchResult';
import NotFound from './components/content/NotFound';
import InitialPage from './components/content/InitialPage';

const DarkTheme = React.lazy(() => import('./themes/darkTheme'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: localStorage.theme || 'light',
    }
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme() {
    localStorage.theme = this.state.theme === 'dark' ? 'light' : 'dark';
    this.setState({ theme: localStorage.theme });
  }

  render() {
    const { theme } = this.state;
    return (
      <Router>
        <div className="App">
          <Header changeTheme={this.changeTheme} theme={theme} />
          <React.Suspense fallback={<></>}>
            {theme === 'dark' && <DarkTheme />}
          </React.Suspense>
          <Switch>
            <Route exact path="/"><InitialPage /></Route>
            <Route
              exact
              path="/watch/:videoId"
              render={(props) => <VideoPage {...props} />}
            />
            <Route
              exact
              path="/results/:searchParam"
              render={(props) => <SearchResult {...props} />}
            />
            <Route path="*"><NotFound /></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
