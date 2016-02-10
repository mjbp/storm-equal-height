/**
 * @name storm-equal-height: 
 * @version 0.1.0: Wed, 10 Feb 2016 11:51:00 GMT
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
    
    var instance,
        defaults = {
            minWidth: 768 
        },
        merge = require('merge'),
        throttle = require('lodash.throttle');
    
    
    function StormEqualHeight(els, opts) {
        this.settings = merge({}, defaults, opts);
        this.DOMElements = els;
        global.setTimeout(this.equalise.bind(this), 0);
        global.addEventListener('resize', this.equalise.bind(this), false);
        
    }
    
    StormEqualHeight.prototype.equalise = function() {
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
    };
    
    function init(sel, opts) {
        var els = [].slice.call(document.querySelectorAll(sel));
        
        if(els.length === 0) {
            throw new Error('Equal Height cannot be initialised, no augmentable elements found');
        }
        
        instance = new StormEqualHeight(els, opts);
        
        return instance;
    }
    
    function reload(els, opts) {
        destroy();
        init(els, opts);
    }
    
    function destroy() {
        instance = null;
    }
	
	return {
		init: init,
        reload: reload,
        destroy: destroy
	};
	
 }));