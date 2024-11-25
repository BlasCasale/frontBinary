import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import Not from "@components/LogicalGates/Not/Not"
import { useGetNot } from "@hooks/useGetNot"

jest.mock('@hooks/useGetNot')

describe('test de funcionamiento del NOT', () => {
  beforeEach(() => {
    useGetNot.mockClear()
  })

  test('test con cadena vacia', () => {
    useGetNot.mockReturnValue("")

    render(<Not />)

    const input = screen.getByLabelText(/Cadena n° 1:/)
    // no deberia escribirse
    fireEvent.change(input, { target: { value: "adb" } })

    expect(input.value).toBe("")
    expect(screen.getByText(/Debe ingresarse una cadena para hacer la operación NOT/i)).toBeInTheDocument()
  })

  test('test con cadena 10101', () => {
    useGetNot.mockReturnValue("01010")

    render(<Not />)

    const input = screen.getByLabelText(/Cadena n° 1:/)
    fireEvent.change(input, { target: { value: "10101" } })

    expect(input.value).toBe("10101")
    expect(screen.getByText(/01010/i)).toBeInTheDocument()
  })
})