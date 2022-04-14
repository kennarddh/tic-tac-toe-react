import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	width: 100vw;
	height: 100vh;
	background-color: #f5f5f5;
	box-sizing: border-box;

	p {
		margin: 5px 0;
	}
`

export const GameContainer = styled.div`
	margin-top: 20px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	width: 300px;
	height: 300px;
`
