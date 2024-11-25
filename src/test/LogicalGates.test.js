import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import LogicalGates from "../components/LogicalGates/LogicalGates"


describe('test de funcionamiento de logical gates', () => {
  test('test de renderizado de componentes', () => {
    render(<LogicalGates />)

    const countOfTrash = screen.getAllByTestId('trashTest')
    expect(countOfTrash).toHaveLength(11)
    expect(screen.getByText(/Compuertas lógicas/i)).toBeInTheDocument()
  })
})