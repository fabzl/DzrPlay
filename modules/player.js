let wow;
let player = {};
const APP_ID = 236762;

const _KEY = require('../config.json').SECRET;

let user = {};

player.init = (_wow) => {
	wow = _wow;
	DZ.init({
		appId  : APP_ID,
		channelUrl : 'http://127.0.0.1:8080/channel.html'
	});
	DZ.init({
		player: {
			onload: function(response) {
				console.log('DZ.player is ready', response);
				// Then, request the user to log in
				DZ.login(function(response) {
					console.log('login response: ', response)
					if (response.authResponse) {
						console.log('Welcome!  Fetching your information.... ');
						DZ.api('/user/me', function(response) {
							console.log(response)
							console.log('Good to see you, ' + response.name + '.');
							user = response;
						});
					} else {
						console.log('User cancelled login or did not fully authorize.');
					}
				}, {perms: 'basic_access,email'});
			}
		}
	});
	return player;
}

player.hello = () => {
	console.log(wow)
	return player;
}

player.search= (query, cb) => {
	if(!user.id) {
		alert('Please log in first!');
		return;
	}
	DZ.api(`/search/artist?q=artist:"${query}"`, (res) => {
		let obj = res;
		//console.log(res);
		cb(obj.data)
	})
}

player.searchTopSongs= (query, cb) => {
	if(!user.id) {
		alert('Please log in first!');
		return;
	}
	DZ.api(`/artist/${query}/top`, (res) => {
		console.log(`/artist/${query}/top`, res)
		let obj = res;
		//console.log(res);
		cb(obj.data)
	})
}
module.exports = player