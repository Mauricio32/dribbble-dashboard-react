'use strict';

var React = require('react'),
    Item = require('./components/Item');    

var PopularShotsPage = React.createClass({
  getInitialState: function() {
    return {
      shots: []
    }
  },
  componentDidMount: function() {
    this.serverRequest = $.get('https://api.dribbble.com/v1/shots/?access_token=ee32b570ab5be3aeca09b7fb7c07a2700c6685af590986e838308206d000caaa', function(result) {
      this.setState({
        shots: result
      });
    }.bind(this));
  },

  renderShots: function(shot) {
    return (
      <Item content={this.state.shots[shot]} key={shot} />
    );
  },

  render: function() {
    if (this.state.shots.length !== 0) {
      return (
        <div className='popular-shots'>{Object.keys(this.state.shots).map(this.renderShots) }</div>
      );
    }
    return null;
  }
});


module.exports = PopularShotsPage;
