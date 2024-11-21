import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import MemoizedExcBComponent from "../components/Binaries/ExcB/ExcB"
import { useGetExcB } from "../hooks/useGetExcB"

jest.mock('../hooks/useGetExcB')

describe('test de funcionamiento de Exc binario', () => {
  beforeEach(() => {
    useGetExcB.mockClear()
  })

  test('test con cadena vacia', () => {
    useGetExcB.mockReturnValue({
      binary: "",
      max: {
        positive: "",
        negative: ""
      }
    })

    render(<MemoizedExcBComponent chain={""} />)

    expect(screen.getByText(/El número interpretado en Exc es:/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número positivo representable es:/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número negativo representable es:/i)).toBeInTheDocument()
  })

  test('test con cadena 1010101', () => {
    useGetExcB.mockReturnValue({
      binary: "21",
      max: {
        positive: "63",
        negative: "-127"
      }
    })

    render(<MemoizedExcBComponent chain={"1010101"} />)

    expect(screen.getByText(/El número interpretado en Exc es: 21/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número positivo representable es: 63/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número negativo representable es: -127/i)).toBeInTheDocument()
  })

  test('test con cadena 00101', () => {
    useGetExcB.mockReturnValue({
      binary: "-11",
      max: {
        positive: "15",
        negative: "-31"
      }
    })

    render(<MemoizedExcBComponent chain={"00101"} />)

    expect(screen.getByText(/El número interpretado en Exc es: -11/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número positivo representable es: 15/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número negativo representable es: -31/i)).toBeInTheDocument()
  })
})