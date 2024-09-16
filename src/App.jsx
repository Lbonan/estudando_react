import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [fomulariovisivel, setformulariovisivel] = useState(true);
  const [nomeusuario, setnomeusuario] = useState("");
  return (
    <>
      <div className="input">
        <input type="text" placeholder="Digite um usuário do github" onBlur={(e) => setnomeusuario(e.target.value)} />
      </div>

      {nomeusuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeusuario} />
          <ReposList nomeUsuario={nomeusuario} />
        </>
      )}
      {/* {fomulariovisivel && <Formulario />}
      <button type="button" onClick={() => setformulariovisivel(!fomulariovisivel)}>
        Toggle form
      </button> */}
    </>
  );
}

export default App;
