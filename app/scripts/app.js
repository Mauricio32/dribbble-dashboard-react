
var React = window.React = require('react'),  
  Header = require('./components/header'),
  Footer = require('./components/footer');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <section>
          {this.props.children}
        </section>
        <Footer />
      </div>
    );
  }
});


module.exports = App;

