import React, { useState, useCallback } from 'react'

// Components
import Square from 'Components/Square/Square'

// Styles
import { Container, GameContainer } from 'Styles'

const App = () => {
	const [Squares, SetSquares] = useState(Array(9).fill(null))
	const [IsNowX, SetIsNowX] = useState(true)

	const OnClick = useCallback(
		index => {
			if (Squares[index] !== null) return

			SetSquares(squares => {
				const squaresClone = squares.slice()

				squaresClone[index] = IsNowX ? 'X' : 'O'

				return squaresClone
			})

			SetIsNowX(isNowX => {
				return !isNowX
			})
		},
		[IsNowX]
	)

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
