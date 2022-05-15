import React from 'react'
import App from '../App'

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import 'jest-styled-components'

describe('this suit is to test the App component', () => {
	it('snapshot of App', () => {
		expect.assertions(1)

		const { asFragment } = render(<App />)

		expect.hasAssertions()

		expect(asFragment()).toMatchSnapshot()
	})

	it('all square rendered with value', () => {
		expect.assertions(9)

		const { getByTestId } = render(<App />)

		for (let i = 0; i < 9; i++) {
			expect(getByTestId(`square-${i}`)).toHaveTextContent('')
		}
	})

	it('click on square', () => {
		expect.assertions(1)

		const { getByTestId } = render(<App />)

		userEvent.click(getByTestId('square-0'))

		expect(getByTestId('square-0')).toHaveTextContent('X')
	})

	it('click on square and check if all square rendered with no value', () => {
		expect.assertions(9)

		const { getByTestId } = render(<App />)

		for (let i = 0; i < 9; i++) {
			expect(getByTestId(`square-${i}`)).toHaveTextContent('')
		}
	})

	it('taking turns and click all square', () => {
		expect.assertions(9)

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

	it('check X win', () => {
		expect.assertions(9)

		const { getByTestId } = render(<App />)

		expect(getByTestId('result')).toHaveTextContent('')

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

		expect(getByTestId('result')).toHaveTextContent('Winner: X')
	})

	it('check O win', () => {
		expect.assertions(8)

		const { getByTestId } = render(<App />)

		expect(getByTestId('result')).toHaveTextContent('')

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

		expect(getByTestId('result')).toHaveTextContent('Winner: O')
	})

	it('check restart game', () => {
		expect.assertions(21)

		const { getByTestId } = render(<App />)

		expect(getByTestId('restart-button')).toHaveStyle('visibility: hidden')

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

		expect(getByTestId('restart-button')).toHaveStyle('visibility: visible')

		userEvent.click(getByTestId('restart-button'))

		expect(getByTestId('restart-button')).toHaveStyle('visibility: hidden')

		for (let i = 0; i < 9; i++) {
			expect(getByTestId(`square-${i}`)).toHaveTextContent('')
		}

		expect(getByTestId('result')).toHaveTextContent('')
		expect(getByTestId('result')).toHaveStyle('visibility: hidden')

		userEvent.click(getByTestId('square-0'))
		expect(getByTestId('square-0')).toHaveTextContent('X')
	})

	it('check undo button', () => {
		expect.assertions(19)

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

	it("don't undo if game draw", () => {
		expect.assertions(20)

		const { getByTestId } = render(<App />)

		expect(getByTestId('result')).toHaveTextContent('')

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

		expect(getByTestId('result')).toHaveTextContent('Draw')

		userEvent.click(getByTestId('undo-button'))

		expect(getByTestId('square-0')).toHaveTextContent('X')
		expect(getByTestId('square-1')).toHaveTextContent('O')
		expect(getByTestId('square-2')).toHaveTextContent('X')
		expect(getByTestId('square-3')).toHaveTextContent('X')
		expect(getByTestId('square-4')).toHaveTextContent('O')
		expect(getByTestId('square-5')).toHaveTextContent('O')
		expect(getByTestId('square-6')).toHaveTextContent('O')
		expect(getByTestId('square-7')).toHaveTextContent('X')
		expect(getByTestId('square-8')).toHaveTextContent('X')
	})

	it("don't undo if game finished", () => {
		expect.assertions(12)

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

		userEvent.click(getByTestId('undo-button'))

		expect(getByTestId('square-0')).toHaveTextContent('X')
		expect(getByTestId('square-1')).toHaveTextContent('O')
		expect(getByTestId('square-3')).toHaveTextContent('X')
		expect(getByTestId('square-4')).toHaveTextContent('O')
		expect(getByTestId('square-2')).toHaveTextContent('X')
		expect(getByTestId('square-7')).toHaveTextContent('O')
	})

	it('check draw', () => {
		expect.assertions(11)

		const { getByTestId } = render(<App />)

		expect(getByTestId('result')).toHaveTextContent('')

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

		expect(getByTestId('result')).toHaveTextContent('Draw')
	})

	it('check result hidden', () => {
		expect.assertions(12)

		const { getByTestId } = render(<App />)

		expect(getByTestId('result')).toHaveTextContent('')
		expect(getByTestId('result')).toHaveStyle(`visibility: hidden`)

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

		expect(getByTestId('result')).toHaveStyle('visibility: visible')
	})
})
