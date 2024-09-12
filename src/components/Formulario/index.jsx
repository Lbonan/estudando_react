import { useState } from "react";

const Formulario = () => {
  let [materiaA, setmateriaA] = useState(0);
  let [materiaB, setmateriaB] = useState(0);
  let [materiaC, setmateriaC] = useState(0);
  let [nome, setNome] = useState("");

  const alteraNome = (ev) => {
    setNome((estadoAnterior) => {
      return ev.target.value;
    });
  };

  const renderizaResultado = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = Math.floor(soma / 3);
    console.log(soma);
    console.log(media);

    if (media >= 7) {
      return <p>Olá {nome}, você foi aprovado</p>;
    } else {
      return <p>Olá {nome}, você não foi aprovado</p>;
    }
  };

  return (
    <form>
      <input type="text" placeholder="Seu nome" onChange={alteraNome} />
      <input type="number" max={10} placeholder="Nota matéria A" onChange={({ target }) => setmateriaA(parseInt(target.value))} />
      <input type="number" max={10} placeholder="Nota matéria B" onChange={(ev) => setmateriaB(parseInt(ev.target.value))} />
      <input type="number" max={10} placeholder="Nota matéria C" onChange={(ev) => setmateriaC(parseInt(ev.target.value))} />
      {renderizaResultado()}
    </form>
  );
};

export default Formulario;
