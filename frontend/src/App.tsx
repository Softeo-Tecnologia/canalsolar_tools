import CursoOnlineHidrogenioVerdePage from './components/CursoOnlineHidrogenioVerdePage'
import SimuladorFioBPage from './components/SimuladorFioBPage'

type RouteEntry = {
  path: string
  element: JSX.Element
}

const routes: RouteEntry[] = [
  { path: '/', element: <SimuladorFioBPage /> },
  { path: '/curso-online-hidrogenio-verde', element: <CursoOnlineHidrogenioVerdePage /> },
]

function normalizePath(pathname: string) {
  return pathname.replace(/\/+$/, '') || '/'
}

function App() {
  const normalizedPath = normalizePath(window.location.pathname)
  const match = routes.find((route) => route.path === normalizedPath)
  return match?.element ?? <SimuladorFioBPage />
}

export default App





