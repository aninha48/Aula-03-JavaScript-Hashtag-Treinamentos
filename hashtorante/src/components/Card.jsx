{/*const Card = (props) =>
    Isso faz com que as classes fiquem assim:
    <h2 className="card__titulo">{props.titulo}</h2>

    mas podemos deixar de usar o 'props.exemplo' ao substituir os componentes do parenteses pelos próprios títulos que queremos usar.

    Esse processo é chamado de DESESTRUTURAÇÃO!

    Ficando assim:
*/}

{/*Mas não iremos utilizar essa estrutura
const Card = ({titulo, descricao, preco, imagem}) => {

  return (
    <div className="card">
          <div className="card__textos"> 
            {//Metodologia BEM para  nomenclatura de classes}
            <h2 className="card__titulo">{titulo}</h2>
            <p>
              {descricao}
            </p>
            <p className="card__preco">{preco}</p>
          </div>
          <div className="card__img">
            <img src={imagem} alt="Foto do Produto" />
          </div>
        </div>
  )
}

export default Card;
    
Essa estrutura será adaptada para oq faremos em .../src/assets/cardapio.js      
    

*/}
const Card = ({titulo, descricao, preco, imagem}) => {

  return (
    <div className="card">
          <div className="card__textos"> 
            {/*Metodologia BEM para  nomenclatura de classes*/}
            <h2 className="card__titulo">{titulo}</h2>
            <p>
              {descricao}
            </p>
            <p className="card__preco">{preco}</p>
          </div>
          <div className="card__img">
            <img src={imagem} alt="Foto do Produto" />
          </div>
        </div>
  )
}

export default Card;
