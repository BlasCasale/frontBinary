import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import Xnor from "@components/LogicalGates/Xnor/Xnor"
import { useGetNot } from "@hooks/useGetNot"
import { useGetXor } from "@hooks/useGetXor"
import { sameLength, badResponse } from "@utils/data"

jest.mock('@hooks/useGetNot')
jest.mock('@hooks/useGetXor')

describe('test de funcionamiento de XNOR', () => {
  beforeEach(() => {
    useGetNot.mockClear()
    useGetXor.mockClear()
  })

  test('test con cadena vacia', () => {
    useGetNot.mockReturnValue("")
    useGetXor.mockReturnValue("")

    render(<Xnor />)

    const input = screen.getByLabelText(/Cadena n° 1:/)
    // deberia quedar vacio
    fireEvent.change(input, { target: { value: "dawd" } })
    expect(input.value).toBe("")

    const countOfTrash = screen.getAllByTestId('trashTest')
    expect(countOfTrash).toHaveLength(2)
    expect(screen.getByText(sameLength)).toBeInTheDocument()
  })

  test('test con cadenas 1001 XNOR 1010 = 1100', () => {
    useGetXor.mockReturnValue("0011")
    useGetNot.mockReturnValue("1100")

    render(<Xnor />)

    const firstInput = screen.getByLabelText(/Cadena n° 1:/)
    fireEvent.change(firstInput, { target: { value: "1001" } })
    const secondInput = screen.getByLabelText(/Cadena n° 2:/)
    fireEvent.change(secondInput, { target: { value: "1010" } })

    expect(firstInput.value).toBe("1001")
    expect(secondInput.value).toBe("1010")
    expect(screen.getByText(/Respuesta: 1100/i)).toBeInTheDocument()
  })

  test('test con cadenas de diferente longitud', () => {
    useGetNot.mockReturnValue("")
    useGetXor.mockReturnValue("")

    render(<Xnor />)

    const input = screen.getByLabelText(/Cadena n° 1:/)
    fireEvent.change(input, { target: { value: "1" } })

    expect(input.value).toBe("1")
    expect(screen.getByText(badResponse)).toBeInTheDocument()
  })
})