//strangerer things
const player =  require('./modules/player');
const ui =  require('./modules/ui');
const elem1 = new ui();
require('jquery');

const elem2 = new ui();

const elem3 = new ui();

console.log(elem2)

// DOM ELEMENTS
const $SEARCH_BAR = document.querySelector('[data-search]');
const $HIT = document.querySelector('[data-hit]');



var playlist, songs;

const onLoad = () => {
	playlist = new Vue({
	  el: '#list',
	  data: {
	    items: [
	    ],
	    searchMessage: 'Try searching for something'
	  },
	  methods: {
	  	listSongs: function(artist) {
	  		songs.items = [];
			player.searchTopSongs(artist, (res)=> {
				console.log(res)
				songs.searchMessage = 'Searching...'
				if(res.length) {
					songs.searchMessage = 'Try searching for something'
					songs.items = res;
				} else {
					songs.searchMessage = 'Your query didnt have any hits! no top hits for this artist....';
				}
			});
	  	}
	  }
	});

	songs = new Vue({
	  el: '#songs',
	  data: {
	    items: [
	    ],
	    searchMessage: 'Top hits will appear here',
	    hasArtist: false
	  },
	  methods: {
	  	play: function(songId) {
	  		console.log('playing track id: ', songId)
	  		DZ.player.playTracks([songId]);
	  	}
	  }

	});
}
const onSearch = () => {
	playlist.searchMessage = 'Searching...';
	playlist.items = [];

	songs.items = [];
	songs.hasArtist = false;
	player.search($SEARCH_BAR.value, (res)=> {
		console.log(res)
		if(res.length) {
			playlist.items = res;
			songs.hasArtist = true;
		} else {
			playlist.searchMessage = 'Your query didnt have any hits! try searching for something else';
		}
	});
}
$HIT.addEventListener('click', () => onSearch());

window.addEventListener('load', onLoad())

/*elem1.init({
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
})*/

const test = 'this';
console.log(`testing ${test}`, player);
player.init('webpack setup').hello();

