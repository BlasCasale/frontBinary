import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Aritmetic from "../components/Aritmetic/Aritmetic"

describe('test de Aritmetics', () => {
  test('test de funcionamiento', () => {
    render(<Aritmetic />)

    expect(screen.getByText(/Suma binaria/i)).toBeInTheDocument()
    expect(screen.getByText(/Resta binaria/i)).toBeInTheDocument()

    // busco esta cadena 2 veces para chequear que se inicio bien el componente
    const equalLength = screen.getAllByText(/Ingrese dos cadenas de igual longitud/i)
    expect(equalLength).toHaveLength(2)
    const chain1 = screen.getAllByText(/Cadena n° 1:/i)
    expect(chain1).toHaveLength(2)
    const chain2 = screen.getAllByText(/Cadena n° 2:/i)
    expect(chain2).toHaveLength(2)
    const countOfTrahs = screen.getAllByTestId('trashTest')
    expect(countOfTrahs).toHaveLength(4)
  })
})