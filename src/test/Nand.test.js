import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import Nand from "@components/LogicalGates/Nand/Nand"
import { useGetNand } from "@hooks/useGetNand"
import { badResponse, sameLength } from "@utils/data"

jest.mock('@hooks/useGetNand')

describe('test de funcionamiento de NAND', () => {
  beforeEach(() => {
    useGetNand.mockClear()
  })

  test('test con cadena vacia', () => {
    useGetNand.mockReturnValue("")

    render(<Nand />)

    const firstInput = screen.getByLabelText(/Cadena n° 1:/i)
    // no deberia escribir nada
    fireEvent.change(firstInput, { target: { value: "da" } })

    expect(firstInput.value).toBe("")
    expect(screen.getByText(sameLength)).toBeInTheDocument()
  })

  test('test con cadenas 1010 NAND 0101 = 1111', () => {
    useGetNand.mockReturnValue("1111")

    render(<Nand />)

    const firstInput = screen.getByLabelText(/Cadena n° 1:/)
    fireEvent.change(firstInput, { target: { value: "1010" } })

    const secondInput = screen.getByLabelText(/Cadena n° 2:/)
    fireEvent.change(secondInput, { target: { value: "0101" } })

    expect(firstInput.value).toBe("1010")
    expect(secondInput.value).toBe("0101")
    expect(screen.getByText(/Respuesta: 1111/i)).toBeInTheDocument()
  })

  test('test con cadenas de distinta longitud', () => {
    useGetNand.mockReturnValue("")

    render(<Nand />)

    const firstInput = screen.getByLabelText(/Cadena n° 1:/)
    fireEvent.change(firstInput, { target: { value: "1" } })

    expect(screen.getByText(badResponse)).toBeInTheDocument()
    expect(firstInput.value).toBe("1")
  })
})