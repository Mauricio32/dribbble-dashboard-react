'use strict';

var React = require('react'),
  Link = require('react-router').Link;

var Item = React.createClass({
  render: function() {
    console.log(this.props.content);
    var detailsLink = `details/${this.props.content.id}`;
    return (
      <div className="item-container">
        <Link to={detailsLink}>
          <img src={this.props.content.images.normal} className="image" />
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
