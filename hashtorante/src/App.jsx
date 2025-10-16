// Para criar essa aba precisa-se da Extensão RS7 e daí você digita rfce (React Function Component Export)

import "./App.css";
import Categorias from './components/Categorias';
import Cards from './components/Cards';
import Banner from "./components/Banner";

function App() {
  return (
    <div className="container">
      <Banner/>

      <Categorias/> {/*Self Closing Tag*/}

      <Cards/>

    </div>
    
  );
}

export default App;
