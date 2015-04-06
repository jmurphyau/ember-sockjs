import Ember from 'ember';
import SockJSClient from 'sockjs';

var SockJS = Ember.Object.extend(Ember.Evented,{

  url: null,

  _sock: null,
  _url: null,
  _reserved: null,
  _options: null,

  init: function() {
    var url = Ember.get(this, 'url');
    if (url) {
      this.setupSock(url);
    }
  },

  connect: function(url) {
    if (url) {
      this.set('url', url);
      this.teardownSock(),
      this.setupSock(url);
    }
  },

  teardownSock: function() {
    if (this._sock) {
      this._sock.close();
      this._sock = null;
      this._url = null;
      this._reserved = null;
      this._options = null;
    }
  },

  setupSock: function(url, reserved, options) {
    this._url = url;
    this._reserved = reserved;
    this._options = options;
    this._sock = new SockJSClient(url, reserved, options);

    var me = this;

    this._sock.onopen = function() {
      me.trigger('open');
    };

    this._sock.onmessage = function(e) {
      me.trigger('message', e.data);
    };

    this._sock.onclose = function() {
      me.trigger('close');
    };
  },

  send: function(msg) {
    if (this._sock) {
      this._sock.send(msg);
    }
  },

  close: function() {
    if (this._sock) {
      this._sock.close();
    }
  }

});

SockJS.toString = function() { return 'SockJS'; };

export default SockJS;
