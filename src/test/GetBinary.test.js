import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import MemoizedGetBinarieComponent from "../components/Hexadecimals/GetBinarie/GetBinarie"
import { useGetBinarie } from "../hooks/useGetBinarie"

jest.mock('../hooks/useGetBinarie')

describe('test de funcionamiento de get binarie', () => {
  beforeEach(() => {
    useGetBinarie.mockClear()
  })

  test('test de cadena vacia', () => {
    useGetBinarie.mockReturnValue("")

    render(<MemoizedGetBinarieComponent />)

    const inputValue = screen.getByLabelText(/Hexadecimal:/i)
    // con esta cadena deberia fallar y no haber escrito nada
    fireEvent.change(inputValue, { target: { value: "niwz" } })

    expect(inputValue.value).toBe("")
    expect(screen.getByText(/De hexadecimal a binario/i)).toBeInTheDocument()
    expect(screen.getByText(/Cadena en binario:/)).toBeInTheDocument()
  })

  test('test con cadena AB1 (se debería completar la cadena con 0AB1', () => {
    useGetBinarie.mockReturnValue("0000100010010001")

    render(<MemoizedGetBinarieComponent />)

    const inputValue = screen.getByLabelText(/Hexadecimal/i)
    fireEvent.change(inputValue, { target: { value: "ab1j" } })

    expect(inputValue.value).toBe("AB1")
    expect(screen.getByText(/De hexadecimal a binario/i)).toBeInTheDocument()
    expect(screen.getByText(/Cadena en binario: 0000100010010001/i)).toBeInTheDocument()
  })
})