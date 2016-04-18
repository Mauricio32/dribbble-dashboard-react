'use strict';

var React = require('react'),
  Link = require('react-router').Link;

var Item = React.createClass({  
  getDetailLink: function(context) {
    var image;
    
    if (this.props.imageSize === 'hidpi' && this.props.content.images.hidpi)
      image = this.props.content.images.hidpi;
    else
      image = this.props.content.images.normal;
      
    if (context === 'details') {
      return (
        <div>
          <img src={image} className="image" />
          <div className="item-info">
            <div className="text">
              <p>{this.props.content.title}</p>
            </div>
            <div className="views">
              <p>{this.props.content.views_count}</p>
            </div>
          </div>
        </div>
      )
    }
    return (
      <Link to={`details/${this.props.content.id}`} >
        <img src={image} className="image" />
        <div className="item-info">
          <div className="text">
            <p>{this.props.content.title}</p>
          </div>
          <div className="views">
            <p>{this.props.content.views_count}</p>
          </div>
        </div>
      </Link>
    )
  },

  render: function() {
    var detailsLink = this.getDetailLink(this.props.page);        

    return (
      <div className="item-container">
        {detailsLink}
      </div>
    );
  }
});


module.exports = Item;
