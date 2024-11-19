import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Binaries from "../components/Binaries/Binaries"

describe('test de funcionamiento', () => {
  test('renderizado inicial', () => {
    render(<Binaries />)

    const countOfTrahs = screen.getAllByTestId('trashTest')
    expect(countOfTrahs).toHaveLength(1)
    expect(screen.getByText(/El número interpretado en BSS es:/i)).toBeInTheDocument()
    expect(screen.getByText(/El número interpretado en BCS es:/i)).toBeInTheDocument()
    expect(screen.getByText(/El número interpretado en Ca1 es:/i)).toBeInTheDocument()
    expect(screen.getByText(/El número interpretado en Ca2 es:/i)).toBeInTheDocument()
    expect(screen.getByText(/El número interpretado en Exc es:/i)).toBeInTheDocument()
  })

  test('prueba de escritura en el input', () => {
    render(<Binaries />)

    //primero se ingresa una cadena no válida
    const inputValue = screen.getByLabelText(/Cadena binaria:/i)
    fireEvent.change(inputValue, { target: { value: "dand" } })

    expect(inputValue.value).toBe("")

    // luego se ingresa una cadena válida
    fireEvent.change(inputValue, { target: { value: "10101" } })

    expect(inputValue.value).toBe("10101")
  })
})