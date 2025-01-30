import { Suspense, lazy } from "react"
import { Switch, Route, useLocation } from "wouter"
const Decimals = lazy(() => import('./components/Decimals/Decimals'))
const Header = lazy(() => import("./components/Header/Header"))
const Binaries = lazy(() => import("./components/Binaries/Binaries"))
const Bcd = lazy(() => import("./components/Bcd/Bcd"))
const Aritmetic = lazy(() => import("./components/Aritmetic/Aritmetic"))
const Hexadecimals = lazy(() => import("./components/Hexadecimals/Hexadecimals"))
const LogicalGates = lazy(() => import("./components/LogicalGates/LogicalGates"))

function App() {

  const [location, setLocation] = useLocation()

  if (location === '/') setLocation('/binaries')
    
  return (
    <>
      <Suspense fallback={<h2>Cargando recursos...</h2>}>
        <Header />
        <Switch>
          <Route component={Binaries} path={'/binaries'} />
          <Route component={Decimals} path={'/decimals'} />
          <Route component={Bcd} path={'/bcd'} />
          <Route component={Aritmetic} path={'/aritmetic'} />
          <Route component={Hexadecimals} path={'/hexadecimals'} />
          <Route component={LogicalGates} path={'/logicalGates'} />
          <Route component={() => <h2>404</h2>} path={'/info'} />
        </Switch>
      </Suspense>
    </>
  )
}

export default App
