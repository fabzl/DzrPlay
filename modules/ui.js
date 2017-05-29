
require('svg.js');


let drawCanvas = SVG('mainBody').size(document.body.clientWidth, document.body.clientHeight)

function ui() {
	let axis;
	let volume = {
	};

	let core;
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

		params.container = p.container || null;
		params.width = p.width || DEFAULT_WIDTH;
		params.height = p.height || DEFAULT_WIDTH;
		params.x = p.x || DEFAULT_WIDTH;
		params.y = p.y || DEFAULT_WIDTH;
		params.draggable = p.draggable || false;
		params.name = p.name || '';
		params.background = p.background || 'gray';
		draw();
		render();
	}

	function draw() {
		axis = drawCanvas.circle(params.width);
		volume.center = drawCanvas.circle(params.width / 2);

		axis.fill(params.background)
			.move(params.x, params.y);

		volume.center.fill(params.background)
			.move(params.x + 50, params.y + 50)
			.attr({
				'fill-opacity': 0.3
			});

		volume.halo = drawCanvas.circle( Math.abs(axis.attr('x') - volume.center.attr('x') ) )
		volume.halo.attr({
				fill: '#000',
				'fill-opacity': 0.1,
				stroke: params.background,
				'stroke-width': 10
			})
	}

	/*function draw() {
		let el = document.createElement('DIV');

		//defaults
		el.style.setProperty('border-radius','50%');

		//from params
		el.style.setProperty('width',`${params.width}px`);
		el.style.setProperty('height',`${params.height}px`);
		el.style.setProperty('background',params.background);

		if(params.container) {
			params.container.append(child(el))
		} else {
			document.body.appendChild(el);
		}

		return el;
	}*/

	function render() {
		if(params.draggable) {
			axis.mousedown(() => {
				mouseActions.canDrag = true;
			});

			window.addEventListener('mousemove', (ev) => {
				if(mouseActions.canDrag) {
					axis.move(ev.pageX-params.width/2, ev.pageY-(params.height/2));
				}
			})
			axis.mouseup(() => {
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