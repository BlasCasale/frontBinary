import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import MemoizedBssDComponent from "../components/Decimals/BssD/BssD"
import { useGetBssD } from "../hooks/useGetBssD"

jest.mock('../hooks/useGetBssD')

describe('test de funcionamiento de BSS decimal', () => {
  test('test con cadena vacia', () => {
    useGetBssD.mockReturnValue("")

    render(<MemoizedBssDComponent boolean={false} chain={""} />)

    expect(screen.getByText(/En BSS:/i)).toBeInTheDocument()
  })

  test('test con cadena 15', () => {
    useGetBssD.mockReturnValue("1111")

    render(<MemoizedBssDComponent boolean={true} chain={"15"} />)

    expect(screen.getByText(/En BSS: 1111/i)).toBeInTheDocument()
  })

  test('test con cadena -35', () => {
    useGetBssD.mockReturnValue("101101") // retorna aunque sea negativo pero no renderiza el resultado

    render(<MemoizedBssDComponent boolean={false} chain={"-35"} />)

    expect(screen.getByText(/No se puede representar números negativos en BSS/i)).toBeInTheDocument()
  })
})