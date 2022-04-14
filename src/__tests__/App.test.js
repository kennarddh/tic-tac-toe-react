import React from 'react'
import App from '../App'

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('This suit is to test the App component', () => {
	test('Snapshot of App', () => {
		const { asFragment } = render(<App />)

		expect(asFragment()).toMatchSnapshot()
	})

	test('All square rendered with value', () => {
		const { getByTestId } = render(<App />)

		for (let i = 0; i < 9; i++) {
			expect(getByTestId(`square-${i}`)).toHaveTextContent('')
		}
	})

	test('Click on square', () => {
		const { getByTestId } = render(<App />)

		userEvent.click(getByTestId('square-0'))

		expect(getByTestId('square-0')).toHaveTextContent('X')
	})

	test('Click on square and check if all square rendered with no value', () => {
		const { getByTestId } = render(<App />)

		for (let i = 0; i < 9; i++) {
			expect(getByTestId(`square-${i}`)).toHaveTextContent('')
		}
	})

	test('Taking turns and click all square', () => {
		const { getByTestId } = render(<App />)

		userEvent.click(getByTestId('square-0'))
		expect(getByTestId('square-0')).toHaveTextContent('X')

		userEvent.click(getByTestId('square-1'))
		expect(getByTestId('square-1')).toHaveTextContent('O')

		userEvent.click(getByTestId('square-2'))
		expect(getByTestId('square-2')).toHaveTextContent('X')

		userEvent.click(getByTestId('square-4'))
		expect(getByTestId('square-4')).toHaveTextContent('O')

		userEvent.click(getByTestId('square-3'))
		expect(getByTestId('square-3')).toHaveTextContent('X')

		userEvent.click(getByTestId('square-5'))
		expect(getByTestId('square-5')).toHaveTextContent('O')

		userEvent.click(getByTestId('square-7'))
		expect(getByTestId('square-7')).toHaveTextContent('X')

		userEvent.click(getByTestId('square-6'))
		expect(getByTestId('square-6')).toHaveTextContent('O')

		userEvent.click(getByTestId('square-8'))
		expect(getByTestId('square-8')).toHaveTextContent('X')
	})

	test('Check X win', () => {
		const { getByTestId } = render(<App />)

		userEvent.click(getByTestId('square-0'))
		expect(getByTestId('square-0')).toHaveTextContent('X')

		userEvent.click(getByTestId('square-1'))
		expect(getByTestId('square-1')).toHaveTextContent('O')

		userEvent.click(getByTestId('square-2'))
		expect(getByTestId('square-2')).toHaveTextContent('X')

		userEvent.click(getByTestId('square-3'))
		expect(getByTestId('square-3')).toHaveTextContent('O')

		userEvent.click(getByTestId('square-4'))
		expect(getByTestId('square-4')).toHaveTextContent('X')

		userEvent.click(getByTestId('square-5'))
		expect(getByTestId('square-5')).toHaveTextContent('O')

		userEvent.click(getByTestId('square-6'))
		expect(getByTestId('square-6')).toHaveTextContent('X')

		expect(getByTestId('winner')).toHaveTextContent('Winner: X')
	})

	test('Check O win', () => {
		const { getByTestId } = render(<App />)

		userEvent.click(getByTestId('square-0'))
		expect(getByTestId('square-0')).toHaveTextContent('X')

		userEvent.click(getByTestId('square-1'))
		expect(getByTestId('square-1')).toHaveTextContent('O')

		userEvent.click(getByTestId('square-3'))
		expect(getByTestId('square-3')).toHaveTextContent('X')

		userEvent.click(getByTestId('square-4'))
		expect(getByTestId('square-4')).toHaveTextContent('O')

		userEvent.click(getByTestId('square-2'))
		expect(getByTestId('square-2')).toHaveTextContent('X')

		userEvent.click(getByTestId('square-7'))
		expect(getByTestId('square-7')).toHaveTextContent('O')

		expect(getByTestId('winner')).toHaveTextContent('Winner: O')
	})

	test('Check restart game', () => {
		const { getByTestId } = render(<App />)

		expect(getByTestId('restart-button')).toHaveStyle(`visibility: hidden`)

		userEvent.click(getByTestId('square-0'))
		expect(getByTestId('square-0')).toHaveTextContent('X')

		userEvent.click(getByTestId('square-1'))
		expect(getByTestId('square-1')).toHaveTextContent('O')

		userEvent.click(getByTestId('square-3'))
		expect(getByTestId('square-3')).toHaveTextContent('X')

		userEvent.click(getByTestId('square-4'))
		expect(getByTestId('square-4')).toHaveTextContent('O')

		userEvent.click(getByTestId('square-2'))
		expect(getByTestId('square-2')).toHaveTextContent('X')

		userEvent.click(getByTestId('square-7'))
		expect(getByTestId('square-7')).toHaveTextContent('O')

		expect(getByTestId('restart-button')).toHaveStyle(`visibility: visible`)

		userEvent.click(getByTestId('restart-button'))

		expect(getByTestId('restart-button')).toHaveStyle(`visibility: hidden`)

		for (let i = 0; i < 9; i++) {
			expect(getByTestId(`square-${i}`)).toHaveTextContent('')
		}

		expect(getByTestId('winner')).toHaveTextContent('Winner:')

		userEvent.click(getByTestId('square-0'))
		expect(getByTestId('square-0')).toHaveTextContent('X')
	})

	test('Check undo button', () => {
		const { getByTestId } = render(<App />)

		userEvent.click(getByTestId('square-0'))
		expect(getByTestId('square-0')).toHaveTextContent('X')

		userEvent.click(getByTestId('undo-button'))

		for (let i = 0; i < 9; i++) {
			expect(getByTestId(`square-${i}`)).toHaveTextContent('')
		}

		userEvent.click(getByTestId('undo-button'))

		for (let i = 0; i < 9; i++) {
			expect(getByTestId(`square-${i}`)).toHaveTextContent('')
		}
	})
})