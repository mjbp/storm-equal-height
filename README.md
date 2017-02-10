#Storm Equal Height

[![Build Status](https://travis-ci.org/mjbp/storm-equal-height.svg?branch=master)](https://travis-ci.org/mjbp/storm-equal-height)
[![codecov.io](http://codecov.io/github/mjbp/storm-equal-height/coverage.svg?branch=master)](http://codecov.io/github/mjbp/storm-equal-height?branch=master)
[![npm version](https://badge.fury.io/js/storm-equal-height.svg)](https://badge.fury.io/js/storm-equal-height)

Layout helper to equalise the height of a set of DOM elements. This is a last resort after CSS grid, flexbox, display:table, and min-heights have been discounted. If the elements contain asynchronously loaded assets, including imgs, you will need to inti this compononet after they have loaded.

##Example
[https://mjbp.github.io/storm-equal-height](https://mjbp.github.io/storm-equal-height)

##Usage
HTML
```
<div class="js-equal-height">
    <div>
        ...
    </div>
    <div>
        ...
    </div>
    <div>
        ...
    </div>
</div>
```

JS
```
npm i -S storm-equal-height
```
either using es6 import
```
import EqualHeight from 'storm-equal-height';

EqualHeight.init('.js-equal-height');
```
aynchronous browser loading (use the .standalone version in the /dist folder)
```
import Load from 'storm-load';

Load('/content/js/async/storm-equal-height.standalone.js')
    .then(() => {
        StormEqualHeight.init('.js-equal-height');
    });
```


##Options
```
    {
        minWidth: 768 
    }
```

e.g.
```
EqualHeight.init('.js-equal-height');
```


##API
####`EqualHeight.init(selector, opts)`
Initialise the module with a DOM selector and  options object


##Tests
```
npm run test
```

##Browser support
This is module has both es6 and es5 distributions. The es6 version should be used in a workflow that transpiles.

This module depends upon Object.assign, element.classList, and Promises, available in all evergreen browsers. ie9+ is supported with polyfills, ie8+ will work with even more polyfills for Array functions and eventListeners.

##Dependencies
None external.

Imports lodash.throttle.

##License
MIT