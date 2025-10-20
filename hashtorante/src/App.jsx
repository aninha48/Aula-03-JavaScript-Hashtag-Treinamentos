// Para criar essa aba precisa-se da Extensão RS7 e daí você digita rfce (React Function Component Export)

import "./App.css";
import Categorias from './components/Categorias';
import Cards from './components/Cards';
import Banner from "./components/Banner";
import React, { useState } from 'react';


function App() {

//Agora vamos alterar o cardápio selecionado a partir de uma variável de estado 
// Em React usamos um Hook chamado useState()): 
  const [numCategoriaSelecionada, setNumCategoriaSelecionada] = useState(0);
  // O 1º (nCS) é a variável, o 2º (sNCS) é uma função que altera o valor da variável
  // Forma errada de mudar o valor da variável em React
  // numCategoriaSelecionada = 1
  // Forma correta
  // setNumCategoriaSelecionada(1)


  return (
    <div className="container">
      <Banner/> {/*Self Closing Tag*/}

      <Categorias
        numCategoriaSelecionada={numCategoriaSelecionada}
        setNumCategoriaSelecionada={setNumCategoriaSelecionada}
      /> 

      <Cards
       numCategoriaSelecionada={numCategoriaSelecionada}
        setNumCategoriaSelecionada={setNumCategoriaSelecionada}
      />

    </div>
    
  );
}

export default App;
