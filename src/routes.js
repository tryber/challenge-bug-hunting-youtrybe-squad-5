import React from 'react';
import { Switch, Route } from 'react-router-dom';
import VideoPage from './components/content/VideoPage/VideoPage';
import SearchResult from './components/content/SearchResult';
import NotFound from './components/content/NotFound';
import InitialPage from './components/content/InitialPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={InitialPage} />
    <Route exact path="/watch/:videoId" render={(props) => <VideoPage {...props} />} />
    <Route exact path="/results/:searchParam" render={(props) => <SearchResult {...props} />} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
