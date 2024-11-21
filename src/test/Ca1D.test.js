import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import MemoizedCa1DComponent from "../components/Decimals/Ca1D/Ca1D"
import { useGetCa1D } from "../hooks/useGetCa1D"

jest.mock('../hooks/useGetCa1D')

describe('test de funcionamiento de Ca1 decimal', () => {
  beforeEach(() => {
    useGetCa1D.mockClear()
  })

  test('test con cadena vacia', () => {
    useGetCa1D.mockReturnValue("")

    render(<MemoizedCa1DComponent boolean={true} chain={""} />)

    expect(screen.getByText(/En Ca1:/i)).toBeInTheDocument()
  })

  test('test con cadena -19', () => {
    useGetCa1D.mockReturnValue("101100")

    render(<MemoizedCa1DComponent boolean={false} chain={"-19"} />)

    expect(screen.getByText(/En Ca1: 101100/i)).toBeInTheDocument()
  })

  test('test con cadena 76', () => {
    useGetCa1D.mockReturnValue("01001100")

    render(<MemoizedCa1DComponent boolean={true} chain={"76"} />)

    expect(screen.getByText(/En Ca1: 01001100/i)).toBeInTheDocument()
  })
})