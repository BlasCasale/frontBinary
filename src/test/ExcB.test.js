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
      binary: "",
      max: {
        positive: "",
        negative: ""
      }
    })
  })
})