import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function Login({ onLogin }) {
    let { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();
    let onSubmited = async (data) => {
        console.log(data);
        try {
            let respuesta = await axios.post("http://localhost/loginApi/login", data);
            alert("bienvenido" + respuesta.data.nombre);
            onLogin(respuesta.data.nombre);
            navigate("/Dashboard");
            console.log("respuesta del servidor");
            console.log(respuesta);
        } catch (error) {
            console.log(error);
            alert("el usuario o la contraseña no existe");
        }
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-8">
                        <h1 className='text-center text-primary my-5'>Formulario de ingreso</h1>
                    </div>
                    <div className="col-sm-8">
                        <form onSubmit={handleSubmit(onSubmited)} className='bg-light-subtle p-3 rounded'>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email"{...register("correo", { required: true })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                {errors.correo && <span className='text-danger'>Este campo es requerido</span>}
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" {...register("contrasena", { required: true })} className="form-control" id="exampleInputPassword1" />
                                {errors.contrasena && <span className='text-danger'>Este campo es requerido</span>}
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
