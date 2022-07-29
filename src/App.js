import { useState } from 'react';
import './App.css';

function App() {

  let [numeroAtual, setAtual] = useState(0)
  let [numeroAntigo, setAntigo] = useState(0)
  let [operador, setOperador] = useState();
  
  const buttons = [
    {id: "0", content: 'C', color: "gray"},
    {id: "1", content: '+/-', color: "gray"},
    {id: "2", content: '%', color: "gray"},
    {id: "3", content: '/', color: "orange"},
    {id: "4", content: 7, color: "gray"},
    {id: "5", content: 8, color: "gray"},
    {id: "6", content: 9, color: "gray"},
    {id: "7", content: 'x', color: "orange"},
    {id: "8", content: 4, color: "gray"},
    {id: "9", content: 5, color: "gray"},
    {id: "10", content: 6, color: "gray"},
    {id: "11", content: '-', color: "orange"},
    {id: "12", content: 1, color: "gray"},
    {id: "13", content: 2, color: "gray"},
    {id: "14", content: 3, color: "gray"},
    {id: "15", content: '+', color: "orange"},
    {id: "16", content: 0, color: "gray", double: 'true'},
    {id: "17", content: '.', color: "gray"},
    {id: "18", content: '=', color: "gray"},
  ]

  function CliqueBotao(event){
    const input = event.target.value

    function Calcular(){
      console.log(numeroAtual, numeroAntigo, operador)
      if(operador === '/'){
        setAtual(numeroAntigo/numeroAtual)
      } else if(operador === 'x'){
        setAtual(numeroAntigo*numeroAtual)
      } else if(operador === '+'){
        setAtual(numeroAntigo+numeroAtual)
      } else if(operador === '-'){
        setAtual(numeroAntigo-numeroAtual)
      }
    }
    
    if(input === 'C'){
      setAtual(0)
    } else if(input === '/' || input === 'x' || input === '-' || input === '+'){
      setOperador(input)
      setAntigo(numeroAtual)
      setAtual(0)
    } else if(input === '+/-'){
      setAtual(numeroAtual * -1)
    } else if(input === '=') {
      Calcular()
    } else if (input === '%') {
      setAtual(numeroAtual / 100)
    } else if(numeroAtual === 0){
      setAtual(input)
    } else {
      setAtual(numeroAtual + input)
    }
  }

  return (
    <>
      <div className="container-flex">
        <h1>Calculadora em ReactJS</h1>
        <p>Desenvolvido por Luis Eduardo Hoshina</p>
        <div className="container-calculator">
          <div className="container-numero">
            <h2>{numeroAtual}</h2>
          </div>
          <div className="container-btns">
            <ul>
              {buttons.map((item, indice) => (
                <button key={indice} className={item.color} value={item.content} onClick={CliqueBotao} double={item.double}>{item.content}</button>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
