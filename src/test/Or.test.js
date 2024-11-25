import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import Or from "@components/LogicalGates/Or/Or"
import { useGetOr } from "@hooks/useGetOr"
import { badResponse, sameLength } from "@utils/data"

jest.mock('@hooks/useGetOr')

describe('test de funcionamiento de Or', () => {
  beforeEach(() => {
    useGetOr.mockClear()
  })

  test('test con cadena vacia', () => {
    useGetOr.mockReturnValue("")

    render(<Or />)

    const input = screen.getByLabelText(/Cadena n° 1:/)
    // no deberia escribirse
    fireEvent.change(input, { target: { value: "tad" } })

    expect(input.value).toBe("")
    expect(screen.getByText(sameLength))
  })

  test('test con cadenas 11001 OR 10010 = 11011', () => {
    useGetOr.mockReturnValue("11011")

    render(<Or />)

    const firstInput = screen.getByLabelText(/Cadena n° 1:/)
    fireEvent.change(firstInput, { target: { value: "11001" } })
    const secondInput = screen.getByLabelText(/Cadena n° 2:/)
    fireEvent.change(secondInput, { target: { value: "10010" } })

    expect(firstInput.value).toBe("11001")
    expect(secondInput.value).toBe("10010")
    expect(screen.getByText(/Respuesta: 11011/i)).toBeInTheDocument()
  })

  test('test con cadenas de distinta longitud', () => {
    useGetOr.mockReturnValue("")

    render(<Or />)

    const input = screen.getByLabelText(/Cadena n° 1:/)
    fireEvent.change(input, { target: { value: "1" } })

    expect(input.value).toBe("1")
    expect(screen.getByText(badResponse)).toBeInTheDocument()
  })
})