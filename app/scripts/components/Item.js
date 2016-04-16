'use strict';

var React = require('react');

var Item = React.createClass({  
  render: function() {
    return (
      <div className="photo">
        <img src={this.props.content.images.normal} />
      </div>
    );
  }
});


module.exports = Item;
