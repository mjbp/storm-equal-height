var STORM = (function(w, d) {
	'use strict';
    
    var Equaliser = require('./libs/storm-equal-height'),
        init = function() {
            Equaliser.init('.js-edward-woodward', {
                minWidth: 380
            });
        };
	
	return {
		init: init
	};
	
})(window, document, undefined);

if('addEventListener' in window) window.addEventListener('DOMContentLoaded', STORM.init, false);