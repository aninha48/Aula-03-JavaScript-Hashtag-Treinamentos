import Card from './Card'
import {pratosPrincipais, sobremesas, bebidas} from "../assets/cardapio"


const Cards = () => {
    const itensCategoria = [pratosPrincipais, sobremesas, bebidas];
    const categoriaSelecionada = itensCategoria[0];
// a partir do DB que criamos em cardapio.js podemos criar uma função que percorra a array e assim criamos apenas um modelo que será repetido quantas vezes existirem objetos

{/*
        import imgBurguer from '../assets/pratos/burguer-picanha.jpeg'
        import imgFile from '../assets/pratos/enroladinho-mignon.jpeg'

            NÃO USAREMOS MAIS ESSE MODELO DENTRO DO RETURN
            <Card
                titulo="Burguer de Picanha"
                descricao="Burguer de Picanha Angus, Queijo Cheddar, Crisp de Cebola e Geléia de Bacon"
                preco="R$44,90"
                imagem={imgBurguer} 
            />
            MAS SIM O MODELO A SEGUIR*/
}
  return (
        
    <div className="cards">
        {categoriaSelecionada.map((item) => (
            <Card
                titulo={item.nome}
                descricao={item.descricao}
                preco={item.preco}
                imagem={item.imagem}
            />
        ))}
    </div>
  );
}

export default Cards
