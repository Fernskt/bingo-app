import React from "react";
import {useState} from "react"

export default function Login() {

  const user = "admin"
  const password = "123456admin"

  const [usuario, setUsuario] = useState("");
  const [contra, setContra] = useState("");
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
 

  const manejarUsuario = (e) =>{
    setUsuario(e.target.value);
  }
  const manejarContra = (e) =>{
    setContra(e.target.value);
  }
  const manejarNombre = (e) =>{
    setNombre(e.target.value);
  }

  const handleClick = () => {
    if (usuario === user && password === contra) {
      setMensaje(<div class="alert alert-success" role="alert">
      Bienvenido, {nombre}!!

    </div>);
    } else {
      setMensaje(<div class="alert alert-danger" role="alert">
      Datos Incorrectos
    </div>);
    }
  }

  return (
    <div className="login">
      <h3>Iniciá sesión</h3>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            @
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Usuario"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={usuario}
          onChange={manejarUsuario}
        />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            🔑
          </span>
        </div>
        <input
          type="password"
          class="form-control"
          placeholder="Contraseña"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={contra}
          onChange={manejarContra}
        />
      </div>
      <h3>¿Cómo te llamas?</h3>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            Nombre
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={nombre}
          onChange={manejarNombre}
        />
      </div>
      <button 
      type="button" 
      class="btn btn-light" 
      onClick={handleClick}
      disabled={(nombre===""||contra==="")}>
        Iniciar Sesión
        </button>

     {mensaje}
      
    </div>
  );
}
