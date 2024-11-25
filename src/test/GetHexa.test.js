import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import MemoizedGetHexa from "../components/Hexadecimals/GetHexa/GetHexa"
import { useGetHexadecimal } from "../hooks/useGetHexadecimal"

jest.mock('../hooks/useGetHexadecimal')

describe('test de funcionamiento de Get Hexa', () => {
  beforeEach(() => {
    useGetHexadecimal.mockClear()
  })

  test('test con cadena vacia', () => {
    useGetHexadecimal.mockReturnValue("")

    render(<MemoizedGetHexa />)

    const inputValue = screen.getByLabelText(/Binario:/i)
    // deberia no tener valor por el control de escritura
    fireEvent.change(inputValue, { target: { value: "audw" } })

    expect(inputValue.value).toBe("")
    expect(screen.getByText(/Cadena en hexadecimal:/i)).toBeInTheDocument()
  })

  test('test con cadena 1010010001 (2B1 en hexa)', () => {
    useGetHexadecimal.mockReturnValue("2B1")

    render(<MemoizedGetHexa />)

    const inputValue = screen.getByLabelText(/Binario:/i)
    fireEvent.change(inputValue, { target: { value: "1010010001" } })

    expect(inputValue.value).toBe("1010010001")
    expect(screen.getByText(/Cadena en hexadecimal: 2B1/i)).toBeInTheDocument()
  })
})