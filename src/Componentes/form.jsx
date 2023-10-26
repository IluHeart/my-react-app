// ## Ejercicio 2: crear un componente de formulario

// 1. Cree un nuevo archivo llamado `Form.jsx`
// 2. Dentro de `Form.jsx`, defina un nuevo componente funcional llamado `Form`
// 3. Utilice el estado del componente para realizar un seguimiento de los valores de los campos del formulario (nombre, apellido y correo electrónico)
// 4. Agregue un botón para enviar el formulario.
// 5. Muestre los valores del formulario en el mismo componente, debajo del botón

import { useState } from "react";

function Form() {
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const [visible, setVisible] = useState(false);

  function handleOnClick() {
    setVisible(!visible);
  }

  function handleOnChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <input
        name="nombre"
        type="text"
        onChange={handleOnChange}
        value={user.nombre}
      />
      <input
        name="apellido"
        type="text"
        onChange={handleOnChange}
        value={user.apellido}
      />
      <input
        name="email"
        type="text"
        onChange={handleOnChange}
        value={user.email}
      />
      <button onClick={handleOnClick}>boton</button>
      {visible && (
        <div>
          {user.nombre} {user.apellido} {user.email}
        </div>
      )}
    </div>
  );
}

export default Form;
