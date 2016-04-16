'use strict';

var React = require('react'),
  Item = require('./components/Item');

var ShotDetailsPage = React.createClass({
  getInitialState: function() {
    return {
      shotDetails: null
    }
  },
  componentDidMount: function() {
    var apiCall = `https://api.dribbble.com/v1/shots/${this.props.params.shotId}/?access_token=ee32b570ab5be3aeca09b7fb7c07a2700c6685af590986e838308206d000caaa`
    this.serverRequest = $.get(apiCall, function(result) {
      this.setState({
        shotDetails: result
      });
    }.bind(this));
  },

  render: function() {    
    if (this.state.shotDetails) {
      console.log(this);
      return (
        <div className='shot-details'>
          <div className='highlight-photo'>
            <img src={this.state.shotDetails.images.hidpi} />
          </div>
          <div className='description-block'>
            <div className='user-info'>
              <img src={this.state.shotDetails.user.avatar_url} />
              <p>{this.state.shotDetails.user.name}</p>
            </div>
            <div className='description'>
              {this.state.shotDetails.description}
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
});


module.exports = ShotDetailsPage;
