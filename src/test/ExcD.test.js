import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import MemoizedExcDComponent from "../components/Decimals/ExcD/ExcD"
import { useGetExcD } from "../hooks/useGetExcD"

jest.mock('../hooks/useGetExcD')

describe('test de funcionamiento Exc decimal', () => {
  beforeEach(() => {
    useGetExcD.mockClear()
  })

  test('test con cadena vacia', () => {
    useGetExcD.mockReturnValue("")

    render(<MemoizedExcDComponent boolean={true} chain={""} />)

    expect(screen.getByText(/En Exc:/i)).toBeInTheDocument()
  })

  test('test con cadena 8', () => {
    useGetExcD.mockReturnValue("11000")

    render(<MemoizedExcDComponent boolean={true} chain={"8"} />)

    expect(screen.getByText(/En Exc: 11000/i)).toBeInTheDocument()
  })

  test('test con cadena -92', () => {
    useGetExcD.mockReturnValue("00100100")

    render(<MemoizedExcDComponent boolean={false} chain={"-92"} />)

    expect(screen.getByText(/En Exc: 00100100/i)).toBeInTheDocument()
  })
})