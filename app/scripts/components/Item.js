'use strict';

var React = require('react'),
    Link = require('react-router').Link;

var Item = React.createClass({  
  render: function() {    
    var detailsLink = `details/${this.props.content.id}`;
    return (
      <div className="photo">
        <Link to={detailsLink}>
          <img src={this.props.content.images.normal} />
        </Link>
      </div>
    );
  }
});


module.exports = Item;
