import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Hexadecimals from "../components/Hexadecimals/Hexadecimals"

describe('test de funcionamiento de hexadecimals', () => {
  test('test de renderizado inicial', () => {
    render(<Hexadecimals />)

    expect(screen.getByText(/BCH/i)).toBeInTheDocument()
    const countOfTrash = screen.getAllByTestId('trashTest')
    expect(countOfTrash).toHaveLength(2)
    expect(screen.getByText(/Cadena en hexadecimal:/i)).toBeInTheDocument()
    expect(screen.getByText(/Cadena en binario:/i)).toBeInTheDocument()
  })
})