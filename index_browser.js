/**
 * The default irc-framework interface for browsers
 * Usage: var IrcFramework = require('irc-framework/browser');
 */

import Client from './src/client';
import WebSocketTransport from './src/transports/websocket';
import ircLineParser from './src/irclineparser';
import Message from './src/ircmessage';
import Channel from './src/channel';

Client.setDefaultTransport(WebSocketTransport);

export { Client, ircLineParser, Message, Channel };
