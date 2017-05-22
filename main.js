const player =  require('./modules/player');

const test = 'this';
console.log(`testing ${test}`, player);
player.init('webpack setup').hello();

console.log(player)
