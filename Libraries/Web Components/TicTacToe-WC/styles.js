import { css } from 'lit-element';

export const styles = css`
	.page-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.board {
		position: fixed;
		height: 600px;
		width: 600px;
		z-index: 0;
	}

	.container {
		display: grid;
		grid-template-columns: repeat(3, 180px);
		grid-column-gap: 30px;
		grid-row-gap: 60px;
		margin-top: 35px;
	}

	.square-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.square {
		height: 140px;
		z-index: 1;
	}
`;
