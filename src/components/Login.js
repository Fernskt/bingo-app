import React from "react";

export default function Login() {
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
        />
      </div>
      <button type="button" class="btn btn-light">Iniciar Sesión</button>
    </div>
  );
}
