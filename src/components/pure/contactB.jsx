import React, { useState } from 'react';

function ComponenteB({conectado}) { //HOOKS
  // Declaración de una variable de estado que llamaremos "state"
  const [state, setState] = useState(conectado); // la inicializamos con el valor del ejemplo

  return (
    <div>
        {/* // Mostramos el estado */}
        <h5>
            Estado: { state ? "Contacto En Línea":"Contacto No Disponible" }
        </h5>
        <button onClick={() => setState(!state)}>
            Cambiar estado
        </button>
    </div>
  );
}
export default ComponenteB;
