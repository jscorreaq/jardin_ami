// File: jardin_ami/pro_jardin_ami/src/App.jsx
import { Routes, Route } from 'react-router-dom'

import HomePage from './frontend/pages/HomePage'
import LoginPage from './frontend/pages/LoginPage'
import RegisterPage from './frontend/pages/RegisterPage'
import NotFound from './frontend/pages/NotFound'
// Importar los componentes de página específicos del dashboard
import DashboardPage from './admin/pages/DashboardPage' // Si DashboardPage es una página de inicio general del dashboard
import AdminPage from './admin/pages/AdminPage'
import SellerPage from './admin/pages/SellerPage'
import CostumerPage from './admin/pages/CostumerPage'
import ReportsPage from './admin/pages/ReportsPage'

// Importar el componente de layout del dashboard
import DasboardLayout from './admin/pages/DasboardLayout' // Asegúrate de que esta ruta sea correcta
import PublicRoutes from './Components/auth/PublicRoutes'
import PrivateRoutes from './Components/auth/PrivateRoutes'
import RoleRoutes from './Components/auth/RoleRoutes'
import AuthContext from './contex/AuthContext'
import List from './admin/components/List' // Si tienes una página de lista específica
import Form from './admin/components/Form' // Si tienes un formulario específico

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
          <Route element={<PrivateRoutes />}> {/*rutas para admin, seller, costumer  */}
          <Route element ={<RoleRoutes allowedRoles={['admin', 'seller', 'costumer']}/>}>
            <Route path="/dashboard" element={<DasboardLayout />}>
              <Route index element={<DashboardPage/>} />
              <Route path='admin' element={<AdminPage />} />
              <Route path='students' element={<List />} />
              <Route path='students/create' element={<Form />} />
              <Route path='admin' element={<AdminPage />} />
            </Route>
            
              <Route path='seller' element={<SellerPage />} />Add commentMore actions
              <Route path='costumer' element={<CostumerPage />} />
          

            </Route>
          </Route>
        
        {/* Ruta para error publica 404 */}Add commentMore actions
        <Route path="*" element={<NotFound />} />
    </Routes> 

     </AuthContext>
    </>
  )
}

export default App
