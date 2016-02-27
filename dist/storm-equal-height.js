/**
 * @name storm-equal-height: Layout helper to equalise the height of a set of DOM elements
 * @version 0.4.1: Sat, 27 Feb 2016 21:38:10 GMT
 * @author stormid
 * @license MIT
 */module.exports = (function() {
	'use strict';
    
    var instances = [],
        defaults = {
            minWidth: 768 
        },
        assign = require('object-assign'),
        merge = require('merge'),
        throttle = require('lodash.throttle'),
		StormEqualHeight = {
			init: function() {
				global.setTimeout(this.equalise.bind(this), 0);
        		global.addEventListener('resize', this.equalise.bind(this), false);
			},
			equalise: function() {
				 var max = 0;

				this.DOMElements.forEach(function(el){
					el.style.height = 'auto';
					if(el.offsetHeight > max) {
						max = el.offsetHeight;
					}
				});

				if(window.innerWidth < this.settings.minWidth) { return; }

				this.DOMElements.forEach(function(el){
					el.style.height = max + 'px';
				});
			}
		};
	
    function init(sel, opts) {
        var els = [].slice.call(document.querySelectorAll(sel));
        
        if(els.length === 0) {
            throw new Error('Equal Height cannot be initialised, no augmentable elements found');
        }
        els.forEach(function(el, i){
			instances[i] = assign(Object.create(StormEqualHeight), {
				DOMElements: [].slice.call(el.children),
				settings: merge({}, defaults, opts)
			});
			instances[i].init();
		});
        return instances;
    }
    
    function reload(sel, opts) {
		instances = [];
		init(sel, opts)
    }
	
	return {
		init: init,
        reload: reload
	};
	
 }());