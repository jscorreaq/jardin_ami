import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contex/AuthContext';
import { getDashboardRoutes } from '../../Components/common/getDashboardRoutes';

export default function DashboardPage() {
  let {user} = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (user){
      navigate(getDashboardRoutes(user.rol))
    }
  }, [user, navigate]);

  return null;
}
