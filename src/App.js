import React, { useState, useCallback, useEffect } from 'react'

// Components
import Square from 'Components/Square/Square'

// Styles
import { Container, GameContainer, RestartButton } from 'Styles'

const App = () => {
	const [Squares, SetSquares] = useState(Array(9).fill(null))
	const [IsNowX, SetIsNowX] = useState(true)
	const [IsCanRestart, SetIsCanRestart] = useState(false)
	const [Winner, SetWinner] = useState(null)

	const OnClick = useCallback(
		index => {
			if (Squares[index] !== null) return
			if (Winner) return

			SetSquares(squares => {
				const squaresClone = squares.slice()

				squaresClone[index] = IsNowX ? 'X' : 'O'

				return squaresClone
			})

			SetIsNowX(isNowX => {
				return !isNowX
			})
		},
		[IsNowX, Winner]
	)

	const CalculateWinner = squares => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]

		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i]

			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a]
			}
		}

		return null
	}

	const Restart = useCallback(() => {
		SetSquares(Array(9).fill(null))
		SetIsNowX(true)
		SetIsCanRestart(false)
		SetWinner(null)
	}, [])

	useEffect(() => {
		const winner = CalculateWinner(Squares)

		if (winner) {
			SetIsCanRestart(true)
		}

		SetWinner(winner)
	}, [Squares])

	return (
		<Container>
			<h1>Tic Tac Toe</h1>

			<p>The game is played on a 3x3 grid.</p>

			<p>The game is played by two players.</p>

			<p>The first player to get three in a row wins.</p>

			<p>Winner: {Winner}</p>

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

			<RestartButton showing={IsCanRestart} onClick={Restart}>
				Play Again?
			</RestartButton>

			<p>
				Github:{' '}
				<a href='https://github.com/kennarddh/tic-tac-toe-react'>
					Tic Tac Toe React
				</a>
			</p>
		</Container>
	)
}

export default App
