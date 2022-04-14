import React, { memo } from 'react'

// Styles
import { Container } from './Styles'

const Square = ({ value, onClick, index }) => {
	return <Container onClick={() => onClick(index)} data-testid="square-container">{value}</Container>
}

export default memo(Square)
