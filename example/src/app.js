var UTILS = {
		merge: require('object-assign'),
		assign: require('merge'),
		attributelist: require('storm-attributelist'),
		classlist: require('dom-classlist'),
		throttle: require('lodash.throttle')
	},
	UI = (function(w, d) {
		'use strict';

		var Equaliser = require('./libs/storm-equal-height'),
			init = function() {
				Equaliser.init('.js-edward-woodward', {
					minWidth: 480
				});
			};

		return {
			init: init
		};

	})(window, document, undefined);


global.STORM = {
    UTILS: UTILS,
    UI: UI
};

if('addEventListener' in window) window.addEventListener('DOMContentLoaded', STORM.UI.init, false);