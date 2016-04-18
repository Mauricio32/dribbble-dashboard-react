'use strict';

var React = require('react'),
  Item = require('./components/Item.jsx'),
  URLBuilderService = require('./services/url-builder-service');

var PopularShotsPage = React.createClass({
  getInitialState: function() {
    return {
      shots: [],
      shotsVisible: false
    };
  },
  componentDidMount: function() {
    this.serverRequest = $.get(URLBuilderService.popularShots(), function(result) {
      this.setState({
        shots: result,
        shotsVisible: true
      });
    }.bind(this));
  },

  renderShots: function(shot) {
    return (
      <Item content={this.state.shots[shot]} key={shot} imageSize="normal" />
    );
  },

  render: function() {
    var shotsState = this.state.shotsVisible ? 'visible' : '';

    if (this.state.shots.length !== 0) {
      return (
        <div className={`popular-shots ${shotsState} `}>
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
