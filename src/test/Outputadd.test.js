import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Outputadd from '../components/Aritmetic/Add/Outputadd'
import { useGetAdd } from '../hooks/useGetAdd'

jest.mock('../hooks/useGetAdd')

describe('test de outputadd', () => {
  beforeEach(() => {
    useGetAdd.mockClear()
  })

  test('test de 0 + 0', () => {
    useGetAdd.mockReturnValue({
      result: "0000",
      carry: "0",
      n: "0",
      overflow: "0",
      z: "1"
    })

    render(<Outputadd one={"0000"} two={"0000"} />)

    const answerBinary = screen.getAllByText(/0000/i)
    expect(answerBinary).toHaveLength(3)
    expect(screen.getByText(/C=0/i)).toBeInTheDocument()
    expect(screen.getByText(/N=0/i)).toBeInTheDocument()
    expect(screen.getByText(/O=0/i)).toBeInTheDocument()
    expect(screen.getByText(/Z=1/i)).toBeInTheDocument()
  })

  test('test de 15 + 15', () => {
    useGetAdd.mockReturnValue({
      result: "0000",
      carry: "1",
      n: "0",
      overflow: "1",
      z: "1"
    })

    render(<Outputadd one={"1111"} two={"1111"} />)

    const answerBinary = screen.getAllByText(/1111/i)
    expect(answerBinary).toHaveLength(2)

    expect(screen.getByText(/0000/i)).toBeInTheDocument()
    expect(screen.getByText(/C=1/i)).toBeInTheDocument()
    expect(screen.getByText(/N=0/i)).toBeInTheDocument()
    expect(screen.getByText(/O=1/)).toBeInTheDocument()
    expect(screen.getByText(/Z=1/i)).toBeInTheDocument()
  })

  test('test de cadenas vacias', () => {
    useGetAdd.mockReturnValue({
      result: "",
      carry: "0",
      n: "0",
      overflow: "0",
      z: "0"
    })

    render(<Outputadd one={""} two={""} />)

    expect(screen.getByText(/Ingrese dos cadenas de igual longitud/i)).toBeInTheDocument()
    expect(screen.getByText(/C=0/i)).toBeInTheDocument()
    expect(screen.getByText(/N=0/i)).toBeInTheDocument()
    expect(screen.getByText(/O=0/i)).toBeInTheDocument()
    expect(screen.getByText(/Z=0/i)).toBeInTheDocument()
  })

  test('test con cadenas de distinta longitud', () => {
    useGetAdd.mockReturnValue({
      result: "",
      carry: "0",
      n: "0",
      overflow: "0",
      z: "0"
    })

    render(<Outputadd one={"11110"} two={"101"} />)

    expect(screen.getByText(/Las cadenas deben tener la misma longitud para compararse/i)).toBeInTheDocument()
    expect(screen.getByText(/11110/i)).toBeInTheDocument()
    expect(screen.getByText(/101/i)).toBeInTheDocument()
    expect(screen.getByText(/C=0/i)).toBeInTheDocument()
    expect(screen.getByText(/N=0/i)).toBeInTheDocument()
    expect(screen.getByText(/O=0/i)).toBeInTheDocument()
    expect(screen.getByText(/Z=0/i)).toBeInTheDocument()
  })
})