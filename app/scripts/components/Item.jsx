'use strict';

var React = require('react'),
  Link = require('react-router').Link;

var Item = React.createClass({
  render: function() {
    var detailsLink = `details/${this.props.content.id}`;
    var image;

    if (this.props.imageSize === 'hidpi' && this.props.content.images.hidpi)
       image = this.props.content.images.hidpi;
    else
       image = this.props.content.images.normal;

    return (
      <div className="item-container">
        <Link to={detailsLink}>
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
      </div>
    );
  }
});


module.exports = Item;
