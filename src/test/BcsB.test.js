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
      result: "",
      max: {
        positive: "",
        negative: ""
      }
    })

    render(<BcsB chain={""} />)

    expect(screen.getByText(/El número interpretado en BCS es:/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo N° positivo representable es:/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo N° negativo representable es:/i)).toBeInTheDocument()
  })

  test('test con cadena 101010', () => {
    useGetBcsB.mockReturnValue({
      result: "-10",
      max: {
        positive: 31,
        negative: -31
      }
    })

    render(<BcsB chain={"101010"} />)

    expect(screen.getByText(/El número interpretado en BCS es: -10/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo N° positivo representable es: 31/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo N° negativo representable es: -31/i)).toBeInTheDocument()
  })
})