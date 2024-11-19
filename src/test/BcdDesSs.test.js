import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import BcdDesSs from '../components/Bcd/BcdDesSs/BcdDesSs'
import { useGetBcdDesSs } from "../hooks/useGetBcdDesSs"

jest.mock('../hooks/useGetBcdDesSs')

describe('test de funcionamiento BCD desempaquetado sin signo', () => {
  beforeEach(() => {
    useGetBcdDesSs.mockClear()
  })

  test('test con cadena vacia', () => {
    useGetBcdDesSs.mockReturnValue("")

    render(<BcdDesSs />)

    const inputValue = screen.getByLabelText(/Número sin signo:/i)
    fireEvent.change(inputValue, { target: { value: "biui" } })

    expect(inputValue.value).toBe("")
    expect(screen.getByText(/Binario:/i)).toBeInTheDocument()
  })

  test('test con cadena 63', () => {
    useGetBcdDesSs.mockReturnValue("1111011011110011")

    render(<BcdDesSs />)

    const inputValue = screen.getByLabelText(/Número sin signo:/i)
    fireEvent.change(inputValue, { target: { value: "63" } })
    expect(inputValue.value).toBe("63")
    expect(screen.getByText(/Binario: 1111011011110011/i)).toBeInTheDocument()
  })
})