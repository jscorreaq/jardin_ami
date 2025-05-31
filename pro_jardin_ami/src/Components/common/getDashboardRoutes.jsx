

export function getDashboardRoutes(rol) {
    switch (rol) {
              case 'admin':
                  return '/dashboard/admin'; //redirecciona al dashboard de admin
                break;
              case 'seller':
                  return '/dashboard/seller'; //redirecciona al dashboard de seller
                break;
              case 'costumer':
                  return '/dashboard/costumer'; //redirecciona al dashboard de costumer
                break;
              default:
                return '/dashboard'; //redirecciona al dashboard por defecto
            }
}
