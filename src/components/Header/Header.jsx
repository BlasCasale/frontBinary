import React from 'react'
import { Link } from 'wouter'
import './Header.css'

const Header = () => {
  return (
    <header>
      <h1>Tu-bin</h1>
      <nav>
        <Link href='/binaries'>Binarios</Link>
        <Link href='/decimals'>Decimales</Link>
        <Link href='/bcd'>BCD</Link>
        <Link href='/hexadecimals'>Hexadecimal</Link>
        <Link href='/aritmetic'>Suma y resta</Link>
        <Link href='/logicalGates'>Compuertas</Link>
      </nav>
    </header>
  )
}

export default Header