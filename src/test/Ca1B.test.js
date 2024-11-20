import React from "react"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Ca1B from '../components/Binaries/Ca1B/Ca1B'
import { useGetCa1B } from "../hooks/useGetCa1B"

jest.mock('../hooks/useGetCa1B')

describe('test de funcionamiento de Ca1 binario', () => {
  beforeEach(() => {
    useGetCa1B.mockClear()
  })

  test('test con cadena vacia', () => {
    useGetCa1B.mockReturnValue({
      binary: "",
      max: {
        positive: "",
        negative: ""
      }
    })

    render(<Ca1B chain={""} />)

    expect(screen.getByText(/El número interpretado en Ca1 es:/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número positivo representable es:/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número negativo representable es:/i)).toBeInTheDocument()
  })

  test('test con cadena 100011', () => {
    useGetCa1B.mockReturnValue({
      binary: "-28",
      max: {
        positive: "31",
        negative: "-31"
      }
    })

    render(<Ca1B chain={"100011"} />)

    expect(screen.getByText(/El número interpretado en Ca1 es: -28/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número positivo representable es: 31/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número negativo representable es: -31/i)).toBeInTheDocument()
  })

  test('test con cadena 011101', () => {
    useGetCa1B.mockReturnValue({
      binary: "29",
      max: {
        positive: "31",
        negative: "-31"
      }
    })

    render(<Ca1B chain={"011101"} />)

    expect(screen.getByText(/El número interpretado en Ca1 es: 29/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número positivo representable es: 31/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número negativo representable es: -31/i)).toBeInTheDocument()
  })
})