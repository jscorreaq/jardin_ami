import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import { useForm } from 'react-hook-form';
import './RegisterPage.css';
import axios from 'axios'; // para hacer peticiones http
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate(); // hook para redireccionar a otra ruta
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async(data) => {
    console.log(data);
    alert("Registro enviado con éxito");
  

  try {
    const respuesta = await axios.post("http://localhost:8080/api/register", {"email":data.email, "password": data.password});
     alert( `${respuesta.data.message}`);
     navigate("/login"); 

    } catch (error) { 
      alert("Error al registrar el usuario");
      console.log( error.response?.data?.message || error);
    }

  };

  return (
    <>
    <Header />
    <div className="register-container">
      <div className="form-card">
        <h2>Crear una cuenta</h2>
        <form className='user' onSubmit={handleSubmit(onSubmit)}>
          <label>
            Nombre completo
            <input {...register("name", { required: "Este campo es obligatorio" })} />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </label>

          <label>
            Correo electrónico
            <input type="email" {...register("email", { required: "Este campo es obligatorio" })} />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </label>

          <label>
            Contraseña
            <input type="password" {...register("password", { required: "Este campo es obligatorio", minLength: { value: 6, message: "Mínimo 6 caracteres" } })} />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </label>

          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
}

