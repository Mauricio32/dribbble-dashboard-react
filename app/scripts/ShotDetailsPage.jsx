'use strict';

var React = require('react'),
  Item = require('./components/Item.jsx'),
  URLBuilderService = require('./services/url-builder-service');

var ShotDetailsPage = React.createClass({
  getInitialState: function() {
    return {
      shotDetails: null,
      shotsVisible: false
    };
  },
  componentDidMount: function() {
    this.serverRequest = $.get(URLBuilderService.shotDetails(this.props.params.shotId), function(result) {
      this.setState({ 
        shotDetails: result,
        shotsVisible: true
      });
    }.bind(this));
  },

  render: function() {
    var shotsState = this.state.shotsVisible ? 'visible' : '';
    
    if (this.state.shotDetails) {
      return (
        <div className={`shot-details ${shotsState} `}>        
          <Item content={this.state.shotDetails} imageSize='hidpi' page='details' />

          <div className='description-block'>
            <div className='user-info'>
              <div className="user-avatar">
                <img src={this.state.shotDetails.user.avatar_url} />
              </div>
              <div className="user-name">
                <p>{this.state.shotDetails.user.name}</p>
              </div>
            </div>
            <div className='description'>
              <p dangerouslySetInnerHTML={{ __html: this.state.shotDetails.description }}></p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
});


module.exports = ShotDetailsPage;
