import React from "react"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Ca2B from '../components/Binaries/Ca2B/Ca2B'
import { useGetCa2B } from "../hooks/useGetCa2B"

jest.mock('../hooks/useGetCa2B')

describe('test de funcionamiento de Ca2 binario', () => {
  beforeEach(() => {
    useGetCa2B.mockClear()
  })

  test('test con cadena vacia', () => {
    useGetCa2B.mockReturnValue({
      binary: "",
      max: {
        positive: "",
        negative: ""
      }
    })

    render(<Ca2B chain={""} />)

    expect(screen.getByText(/El número interpretado en Ca2 es:/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número positivo representable es:/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número negativo representable es:/i)).toBeInTheDocument()
  })

  test('test con cadena 11111', () => {
    useGetCa2B.mockReturnValue({
      binary: "-1",
      max: {
        positive: "15",
        negative: "-16"
      }
    })

    render(<Ca2B chain={"11111"} />)

    expect(screen.getByText(/El número interpretado en Ca2 es: -1/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número positivo representable es: 15/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número negativo representable es: -16/i)).toBeInTheDocument()
  })

  test('test con cadena 01101', () => {
    useGetCa2B.mockReturnValue({
      binary: "13",
      max: {
        positive: "15",
        negative: "-16"
      }
    })

    render(<Ca2B chain={"01101"} />)
    expect(screen.getByText(/El número interpretado en Ca2 es: 13/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número positivo representable es: 15/i)).toBeInTheDocument()
    expect(screen.getByText(/El máximo número negativo representable es: -16/i)).toBeInTheDocument()
  })
})