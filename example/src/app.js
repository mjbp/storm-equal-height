import Load from 'storm-load';

const onDOMContentLoadedTasks = [() => {

	Load('./js/storm-equal-height.standalone.js')
		.then(() => {
			StormEqualHeight.init('.js-equal-height');
		});
	
}];
    
if('addEventListener' in window) window.addEventListener('DOMContentLoaded', () => { onDOMContentLoadedTasks.forEach((fn) => fn()); });