import CursoHomerSamPage from './LPs/CursoHomerSamPage'
import CursoOnlineHidrogenioVerdePage from './LPs/CursoOnlineHidrogenioVerdePage'
import SimuladorFioBPage from './LPs/SimuladorFioBPage'


type RouteEntry = {
  path: string
  element: JSX.Element
}

const routes: RouteEntry[] = [
  { path: '/calculadora', element: <SimuladorFioBPage /> },
  { path: '/curso-online-hidrogenio-verde', element: <CursoOnlineHidrogenioVerdePage /> },
  { path: '/curso-homer-sam', element: <CursoHomerSamPage /> },
]

function normalizePath(pathname: string) {
  return pathname.replace(/\/+$/, '') || '/'
}

function App() {
  const normalizedPath = normalizePath(window.location.pathname)
  const match = routes.find((route) => route.path === normalizedPath)
}

export default App





