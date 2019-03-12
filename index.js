'use strict';

/**
 * The default irc-framework interface for nodejs
 * Usage: var IrcFramework = require('irc-framework');
 */

module.exports.Client = require('./src/client');
module.exports.Client.setDefaultTransport(require('./src/transports/default'));

module.exports.ircLineParser = require('./src/irclineparser');
module.exports.Message = require('./src/ircmessage');

module.exports.Channel = require('./src/channel');
