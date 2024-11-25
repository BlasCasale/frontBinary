import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import And from '@components/LogicalGates/And/And'
import { useGetAnd } from '@hooks/useGetAnd'
import { sameLength, badResponse } from "@utils/data"

jest.mock('@hooks/useGetAnd')

describe('test de renderizado con cadena vacia', () => {
  beforeEach(() => {
    useGetAnd.mockClear()
  })

  test('test de renderizado de And', () => {
    useGetAnd.mockReturnValue("")

    render(<And />)

    const countOfTrash = screen.getAllByTestId('trashTest')

    const firstInput = screen.getByLabelText(/Cadena n° 1:/i)
    fireEvent.change(firstInput, { target: { value: "dnbe" } })
    const secondInput = screen.getByLabelText(/Cadena n° 2:/i)
    fireEvent.change(secondInput, { target: { value: "dwau" } })

    expect(countOfTrash).toHaveLength(2)
    expect(screen.getByText(/Compuerta AND/i)).toBeInTheDocument()
    expect(screen.getByText(sameLength)).toBeInTheDocument()
    expect(firstInput.value).toBe("")
    expect(secondInput.value).toBe("")
  })

  test('test con cadenas 1001 AND 0001 = 0001', () => {
    useGetAnd.mockReturnValue("0001")

    render(<And />)

    const firstInput = screen.getByLabelText(/Cadena n° 1:/i)
    fireEvent.change(firstInput, { target: { value: "1001" } })
    const secondInput = screen.getByLabelText(/Cadena n° 2:/)
    fireEvent.change(secondInput, { target: { value: "0001" } })

    expect(screen.getByText("Respuesta: 0001"))
    expect(firstInput.value).toBe("1001")
    expect(secondInput.value).toBe("0001")
  })

  test('test con dos cadenas de diferente long', () => {
    useGetAnd.mockReturnValue("")

    render(<And />)

    const firstInput = screen.getByLabelText(/Cadena n° 1:/)
    fireEvent.change(firstInput, { target: { value: "1" } })

    expect(firstInput.value).toBe("1")
    expect(screen.getByText(badResponse))
  })
})