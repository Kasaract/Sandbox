import { LitElement, html } from 'lit-element';

import { styles } from './styles';

class TicTacToe extends LitElement {
	static get styles() {
		return styles;
	}

	static get properties() {
		return {
			turn: String,
			winner: String,
			square1: Object,
			square2: Object,
			square3: Object,
			square4: Object,
			square5: Object,
			square6: Object,
			square7: Object,
			square8: Object,
			square9: Object
		};
	}

	constructor() {
		super();
		this.turn = 'x';
		this.winner = '';
		this.square1 = 'blank';
		this.square2 = 'blank';
		this.square3 = 'blank';
		this.square4 = 'blank';
		this.square5 = 'blank';
		this.square6 = 'blank';
		this.square7 = 'blank';
		this.square8 = 'blank';
		this.square9 = 'blank';
	}

	render() {
		return html`
			<div class="page-wrapper">
				<img src="/images/tic-tac-toe.png" class="board" />

				<div class="container">
					<!-- First row -->
					<div
						class="square-wrapper"
						@click=${() => this.clickMove1(this.square1)}
					>
						<img src="/images/${this.square1}.jpg" class="square" />
					</div>
					<div class="square-wrapper" @click=${this.clickMove2}>
						<img src="/images/${this.square2}.jpg" class="square" />
					</div>
					<div class="square-wrapper" @click=${this.clickMove3}>
						<img src="/images/${this.square3}.jpg" class="square" />
					</div>

					<!-- Second row -->
					<div class="square-wrapper" @click=${this.clickMove4}>
						<img src="/images/${this.square4}.jpg" class="square" />
					</div>
					<div class="square-wrapper" @click=${this.clickMove5}>
						<img src="/images/${this.square5}.jpg" class="square" />
					</div>
					<div class="square-wrapper" @click=${this.clickMove6}>
						<img src="/images/${this.square6}.jpg" class="square" />
					</div>

					<!-- Third row -->
					<div class="square-wrapper" @click=${this.clickMove7}>
						<img src="/images/${this.square7}.jpg" class="square" />
					</div>
					<div class="square-wrapper" @click=${this.clickMove8}>
						<img src="/images/${this.square8}.jpg" class="square" />
					</div>
					<div class="square-wrapper" @click=${this.clickMove9}>
						<img src="/images/${this.square9}.jpg" class="square" />
					</div>
				</div>
			</div>

			<h4>Turn: ${this.turn}</h4>
			<button @click=${this.clear}>Reset</button>
			${!this.winner
				? html``
				: html`
						<h1>And the winner is Player X!</h1>
				  `}
		`;
	}

	clear() {
		this.square1 = 'blank';
		this.square2 = 'blank';
		this.square3 = 'blank';
		this.square4 = 'blank';
		this.square5 = 'blank';
		this.square6 = 'blank';
		this.square7 = 'blank';
		this.square8 = 'blank';
		this.square9 = 'blank';
	}

	checkWin() {
		if (
			this.square1 === this.square2 &&
			this.square1 == this.square3 &&
			this.square1 === 'x'
		) {
			this.winner = 'x';
		}
	}

	clickMove1(square) {
		if (this.square1 === 'blank') {
			if (this.turn === 'x') {
				this.square1 = 'x';
				this.turn = 'o';
			} else {
				this.square1 = 'o';
				this.turn = 'x';
			}
		}
		this.checkWin();
	}

	clickMove2() {
		if (this.square2 === 'blank') {
			if (this.turn === 'x') {
				this.square2 = 'x';
				this.turn = 'o';
			} else {
				this.square2 = 'o';
				this.turn = 'x';
			}
		}
		this.checkWin();
	}

	clickMove3() {
		if (this.square3 === 'blank') {
			if (this.turn === 'x') {
				this.square3 = 'x';
				this.turn = 'o';
			} else {
				this.square3 = 'o';
				this.turn = 'x';
			}
		}
		this.checkWin();
	}

	clickMove4() {
		if (this.square4 === 'blank') {
			if (this.turn === 'x') {
				this.square4 = 'x';
				this.turn = 'o';
			} else {
				this.square4 = 'o';
				this.turn = 'x';
			}
		}
	}

	clickMove5() {
		if (this.square5 === 'blank') {
			if (this.turn === 'x') {
				this.square5 = 'x';
				this.turn = 'o';
			} else {
				this.square5 = 'o';
				this.turn = 'x';
			}
		}
	}

	clickMove6() {
		if (this.square6 === 'blank') {
			if (this.turn === 'x') {
				this.square6 = 'x';
				this.turn = 'o';
			} else {
				this.square6 = 'o';
				this.turn = 'x';
			}
		}
	}

	clickMove7() {
		if (this.square7 === 'blank') {
			if (this.turn === 'x') {
				this.square7 = 'x';
				this.turn = 'o';
			} else {
				this.square7 = 'o';
				this.turn = 'x';
			}
		}
	}

	clickMove8() {
		if (this.square8 === 'blank') {
			if (this.turn === 'x') {
				this.square8 = 'x';
				this.turn = 'o';
			} else {
				this.square8 = 'o';
				this.turn = 'x';
			}
		}
	}

	clickMove9() {
		if (this.square9 === 'blank') {
			if (this.turn === 'x') {
				this.square9 = 'x';
				this.turn = 'o';
			} else {
				this.square9 = 'o';
				this.turn = 'x';
			}
		}
	}
}

customElements.define('tic-tac-toe', TicTacToe);
