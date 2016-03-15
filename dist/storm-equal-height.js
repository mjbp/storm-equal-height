/**
 * @name storm-equal-height: Layout helper to equalise the height of a set of DOM elements
 * @version 0.5.0: Mon, 14 Mar 2016 20:49:48 GMT
 * @author stormid
 * @license MIT
 */(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.StormEqualHeight = factory();
  }
}(this, function() {
	'use strict';
    
    var instances = [],
        defaults = {
            minWidth: 768 
        },
		StormEqualHeight = {
			init: function() {
				this.throttledEqualise = STORM.UTILS.throttle(this.equalise, 60);
				global.setTimeout(this.equalise.bind(this), 0);
        		global.addEventListener('resize', this.throttledEqualise.bind(this), false);
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
			instances[i] = STORM.UTILS.assign(Object.create(StormEqualHeight), {
				DOMElements: [].slice.call(el.children),
				settings: STORM.UTILS.merge({}, defaults, opts)
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
	
 }));