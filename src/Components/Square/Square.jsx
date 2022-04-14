import React from 'react'

// Styles
import { Container } from './Styles'

const Square = ({ value, onClick, index }) => {
	return <Container onClick={() => onClick(index)}>{value}</Container>
}

export default Square
