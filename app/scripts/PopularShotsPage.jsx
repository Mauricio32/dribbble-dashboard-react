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
        <div className='popular-shots'>
          <div className="shots-group">
            {Object.keys(this.state.shots).map(this.renderShots) }
          </div>
        </div>
      );
    }
    return null;
  }
});


module.exports = PopularShotsPage;
