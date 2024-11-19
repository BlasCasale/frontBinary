import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import BcdDesCs from '../components/Bcd/BcdDesCs/BcdDesCs'
import { useGetBcdDesCs } from "../hooks/useGetBcdDesCs"

jest.mock('../hooks/useGetBcdDesCs')

describe('test de funcionamiento BCD desempaquetado con signo', () => {
  beforeEach(() => {
    useGetBcdDesCs.mockClear()
  })

  test('test de cadena vacia', () => {
    useGetBcdDesCs.mockReturnValue("")

    render(<BcdDesCs />)

    const inputValue = screen.getByLabelText(/Número con signo:/i)
    fireEvent.change(inputValue, { target: { value: "dywba" } })

    expect(inputValue.value).toBe("")
    expect(screen.getByText(/Binario:/i)).toBeInTheDocument()
  })

  test('test de cadena 26', () => {
    useGetBcdDesCs.mockReturnValue("1111001011000110")

    render(<BcdDesCs />)

    const inputValue = screen.getByLabelText(/Número con signo:/i)
    fireEvent.change(inputValue, { target: { value: "da26" } })

    expect(inputValue.value).toBe("26")
    expect(screen.getByText(/Binario: 1111001011000110/i)).toBeInTheDocument()
  })

  test('test de cadena -146', () => {
    useGetBcdDesCs.mockReturnValue("111100011111010011010110")

    render(<BcdDesCs />)

    const inputValue = screen.getByLabelText(/Número con signo:/i)
    fireEvent.change(inputValue, { target: { value: "-dda1rt46" } })

    expect(inputValue.value).toBe("-146")
    expect(screen.getByText(/Binario: 111100011111010011010110/i)).toBeInTheDocument()
  })
})