import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";

function App() {
  const [fomulariovisivel, setformulariovisivel] = useState(true);
  return (
    <>
      <Perfil nome="Lucas" endereco="https://github.com/Lbonan.png" />
      {fomulariovisivel && <Formulario />}
      <button type="button" onClick={() => setformulariovisivel(!fomulariovisivel)}>
        Toggle form
      </button>
    </>
  );
}

export default App;
