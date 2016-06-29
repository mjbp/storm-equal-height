(function(root, factory) {
  if (typeof exports === 'object') {
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
			instances[i] = Object.assign(Object.create(StormEqualHeight), {
				DOMElements: [].slice.call(el.children),
				settings: Object.assign({}, defaults, opts)
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