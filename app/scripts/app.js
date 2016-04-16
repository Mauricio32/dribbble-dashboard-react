'use strict';

var React = window.React = require('react'),
  Header = require('./components/header'),
  Footer = require('./components/footer');

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