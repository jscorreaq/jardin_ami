import {Link, useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import { useForm } from 'react-hook-form'; //manejo de formularios
//import datos from './../../assets/data.json'; // datos de prueba
import { useAuth } from '../../contex/AuthContext'; //contexto de autenticacion}
import { generatePath } from 'react-router-dom';
import { getDashboardRoutes } from '../../Components/common/getDashboardRoutes';
import axios from 'axios'; //para hacer peticiones http

export default function LoginPage() {
  let {login}= useAuth(); //hook para acceder al contexto de autenticacion
  let navigate = useNavigate(); //hook para redireccionar a otra ruta

  //console.log(datos.users);
  let {register, handleSubmit} = useForm(); 
  const onSubmit = async (dataForm) => {
    console.log("form use",dataForm);
      try {
        const respuesta= await axios.post("http://localhost:8080/api/login", dataForm);
        console.log(respuesta)
  
          //guardar el usuario en localStorage y redirigir a una ruta especifica
          // dependiendo del rol del usuario
          if(respuesta.data.user) {
                  login(respuesta.data); //llama a la funcion login del contexto de autenticacion
                  // *** Añade este console.log para verificar el rol ***
                  console.log("User role received:", respuesta.data.user.rol);
    
                  navigate(getDashboardRoutes(respuesta.data.user.rol)); //llama a la funcion getDashboardRoutes para obtener la ruta del dashboard
                } else {
alert("El usuario no tiene un rol asignado");
              }
        } catch (error) {
          alert("Credenciales Incorrectas");
          console.log(error.response?.data?.message);
      }
    };
    return (
    <>
    <Header />
      <div className='bg-fondo-oscuro py-4'>
        <div className='container bg-fondo.claro'>

          <div className='row justify-content-center'>

            <div className='col-xl-10 col-lg-12 col-md-9'>

              <div className='card o-hidden border-0 shadow-lg my-5'>
                <div className='card-body p-0'>
                  <div className='row'>
                    <div className='col-lg-6 d-none d-lg-block bg-login-image'></div>
                    <div className='col-lg-6'>
                      <div className='p-5'>
                        <div className='text-center'>
                            <h1 className='h4 text-gray-900 mb-4'>Bienvenido de nuevo!</h1>
                          </div>
                          <form onSubmit={handleSubmit(onSubmit
  
    )
  }className='user'>
                            <div className='form-group'>
                              <input {...register('email', {required: true})}
                                type='email' className='form-control form-control-user' 
                              id='exampleInputEmail' aria-describedby='emailHelp'
                              placeholder='Correo electronico' />
                          </div>
                          <div className='form-group'>
                            <input {...register('password', {required: true})}
                              type='password' className='form-control form-control-user'
                              id='exampleInputPassword' placeholder='Contraseña' />
                          </div>
                          <div className='form-group'>
                            <div className='custom-control custom-checkbox small'>
                              <input type='checkbox' className='custom-control-input' id='customCheck' />
                              <label className='custom-control-label' htmlFor='customCheck'>Recordarme</label>
                            </div>

                          </div>
                          <div>
                            <button type='submit' className='btn btn-primary btn-user btn-block'>
                              Login
                            </button>
                          </div>
                          <hr />
                          <a href='#' className='btn btn-primary btn-user btn-block'>
                            <i className='fab fa-google fa-fw'></i> Login con Google
                          </a>
                          
                          <a href="#" className='btn btn-primary btn-user btn-block'>
                            <i className='fab fa-facebook-f fa-fw'> </i>Login con Facebook
                          </a>
                          </form>
                        <hr />
                        <div className='text-center'>
                          <a className='small' href='forgot-password.html'>Olvidaste tu contraseña?</a>
                        </div>
                        <div className='text-center'>
                          <Link className='small' to="/register">Crear una cuenta!</Link>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>


          </div>

        </div>
      </div>
      </div>
      <Footer/>
    </>

  )
}

