import should from 'should';
import EqualHeight from '../dist/storm-equal-height';
import 'jsdom-global/register';

const html = `<div class="js-equal-height">
				<div></div>
				<div style="height="100px"></div>
				<div></div>
			</div>
			<div class="js-equal-height">
				<div></div>
				<div style="height="100px"></div>
				<div></div>
			</div>
			<div class="js-equal-height-2">
				<div></div>
				<div style="height="100px"></div>
				<div></div>
			</div>`;

document.body.innerHTML = html;

let EqualHeightSet1 = EqualHeight.init('.js-equal-height'),
	EqualHeightSet2 = EqualHeight.init('.js-equal-height-2', {
		minWidth: 1024
	});

describe('Initialisation', () => {

	it('should return array of equal height items', () => {
		should(EqualHeightSet1)
		.Array()
		.and.have.lengthOf(2);
	});

	it('should throw an error if no elements are found', () => {
		EqualHeight.init.bind(EqualHeight, '.js-err').should.throw();
	});
	
	it('each array item should be an object with the correct properties', () => {
		EqualHeightSet1[0].should.be.an.instanceOf(Object).and.not.empty();
		EqualHeightSet1[0].should.have.property('DOMElements').Array();
		EqualHeightSet1[0].should.have.property('settings').Object();
		EqualHeightSet1[0].should.have.property('init').Function();
		EqualHeightSet1[0].should.have.property('equalise').Function();
	});

	it('should initialisation with different settings if different options are passed', () => {
		should(EqualHeightSet1[0].settings.active).not.equal(EqualHeightSet2[0].settings.minWidth);
	});
	

	it('should equalise the height of all matching sets of elements', () => {
		
		window.setTimeout(() => {
			!!EqualHeightSet1.reduce(function(a, b){ return (a === b) ? a : NaN; }).should.be.true();
		}, 20);
		
	});

	/*
	it('should recalibrate child element sizes hen the window is resized', () => {
		
		document.dispatchEvent(new window.Event('resize', {bubbles: true}));
		
	});*/

});