let wow;
let player = {};

player.init = (_wow) => {
	console.log(this)
	wow = _wow;
	return player;
}

player.hello = () => {
	console.log(wow)
	return player;
}

module.exports = player