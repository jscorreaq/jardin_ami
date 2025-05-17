import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

export default function Register({onLogin}) {
     let { register, handleSubmit, watch, formState: { errors } } = useForm();
     let contra= watch("contrasena");
     let navigate = useNavigate();
     let onSubmited = async (data) =>{
        console.log(data);
        try {
            let respuesta = await axios.post("http://localhost/loginApi/register", {
                nombre: data.nombre,
                correo: data.correo,
                contrasena: data.contrasena
            });
            onLogin();
            navigate("/Dashboard");
            console.log("respuesta del servidor");
            console.log(respuesta);
        }catch (error) {
            console.log(error);
        }
    }
  return (
    <>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-sm-8">
                <h1 className='text-center text-primary my-5'>Formulario de registro</h1>
            </div>
            <div className="col-sm-8">
            <form onSubmit={handleSubmit(onSubmited)} className='bg-light-subtle p-3 rounded'>
                    <div className="mb-3">
                        <label  className="form-label">Nombre de usuario</label>
                        <input type="text"{...register("nombre", {required: true})} className="form-control"/>
                        {errors.nombre && <span className='text-danger'>Este campo es requerido</span>}
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input type="email"{...register("correo", {required: true})} className="form-control"  />
                        {errors.correo && <span className='text-danger'>Este campo es requerido</span>}
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input type="password" {...register("contrasena", {required: true})} className="form-control"/>
                        {errors.contrasena && <span className='text-danger'>Este campo es requerido</span>}
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">confirmar Password</label>
                        <input type="password" {...register("confirmar_contrasena", 
                        {required: "Por favor confirme su contraseña",
                            validate: (value) => {
                                if (value !== contra) {
                                    return "Las contraseñas no coinciden";
                                }
                            }
                        } )
                    } className="form-control" />
                        {errors.confirmar_contrasena && <span className='text-danger'>{errors.confirmar_contrasena.message}</span>}
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" >Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
            </div>
        </div>
    </div>
</>
  )
}
