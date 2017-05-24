
	require('svg.js');

console.log(SVG)

let drawCanvas = SVG('mainBody').size(document.body.clientWidth, document.body.clientHeight)
let rect = drawCanvas.rect(199,199).attr({fill: '#f06'})

function ui() {
	let element;
	let params = {};
	let controls = {
		volume: {
			distance: 20,
			radius: 10,
		}
	}
	let mouseActions = {
		canDrag: false
	}
	this.init = (p) => {
		console.log('initalizing ', p)
		params.container = p.container || null;
		params.width = p.width || DEFAULT_WIDTH;
		params.height = p.height || DEFAULT_WIDTH;
		params.x = p.x || DEFAULT_WIDTH;
		params.y = p.y || DEFAULT_WIDTH;
		params.draggable = p.draggable || false;
		params.name = p.name || '';
		params.background = p.background || 'gray';
		element = draw();
		render(element);
		return element;
	}

	this.hello = () => {
		console.log(wow)
		return ui;
	}

	function draw() {
		let el = document.createElement('DIV');

		//defaults
		el.style.setProperty('border-radius','50%');
		el.style.setProperty('position','absolute');

		//from params
		el.style.setProperty('width',`${params.width}px`);
		el.style.setProperty('height',`${params.height}px`);
		el.style.setProperty('background',params.background);
	    el.style.setProperty('transform', `translate(${params.x}px, ${params.y}px)`);

		if(params.container) {
			params.container.append(child(el))
		} else {
			document.body.appendChild(el);
		}

		return el;
	}

	function render(e) {
		if(params.draggable) {
			e.addEventListener('mousedown', () => {
				mouseActions.canDrag = true;
			});

			window.addEventListener('mousemove', (ev) => {
				if(mouseActions.canDrag) {
					console.log('moving', params.name, params.height/2)
	    			e.style.setProperty('transform', `translate(${ev.pageX-params.width/2}px, ${ev.pageY-(params.height/2)}px)`);
	    			console.log(e)
				}
			})
			document.addEventListener('mouseup', () => {
				mouseActions.canDrag = false;
			});
			/*e.addEventListener('mouseleave', () => {
				mouseActions.canDrag = false;
			});*/
		}
	}
};

const DEFAULT_WIDTH = 30;




module.exports = ui