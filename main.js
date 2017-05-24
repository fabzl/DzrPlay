//strangerer things
const player =  require('./modules/player');
const ui =  require('./modules/ui');




const elem1 = new ui();

const elem2 = new ui();

const elem3 = new ui();

console.log(elem2)


elem1.init({
	width: 30,
	height: 30,
	background: '#58CAE5',
	x: 100,
	y:10,
	draggable: true,
	name: 'one'
});
elem2.init({
	width: 50,
	height: 50,
	background: '#f07125',
	y: 300,
	draggable: true,
	name: 'two'
})
elem3.init({
	width: 30,
	height: 30,
	background: 'black',
	y: 300,
	draggable: true,
	name: 'two'
})

const test = 'this';
console.log(`testing ${test}`, player);
player.init('webpack setup').hello();

