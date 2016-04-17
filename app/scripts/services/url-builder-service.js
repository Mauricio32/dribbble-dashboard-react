'use strict';

var config = require('../../settings.json');

/**
  The responsible service to build URL
*/
class URLBuilderService {
  static popularShots() {    
    return `${config.rootApi}/shots/?timeframe=${config.timeframe}&access_token=${config.accessToken}`;
  }
  
  static shotDetails(shotId) {
    return `${config.rootApi}/shots/${shotId}/?access_token=${config.accessToken}`;
  }

}

module.exports = URLBuilderService;
