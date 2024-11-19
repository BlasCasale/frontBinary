import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import OutputSub from '../components/Aritmetic/Subtraction/OutputSub'
import { useGetSub } from '../hooks/useGetSub'

// Mock the useGetSub hook
jest.mock('../hooks/useGetSub')

describe('OutputSub Component', () => {

  beforeEach(() => {
    useGetSub.mockClear()
  })

  test('renders OutputSub con 0 - 0', () => {
    // Mock the hook's return value for default props
    useGetSub.mockReturnValue({
      result: '0000',
      carry: '0',
      n: '0',
      overflow: '0',
      z: '0',
    })

    render(<OutputSub one="0000" two="0000" />)

    const answerBinary = screen.getAllByText(/0000/i)
    expect(answerBinary).toHaveLength(3)

    expect(screen.getByText(/C=0/i)).toBeInTheDocument()
    expect(screen.getByText(/N=0/i)).toBeInTheDocument()
    expect(screen.getByText(/O=0/i)).toBeInTheDocument()
    expect(screen.getByText(/Z=0/i)).toBeInTheDocument()
  })

  test('renders OutputSub 2 - 3', () => {
    // Mock the hook's return value for valid props
    useGetSub.mockReturnValue({
      result: '0000', // Ejemplo de cadena binaria
      carry: '1',
      n: '1',
      overflow: '0',
      z: '0',
    })

    render(<OutputSub one="0010" two="0011" />)

    // respuesta basada en las props
    expect(screen.getByText(/0010/i)).toBeInTheDocument()
    expect(screen.getByText(/0011/i)).toBeInTheDocument()
    expect(screen.getByText(/0000/i)).toBeInTheDocument()
    expect(screen.getByText(/C=1/i)).toBeInTheDocument()
    expect(screen.getByText(/N=1/i)).toBeInTheDocument()
    expect(screen.getByText(/O=0/i)).toBeInTheDocument()
    expect(screen.getByText(/Z=0/i)).toBeInTheDocument()
  })

  test('rendes OutputSub con 5 - 13', () => {

    useGetSub.mockReturnValue({
      result: "1000",
      carry: "1",
      n: "1",
      overflow: "1",
      z: "0"
    })

    render(<OutputSub one="0101" two={"1101"} />)

    expect(screen.getByText(/0101/i)).toBeInTheDocument()
    expect(screen.getByText(/1101/i)).toBeInTheDocument()
    expect(screen.getByText(/1000/i)).toBeInTheDocument()
    expect(screen.getByText(/C=1/i)).toBeInTheDocument()
    expect(screen.getByText(/N=1/i)).toBeInTheDocument()
    expect(screen.getByText(/O=1/i)).toBeInTheDocument()
    expect(screen.getByText(/Z=0/i)).toBeInTheDocument()
  })

  test('rendes OutputSub con 15 - 15', () => {

    useGetSub.mockReturnValue({
      result: "0000",
      carry: "0",
      n: "0",
      overflow: "0",
      z: "1"
    })

    render(<OutputSub one="1111" two="1111" />)

    const answerBinary = screen.getAllByText(/1111/i)
    expect(answerBinary).toHaveLength(2)

    expect(screen.getByText(/0000/i)).toBeInTheDocument()
    expect(screen.getByText(/C=0/i)).toBeInTheDocument()
    expect(screen.getByText(/N=0/i)).toBeInTheDocument()
    expect(screen.getByText(/O=0/i)).toBeInTheDocument()
    expect(screen.getByText(/Z=1/i)).toBeInTheDocument()
  })

  test('render con props de difente length', () => {

    useGetSub.mockReturnValue({
      result: "",
      carry: "0",
      n: "0",
      overflow: "0",
      z: "0"
    })

    render(<OutputSub one={"1111"} two={"00010101"} />)

    expect(screen.getByText(/1111/i)).toBeInTheDocument()
    expect(screen.getByText(/00010101/i)).toBeInTheDocument()
    expect(screen.getByText(/Las cadenas deben tener la misma longitud para compararse/i)).toBeInTheDocument()
    expect(screen.getByText(/C=0/i)).toBeInTheDocument()
    expect(screen.getByText(/N=0/i)).toBeInTheDocument()
    expect(screen.getByText(/O=0/i)).toBeInTheDocument()
    expect(screen.getByText(/Z=0/i)).toBeInTheDocument()
  })
})