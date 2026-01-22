import CursoOnlineHidrogenioVerdePage from './components/CursoOnlineHidrogenioVerdePage'
import SimuladorFioBPage from './components/SimuladorFioBPage'
import LandingPage from './components/LandingPage'

type RouteEntry = {
  path: string
  element: JSX.Element
}

const routes: RouteEntry[] = [
  { path: '/', element: <LandingPage /> },
  { path: '/calculadora', element: <SimuladorFioBPage /> },
  { path: '/curso-online-hidrogenio-verde', element: <CursoOnlineHidrogenioVerdePage /> },
]

function normalizePath(pathname: string) {
  return pathname.replace(/\/+$/, '') || '/'
}

function App() {
  const normalizedPath = normalizePath(window.location.pathname)
  const match = routes.find((route) => route.path === normalizedPath)
  return match?.element ?? <LandingPage />
}

export default App





