'use client';
import { useState } from "react";
import Botao from "@/componentes/botao";
export default function Sobre() {
  const [numero, setNumero] = useState(0);
  return (
    <div className="container">
      <h1>Sobre</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia facere officia tempore voluptate aspernatur repudiandae nulla. Inventore ipsam quod ratione maiores, eos assumenda dicta facere corporis enim qui! Quidem?</p>

      <br />

      <label>{numero}</label>

      <br />

      <button

        type="button"
        onClick={() => setNumero(numero + 1)}
      >contar</button>

      <br />

      <Botao label={"mais um"} acao={() => setNumero(numero + 1)} />
        <Botao label={"Alerta"} acao={() => alert('erro!')} />
   
    </div>
  );
}