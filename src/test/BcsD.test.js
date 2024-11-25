import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import MemoizedBcsDComponent from "../components/Decimals/BcsD/BcsD"
import { useGetBcsD } from "../hooks/useGetBcsD"

jest.mock("../hooks/useGetBcsD")

describe('test de funcionamiento BCS decimal', () => {
  beforeEach(() => {
    useGetBcsD.mockClear()
  })

  test('test con cadena vacia', () => {
    useGetBcsD.mockReturnValue("")

    // el false es para determinar el resultado del num
    render(<MemoizedBcsDComponent chain={""} boolean={false} />)

    expect(screen.getByText(/En BCS:/i)).toBeInTheDocument()
  })

  test('test con cadena 82', () => {
    useGetBcsD.mockReturnValue("01010010")

    render(<MemoizedBcsDComponent boolean={false} chain={"82"} />)

    expect(screen.getByText(/En BCS: 01010010/i)).toBeInTheDocument()
  })

  test('test con cadena -45', () => {
    useGetBcsD.mockReturnValue("1101101")

    render(<MemoizedBcsDComponent boolean={true} chain={"-45"} />)

    expect(screen.getByText(/En BCS: 1101101/i)).toBeInTheDocument()
  })
})