# Ember SockJS Addon

Adds SockJS to Ember.

### Raw Library

```js
import SockJS from 'sockjs';

var sock = new SockJS('http://mydomain.com/my_prefix');

sock.onopen = function() {
  console.log('open');
};

sock.onmessage = function(e) {
  console.log('message', e.data);
};

sock.onclose = function() {
  console.log('close');
};

sock.send('test');
sock.close();
```

### Ember Object
```js
import SockJS from 'ember-sockjs/sockjs';

var sock = SockJS.create({ url: 'http://mydomain.com/my_prefix' });

sock.on('open', function() {
  console.log('open');
});

sock.on('message', function(e) {
  console.log('message', e.data);
});

sock.on('close', function() {
  console.log('close');
});

sock.send('test');
sock.close();
```

## Install

* `ember install:addon ember-sockjs`

## Other Addons

* [ember-truth-helpers](https://github.com/jmurphyau/ember-truth-helpers)
* [ember-get-helper](https://github.com/jmurphyau/ember-get-helper)

## Development

* `git clone https://github.com/jmurphyau/ember-sockjs.git`
* `npm install`
* `bower install`
* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
