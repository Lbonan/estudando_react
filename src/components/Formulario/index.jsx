import { useEffect } from "react";
import { useState } from "react";

const Formulario = () => {
  const [materiaA, setmateriaA] = useState(0);
  const [materiaB, setmateriaB] = useState(0);
  const [materiaC, setmateriaC] = useState(0);
  const [nome, setNome] = useState("");

  useEffect(() => {
    console.log("o componente iniciou");

    return () => {
      console.log("O compente finalizou");
    };
  }, []);

  useEffect(() => {
    console.log("As notas das matérias mudaram: " + "A: " + materiaA + "B: " + materiaB + "C: " + materiaC);
  }, [materiaA, materiaB, materiaC]);

  useEffect(() => {
    console.log("O estado nome mudou");
  }, [nome]);

  const alteraNome = (ev) => {
    setNome((estadoAnterior) => {
      return ev.target.value;
    });
  };

  const renderizaResultado = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = Math.floor(soma / 3);

    if (media >= 7) {
      return <p>Olá {nome}, você foi aprovado</p>;
    } else {
      return <p>Olá {nome}, você não foi aprovado</p>;
    }
  };

  return (
    <form>
      <ul>
        {[1, 2, 3, 4, 5].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <input type="text" placeholder="Seu nome" onChange={alteraNome} />
      <input type="number" max={10} placeholder="Nota matéria A" onChange={({ target }) => setmateriaA(parseInt(target.value))} />
      <input type="number" max={10} placeholder="Nota matéria B" onChange={(ev) => setmateriaB(parseInt(ev.target.value))} />
      <input type="number" max={10} placeholder="Nota matéria C" onChange={(ev) => setmateriaC(parseInt(ev.target.value))} />
      {renderizaResultado()}
    </form>
  );
};

export default Formulario;
