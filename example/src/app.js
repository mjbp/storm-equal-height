import EqualHeight from './libs/storm-equal-height';

const onDOMContentLoadedTasks = [() => {
	EqualHeight.init('.js-equal-height');
}];
    
if('addEventListener' in window) window.addEventListener('DOMContentLoaded', () => { onDOMContentLoadedTasks.forEach((fn) => fn()); });