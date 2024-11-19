import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import BcdEmpSs from '../components/Bcd/BcdEmpSs/BcdEmpSs'
import { useGetBcdEmpSs } from "../hooks/useGetBcdEmpSs"

jest.mock('../hooks/useGetBcdEmpSs')

describe('test de funcionamiento BCD empaquetado sin signo', () => {
  beforeEach(() => {
    useGetBcdEmpSs.mockClear()
  })

  test('test de cadena 123', () => {
    useGetBcdEmpSs.mockReturnValue("000100100011")

    render(<BcdEmpSs />)

    const inputValue = screen.getByLabelText(/Número sin signo:/i)
    fireEvent.change(inputValue, { target: { value: "123" } })

    expect(inputValue.value).toBe("123")
    expect(screen.getByText(/000100100011/i)).toBeInTheDocument()
  })

  test('test escribiendo cadena 12e', () => {
    useGetBcdEmpSs.mockReturnValue("00010010")

    render(<BcdEmpSs />)

    const inputValue = screen.getByLabelText(/Número sin signo:/i)
    fireEvent.change(inputValue, { target: { value: "12e" } })
    expect(inputValue.value).toBe("12")
    expect(screen.getByText("Binario: 00010010")).toBeInTheDocument()
  })

  test('test con cadena vacia', () => {
    useGetBcdEmpSs.mockReturnValue("")

    render(<BcdEmpSs />)

    const inputValue = screen.getByLabelText(/Número sin signo:/i)
    fireEvent.change(inputValue, { target: { value: "" } })
    expect(inputValue.value).toBe("")
    expect(screen.getByText("Binario:")).toBeInTheDocument()
  })
})