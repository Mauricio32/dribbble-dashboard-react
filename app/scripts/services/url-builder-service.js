'use strict';

var react = require('react');

var URLBuilderService = React.createClass({
  statics: {
    popularShots: function(){
      return 'https://api.dribbble.com/v1/shots/?access_token=ee32b570ab5be3aeca09b7fb7c07a2700c6685af590986e838308206d000caaa';
    }
  }
});

module.exports = URLBuilderService;