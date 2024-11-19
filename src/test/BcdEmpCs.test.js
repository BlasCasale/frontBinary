import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import BcdEmpCs from '../components/Bcd/BcdEmpCs/BcdEmpCs'
import { useGetBcdEmpCs } from "../hooks/useGetBcdEmpCs"

jest.mock('../hooks/useGetBcdEmpCs')

describe('test de funcionamiento BCD empaquetado con signo', () => {
  beforeEach(() => {
    useGetBcdEmpCs.mockClear()
  })

  test('test de cadena 41', () => {
    useGetBcdEmpCs.mockReturnValue("010000011100")

    render(<BcdEmpCs />)

    const inputValue = screen.getByLabelText(/Número con signo:/i)
    fireEvent.change(inputValue, { target: { value: "41a" } })
    expect(inputValue.value).toBe("41")
    expect(screen.getByText("Binario: 010000011100")).toBeInTheDocument()
  })

  test('test de la cadena -32', () => {
    useGetBcdEmpCs.mockReturnValue("001100101101")

    render(<BcdEmpCs />)

    const inputValue = screen.getByLabelText(/Número con signo:/i)
    fireEvent.change(inputValue, { target: { value: "-tre32" } })
    expect(inputValue.value).toBe("-32")
    expect(screen.getByText("Binario: 001100101101")).toBeInTheDocument()
  })

  test('test con cadena vacia', () => {
    useGetBcdEmpCs.mockReturnValue("")

    render(<BcdEmpCs />)

    const inputValue = screen.getByLabelText(/Número con signo:/i)
    fireEvent.change(inputValue, { target: { value: "dahbbidaw" } })
    expect(inputValue.value).toBe("")
    expect(screen.getByText("Binario:")).toBeInTheDocument()
  })
})