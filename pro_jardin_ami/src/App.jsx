import { Routes, Route } from 'react-router-dom'

import HomePage from './frontend/pages/HomePage'
import LoginPage from './frontend/pages/LoginPage'
import RegisterPage from './frontend/pages/RegisterPage'
import NotFound from './frontend/pages/NotFound'
import DashboardPage from './admin/pages/DashboardPage'
import AdminPage from './admin/pages/AdminPage'
import SellerPage from './admin/pages/SellerPage'
import CostumerPage from './admin/pages/CostumerPage'
import ReportsPage from './admin/pages/ReportsPage'
import PublicRoutes from './Components/auth/PublicRoutes'
import PrivateRoutes from './Components/auth/PrivateRoutes'
import RoleRoutes from './Components/auth/RoleRoutes'
import AuthContext from './contex/AuthContext'

function App() {
  return (
    <>
      <AuthContext>


        <Routes>
          {/* Rutas Publicas */}
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          {/* Rutas Privadas */}
          <Route element={<PrivateRoutes />}> {/*rutas para admin y seller  */}
            <Route element={<RoleRoutes allowedRoles={['admin', 'seller']} />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/dashboard/reports" element={<DashboardPage />} />
            </Route>

            {/*rutas para admin */}
            <Route element={<RoleRoutes allowedRoles={['admin']} />}>
              <Route path="/dashboard/admin" element={<DashboardPage />} />
            </Route>

            {/*rutas para seller */}
            <Route element={<RoleRoutes allowedRoles={['admin', 'seller']} />}>
              <Route path="/dashboard/seller" element={<SellerPage />} />
            </Route>

            {/*rutas para customer */}
            <Route element={<RoleRoutes allowedRoles={['admin', 'costumer']} />}>
              <Route path="/dashboard/costumer" element={<CostumerPage />} />
            </Route>

          </Route>

          {/* Ruta para error publica 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>

      </AuthContext>
    </>
  )
}

export default App
