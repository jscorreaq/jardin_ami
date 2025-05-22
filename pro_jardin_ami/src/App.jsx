import { Routes, Route } from 'react-router-dom'

import HomePage from './frontend/pages/HomePage'
import LoginPage from './frontend/pages/LoginPage'
import RegisterPage from './frontend/pages/RegisterPage'
import NotFound from './frontend/pages/NotFound'
import DashboardPage from './admin/pages/DashboardPage'


function App() {
  return (
    <>  
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
    </Routes>    
    <Routes>
      <Route path="/Dashboard" element={<DashboardPage />} />  
    </Routes> 
    </>
  )
}

export default App
