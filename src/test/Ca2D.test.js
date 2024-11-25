import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import MemoizedCa2DComponent from "../components/Decimals/Ca2D/Ca2D"
import { useGetCa2D } from "../hooks/useGetCa2D"

jest.mock('../hooks/useGetCa2D')

describe('test de funcionamiento Ca2 decimal', () => {
  beforeEach(() => {
    useGetCa2D.mockClear()
  })

  test('test con cadena vacia', () => {
    useGetCa2D.mockReturnValue("")

    render(<MemoizedCa2DComponent boolean={true} chain={""} />)

    expect(screen.getByText(/En Ca2:/i)).toBeInTheDocument()
  })

  test('test con cadena 82', () => {
    useGetCa2D.mockReturnValue("01010010")

    render(<MemoizedCa2DComponent boolean={true} chain={"82"} />)

    expect(screen.getByText(/En Ca2: 01010010/i)).toBeInTheDocument()
  })

  test('test con cadena -135', () => {
    useGetCa2D.mockReturnValue("101111001")

    render(<MemoizedCa2DComponent boolean={false} chain={"-135"} />)

    expect(screen.getByText(/En Ca2: 101111001/i)).toBeInTheDocument()
  })
})
