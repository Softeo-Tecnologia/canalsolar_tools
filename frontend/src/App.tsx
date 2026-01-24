import CursoHomerSamPage from './LPs/CursoHomerSamPage'
import CursoOnlineHidrogenioVerdePage from './LPs/CursoOnlineHidrogenioVerdePage'
import LandingPage from './LPs/LandingPage'
import SimuladorFioBPage from './LPs/SimuladorFioBPage'


type RouteEntry = {
  path: string
  element: JSX.Element
}

const routes: RouteEntry[] = [
  { path: '/', element: <LandingPage /> },
  { path: '/calculadora', element: <SimuladorFioBPage /> },
  { path: '/curso-online-hidrogenio-verde', element: <CursoOnlineHidrogenioVerdePage /> },
  { path: '/curso-online-homer-sam', element: <CursoHomerSamPage /> },
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





