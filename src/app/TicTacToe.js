import createElement from 'Utils/createElement.util';

class TicTacToe {
	#dimention = '3x3';
	#rootEl = null;

	constructor(options = {}) {
		this.#setupDimention(options.dimention);
	}

	#setupDimention(dimention) {
		if (dimention) this.#dimention = dimention;
	}

	breakDimention() {
		const dimSplit = this.#dimention.match(/\d/g);

		return {
			x: +dimSplit[0],
			y: +(dimSplit[1] || dimSplit[0]),
		};
	}

	render(selector) {
		if (selector && document) {
			this.#rootEl = document.querySelector(selector);
			this.#rootEl.classList.add('tic-tac-toe');

			const dimention = this.breakDimention();

			const wrapper = createElement({
				selector: 'div',
				attributes: {
					class: 'ttt__wrapper',
				},
				children: new Array(dimention.y).fill().map((_, i) =>
					createElement({
						selector: 'div',
						attributes: {
							class: 'ttt__row',
							'data-row': i + 1,
						},
						children: new Array(dimention.x).fill().map((__, j) =>
							createElement({
								selector: 'div',
								attributes: {
									class: 'ttt__col',
									'data-col': j + 1,
								},
							})
						),
					})
				),
			});

			this.#rootEl.appendChild(wrapper);
		}
	}
}

export default TicTacToe;
