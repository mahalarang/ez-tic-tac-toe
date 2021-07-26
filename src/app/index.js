import TicTacToe from 'App/TicTacToe';
import 'Assets/scss/main.scss';

const game = new TicTacToe({
	dimention: '3x3',
});

game.render('#app');
