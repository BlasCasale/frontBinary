import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { useGetBssB } from "../hooks/useGetBssB"
import BssB from '../components/Binaries/BssB/BssB'

jest.mock('../hooks/useGetBssB')

describe('test de funcionamiento de BSS binario', () => {
  beforeEach(() => {
    useGetBssB.mockClear()
  })

  test('test con cadena vacia', () => {
    useGetBssB.mockReturnValue({
      num: "",
      max: ""
    })

    render(<BssB chain={""} />)

    expect(screen.getByText(/El número interpretado en BSS es:/i)).toBeInTheDocument()
    expect(screen.getByText(/Máximo número representable en BSS:/i)).toBeInTheDocument()
  })

  test('test con cadena 101101', () => {
    useGetBssB.mockReturnValue({
      num: "45",
      max: "63"
    })

    render(<BssB chain={"101101"} />)

    expect(screen.getByText(/El número interpretado en BSS es: 45/i)).toBeInTheDocument()
    expect(screen.getByText(/Máximo número representable en BSS: 63/i)).toBeInTheDocument()
  })
})