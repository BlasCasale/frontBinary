import React from "react"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Bcd from '../components/Bcd/Bcd'

describe('', () => {
  test('test de funcionamiento', () => {
    render(<Bcd />)

    // busco la cadena BCD
    const bcdCount = screen.getAllByText(/BCD/i)
    expect(bcdCount).toHaveLength(5)
    // busco la cantidad de svg
    const countOfTrahs = screen.getAllByTestId('trashTest')
    expect(countOfTrahs).toHaveLength(4)
    // busco la cantidad de con signo que deberia haber
    const withSignCount = screen.getAllByText(/con signo/i)
    expect(withSignCount).toHaveLength(4)
    // busco la cantidad de sin signo que deberia haber
    const withoutSignCount = screen.getAllByText(/sin signo/i)
    expect(withoutSignCount).toHaveLength(4)
  })
})