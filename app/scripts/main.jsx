var React = window.React = require('react'),
  render = require('react-dom').render,
  Router = require('react-router').Router,
  Route = require('react-router').Route,
  IndexRoute = require('react-router').IndexRoute,
  browserHistory = require('react-router').browserHistory,
  App = require('./app.jsx'),
  PopularShotsPage = require('./PopularShotsPage.jsx'),
  ShotDetailsPage = require('./ShotDetailsPage.jsx');

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PopularShotsPage}/>
      <Route path="details/:shotId" component={ShotDetailsPage} />
    </Route>
  </Router>

), document.getElementById('app'));
