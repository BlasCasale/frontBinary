import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import Xor from "@components/LogicalGates/Xor/Xor"
import { useGetXor } from "@hooks/useGetXor"
import { sameLength, badResponse } from "@utils/data"

jest.mock('@hooks/useGetXor')

describe('test de funcionamiento de XOR', () => {
  beforeEach(() => {
    useGetXor.mockClear()
  })

  test('test con cadena vacia', () => {
    useGetXor.mockReturnValue("")

    render(<Xor />)

    const input = screen.getByLabelText(/Cadena n° 1:/)
    fireEvent.change(input, { target: { value: "a" } })
    expect(input.value).toBe("")

    const countOfTrash = screen.getAllByTestId('trashTest')
    expect(countOfTrash).toHaveLength(2)

    expect(screen.getByText(sameLength)).toBeInTheDocument()
  })

  test('test con cadenas 1000 XOR 1011 = 0011', () => {
    useGetXor.mockReturnValue("0011")

    render(<Xor />)

    const firstInput = screen.getByLabelText(/Cadena n° 1:/)
    fireEvent.change(firstInput, { target: { value: "1000" } })
    expect(firstInput.value).toBe("1000")
    const secondInput = screen.getByLabelText(/Cadena n° 2:/)
    fireEvent.change(secondInput, { target: { value: "1011" } })
    expect(secondInput.value).toBe("1011")

    expect(screen.getByText(/Respuesta: 0011/)).toBeInTheDocument()
  })

  test('test con cadenas de diferente longitud', () => {
    useGetXor.mockReturnValue("")

    render(<Xor />)

    const input = screen.getByLabelText(/Cadena n° 1:/)
    fireEvent.change(input, { target: { value: "0" } })
    expect(input.value).toBe('0')

    expect(screen.getByText(badResponse)).toBeInTheDocument()
  })
})