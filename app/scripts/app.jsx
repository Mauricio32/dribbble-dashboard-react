'use strict';

var React = window.React = require('react');  

var App = React.createClass({
  render: function() {
    return (
      <div>
        <section>
          {this.props.children}
        </section>
      </div>
    );
  }
});

module.exports = App;