import throttle from 'lodash.throttle';

const defaults = {
		minWidth: 768 
	},
	StormEqualHeight = {
		init: function() {
			this.throttledEqualise = throttle(this.equalise, 16);
			window.setTimeout(this.equalise.bind(this), 0);
			window.addEventListener('resize', this.throttledEqualise.bind(this), false);
			return this;
		},
		equalise: function() {
			let max = 0;
			this.DOMElements.forEach(el => {
				el.style.height = 'auto';
				if(el.offsetHeight > max) {
					max = el.offsetHeight;
				}
			});

			if(window.innerWidth < this.settings.minWidth) return;

			this.DOMElements.forEach(el => {
				el.style.height = max + 'px';
			});
		}
	};
	
const init = (sel, opts) => {
	let els = [].slice.call(document.querySelectorAll(sel));
	
	if(!els.length) throw new Error('Equal Height cannot be initialised, no augmentable elements found');

	return els.map((el) => {
		return Object.assign(Object.create(StormEqualHeight), {
			DOMElements: [].slice.call(el.children),
			settings: Object.assign({}, defaults, opts)
		}).init();
	});
};

export default { init };