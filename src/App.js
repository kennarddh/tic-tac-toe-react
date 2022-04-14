import React, { useState } from 'react'

// Components
import Square from 'Components/Square/Square'

// Styles
import { Container, GameContainer } from 'Styles'

const App = () => {
	const [Squares] = useState(Array(9).fill(null))
	const [IsNowX, SetIsNowX] = useState(true)

	const OnClick = index => {
		Squares[index] = IsNowX ? 'X' : 'O'

		SetIsNowX(!IsNowX)
	}

	return (
		<Container>
			<h1>Tic Tac Toe</h1>

			<p>The game is played on a 3x3 grid.</p>

			<p>The game is played by two players.</p>

			<p>The first player to get three in a row wins.</p>

			<GameContainer>
				{Squares.map((square, index) => (
					<Square
						key={index}
						index={index}
						value={square}
						onClick={OnClick}
					/>
				))}
			</GameContainer>
		</Container>
	)
}

export default App
