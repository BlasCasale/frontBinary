import React from 'react'
import { Link } from 'wouter'
import { LuBinary } from 'react-icons/lu'
import { TbNumber123, TbHexagonLetterA } from 'react-icons/tb'
import { BiMath } from 'react-icons/bi'
import { FaInfo } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  return (
    <header>
      <Link href='/'><h1>Tu-bin</h1></Link>
      <nav>
        <Link href='/'><LuBinary className='iconsNav' /><span className='spanNav'>Binarios</span></Link>
        <Link href='/decimals'><TbNumber123 className='iconsNav' /><span className='spanNav'>Decimales</span></Link>
        <Link href='/bcd'><LuBinary className='iconsNav' /><span className='spanNav'>BCD</span></Link>
        <Link href='/hexadecimals'><TbHexagonLetterA className='iconsNav' /><span className='spanNav'>Hexadecimal</span></Link>
        <Link href='/aritmetic'><BiMath className='iconsNav' /><span className='spanNav'>Aritmética</span></Link>
        <Link href='/logicalGates'><LuBinary className='iconsNav' /><span className='spanNav'>Lógica</span></Link>
        <Link href='/info'>< FaInfo className='iconsNav' /><span className='spanNav'>Información</span></Link>
      </nav>
    </header>
  )
}

export default Header