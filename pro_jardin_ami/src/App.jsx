import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import DasboardLayout from './admin/pages/DasboardLayout'
import List from './admin/components/List'
import Form from './admin/components/Form'

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


              <Route path='seller' element={<SellerPage />} />
              <Route path='costumer' element={<CostumerPage />} />

            </Route>
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
