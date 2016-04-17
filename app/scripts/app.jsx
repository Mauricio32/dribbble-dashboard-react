'use strict';

var React = window.React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <section className="wrap">
          <div className="wrap-inner">
            <div className="content">
              <div className="main">
                {this.props.children}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
});

module.exports = App;