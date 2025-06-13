import React from 'react';
import { useForm } from 'react-hook-form';
import './RegisterPage.css';

export default function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    alert("Registro enviado con éxito");
  };

  return (
    <div className="register-container">
      <div className="form-card">
        <h2>Crear una cuenta</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
  );
}

