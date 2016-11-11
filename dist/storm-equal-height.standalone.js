/**
 * @name storm-equal-height: Layout helper to equalise the height of a set of DOM elements
 * @version 0.7.0: Fri, 11 Nov 2016 14:38:51 GMT
 * @author mjbp
 * @license MIT
 */
(function(root, factory) {
   var mod = {
       exports: {}
   };
   if (typeof exports !== 'undefined'){
       mod.exports = exports
       factory(mod.exports)
       module.exports = mod.exports.default
   } else {
       factory(mod.exports);
       root.StormEqualHeight = mod.exports.default
   }

}(this, function(exports) {
   'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _throttle = require('lodash/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
	minWidth: 768
},
    StormEqualHeight = {
	init: function init() {
		this.throttledEqualise = (0, _throttle2.default)(this.equalise, 16);
		window.setTimeout(this.equalise.bind(this), 0);
		window.addEventListener('resize', this.throttledEqualise.bind(this), false);
		return this;
	},
	equalise: function equalise() {
		var max = 0;
		this.DOMElements.forEach(function (el) {
			el.style.height = 'auto';
			if (el.offsetHeight > max) {
				max = el.offsetHeight;
			}
		});

		if (window.innerWidth < this.settings.minWidth) return;

		this.DOMElements.forEach(function (el) {
			el.style.height = max + 'px';
		});
	}
};

var init = function init(sel, opts) {
	var els = [].slice.call(document.querySelectorAll(sel));

	if (!els.length) throw new Error('Equal Height cannot be initialised, no augmentable elements found');

	return els.map(function (el) {
		return Object.assign(Object.create(StormEqualHeight), {
			DOMElements: [].slice.call(el.children),
			settings: Object.assign({}, defaults, opts)
		}).init();
	});
};

exports.default = { init: init };;
}));
