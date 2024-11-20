import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import BcsB from '../components/Binaries/BcsB/BcsB'
import { useGetBcsB } from "../hooks/useGetBcsB"

jest.mock("../hooks/useGetBcsB")

describe('test de funcionamiento de BCS binario', () => {
  beforeEach(() => {
    useGetBcsB.mockClear()
  })

  test('test con cadena vacia', () => {
    useGetBcsB.mockReturnValue({
      binary: "",
      max: {
        positive: "",
        negative: ""
      }
    })

    render(<BcsB chain={""} />)

    expect(screen.getByText(/El número interpretado en BCS es:/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número positivo representable es:/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número negativo representable es:/i)).toBeInTheDocument()
  })

  test('test con cadena 101010', () => {
    useGetBcsB.mockReturnValue({
      binary: "-10",
      max: {
        positive: 31,
        negative: -31
      }
    })

    render(<BcsB chain={"101010"} />)

    expect(screen.getByText(/El número interpretado en BCS es: -10/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número positivo representable es: 31/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número negativo representable es: -31/i)).toBeInTheDocument()
  })

  test('test con cadena 010101', () => {
    useGetBcsB.mockReturnValue({
      binary: "21",
      max: {
        positive: 31,
        negative: -31
      }
    })

    render(<BcsB chain={"010101"} />)

    expect(screen.getByText(/El número interpretado en BCS es: 21/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número positivo representable es: 31/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número negativo representable es: -31/i)).toBeInTheDocument()
  })
})