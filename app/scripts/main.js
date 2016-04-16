var React = window.React = require('react'),
  render = require('react-dom').render,
  Router = require('react-router').Router,
  Route = require('react-router').Route,
  Link = require('react-router').Link,
  IndexRoute = require('react-router').IndexRoute,
  browserHistory = require('react-router').browserHistory,
  App = require('./app'),
  PopularShotsPage = require('./PopularShotsPage');

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PopularShotsPage}/>
    </Route>
  </Router>

), document.getElementById('app'));
