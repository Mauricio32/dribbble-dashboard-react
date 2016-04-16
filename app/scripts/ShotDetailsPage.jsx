'use strict';

var React = require('react'),
  Item = require('./components/Item'),
  URLBuilderService = require('./services/url-builder-service');  

var ShotDetailsPage = React.createClass({
  getInitialState: function() {
    return {
      shotDetails: null
    };
  },
  componentDidMount: function() {    
    this.serverRequest = $.get(URLBuilderService.shotDetails(this.props.params.shotId), function(result) {
      this.setState({
        shotDetails: result
      });
    }.bind(this));
  },

  render: function() {    
    if (this.state.shotDetails) {      
      return (
        <div className='shot-details'>
          <Item content={this.state.shotDetails} imageSize='hidpi' />
                    
          <div className='description-block'>
            <div className='user-info'>
              <img src={this.state.shotDetails.user.avatar_url} />
              <p>{this.state.shotDetails.user.name}</p>
            </div>
            <div className='description'>
             <p dangerouslySetInnerHTML={{__html: this.state.shotDetails.description}}></p>              
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
});


module.exports = ShotDetailsPage;
