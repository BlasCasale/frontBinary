import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import Decimals from '../components/Decimals/Decimals'

describe('test de funcionamiento', () => {
  test('renderizado inicial', () => {
    render(<Decimals />)

    const countOfTrash = screen.getAllByTestId('trashTest')
    expect(countOfTrash).toHaveLength(1)
    expect(screen.getByText(/Decimal:/i)).toBeInTheDocument()
    expect(screen.getByText(/En BSS:/i)).toBeInTheDocument()
    expect(screen.getByText(/En BCS:/i)).toBeInTheDocument()
    expect(screen.getByText(/En Ca1:/)).toBeInTheDocument()
    expect(screen.getByText(/En Ca2:/i)).toBeInTheDocument()
    expect(screen.getByText(/En Exc:/i)).toBeInTheDocument()
  })

  test('test de escritura en el input', () => {
    render(<Decimals />)

    const inputValue = screen.getByLabelText(/Decimal:/i)
    fireEvent.change(inputValue, { target: { value: "dad" } })
    expect(inputValue.value).toBe("")

    fireEvent.change(inputValue, { target: { value: "132" } })
    expect(inputValue.value).toBe("132")
  })
})