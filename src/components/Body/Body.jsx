import { Suspense, lazy } from "react"

const Aritmetic = lazy(() => import("../Aritmetic/Aritmetic"))
const Bcd = lazy(() => import("../Bcd/Bcd"))
const Binaries = lazy(() => import("../Binaries/Binaries"))
const Decimals = lazy(() => import("../Decimals/Decimals"))
const Hexadecimals = lazy(() => import("../Hexadecimals/Hexadecimals"))
const LogicalGates = lazy(() => import("../LogicalGates/LogicalGates"))
import './Body.css'

const Body = () => {
  return (
    <main>
      <Suspense fallback={<h2>Cargando...</h2>}>
        <Binaries />
        <Decimals />
        <Hexadecimals />
        <Bcd />
        <LogicalGates />
        <Aritmetic />
      </Suspense>
    </main>
  )
}

export default Body