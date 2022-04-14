import React from 'react'
import Square from '../Square/Square'

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('This suit is to test the Square component', () => {
	test('Snapshot of Square', () => {
		const { asFragment } = render(<Square value='1' />)

		expect(asFragment()).toMatchSnapshot()
	})

	test('Check square rendering value', () => {
		const { getByText } = render(<Square value='1' />)

		expect(getByText('1')).toBeInTheDocument('1')
	})

	test('Check click event', () => {
		const onClick = jest.fn()
		const { getByText } = render(<Square value='1' onClick={onClick} />)

		userEvent.click(getByText('1'))

		expect(onClick).toHaveBeenCalledTimes(1)
	})

	test('Check click event with value', () => {
		const onClick = jest.fn()
		const { getByText } = render(<Square value='1' index='1' onClick={onClick} />)

		userEvent.click(getByText('1'))

		expect(onClick).toHaveBeenCalledWith('1')
	})

	test('Check click event with value and index', () => {
		const onClick = jest.fn()
		const { getByText } = render(<Square value='1' index='1' onClick={onClick} />)

		userEvent.click(getByText('1'))

		expect(onClick).toHaveBeenCalledTimes(1)
		expect(onClick).toHaveBeenCalledWith('1')
	})
})
