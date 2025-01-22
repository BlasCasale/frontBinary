import Body from "./components/Body/Body"
import { Suspense, lazy } from "react"
import { Switch, Route } from "wouter"
const Decimals = lazy(() => import('./components/Decimals/Decimals'))
const Header = lazy(() => import("./components/Header/Header"))
const Binaries = lazy(() => import("./components/Binaries/Binaries"))
const Bcd = lazy(() => import("./components/Bcd/Bcd"))
const Aritmetic = lazy(() => import("./components/Aritmetic/Aritmetic"))
const Hexadecimals = lazy(() => import("./components/Hexadecimals/Hexadecimals"))
const LogicalGates = lazy(() => import("./components/LogicalGates/LogicalGates"))

function App() {
  return (
    <>
      <Suspense fallback={<h2>Cargando recursos...</h2>}>
        <Header />
        <Switch>
          <Route component={Decimals} path={'/decimals'} />
          <Route component={Binaries} path={'/binaries'} />
          <Route component={Bcd} path={'/bcd'} />
          <Route component={Aritmetic} path={'/aritmetic'} />
          <Route component={Hexadecimals} path={'/hexadecimals'} />
          <Route component={LogicalGates} path={'/logicalGates'} />
        </Switch>
      </Suspense>
      {/* <Body /> */}
    </>
  )
}

export default App
