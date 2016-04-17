'use strict';

var React = require('react'),
    ReactCSSTransitionGroup = require('react-addons-css-transition-group'),
    Item = require('./components/Item.jsx'),
    URLBuilderService = require('./services/url-builder-service');

var PopularShotsPage = React.createClass({
  getInitialState: function() {
    return {
      shots: []
    };
  },
  componentDidMount: function() {
    this.serverRequest = $.get(URLBuilderService.popularShots(), function(result) {
      this.setState({
        shots: result
      });
    }.bind(this));
  },

  renderShots: function(shot) {
    return (
      <Item content={this.state.shots[shot]} key={shot} imageSize="normal" />
    );
  },

  render: function() {
    if (this.state.shots.length !== 0) {
      return (
        <ReactCSSTransitionGroup transitionName="shots" transitionEnterTimeout={5000} transitionLeaveTimeout={300}>
          <div className='popular-shots'>{Object.keys(this.state.shots).map(this.renderShots) }</div>
        </ReactCSSTransitionGroup>
      );
    }
    return null;
  }
});


module.exports = PopularShotsPage;
