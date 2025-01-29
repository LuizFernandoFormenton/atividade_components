import Menu from "./components/Menu";
import Produto from "./components/Produto";

export default function atividade_componets(){
  return(
    <div> 

        <Menu/>

       <h1> Atividade GitHub </h1>
       <p> Testando uma nova versiom </p>
       <p> Atividade em andamento </p>

       <hr/>

      <div className="flex justify-around" >

       <Produto nome="BigLu" preco=" 10.00" avaliacao="⭐⭐⭐⭐⭐" botao="Comprar"  />
       <Produto nome="Pedro" preco=" 2154.00" avaliacao="⭐⭐⭐⭐" botao="Encomendar"  />
       <Produto nome="Zak" preco=" 00.00" avaliacao="⭐" botao="Comprar"  />

      </div>

    </div>
  );
}