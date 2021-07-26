import TicTacToe, { Marker } from 'App/TicTacToe';
import 'Assets/scss/main.scss';

const game = new TicTacToe({
	dimention: '5x5',
	starter: Marker.X,
});

game.render('#app');
