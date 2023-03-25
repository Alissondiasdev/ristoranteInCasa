

import Text from '../modal/index'
import './cadastroproduto.css'

import TabeladeProdutos from '../tabeladeprodutos';
import PaginaInicial from '../paginainicial';



function Cadastroproduto() {


  return (
    <PaginaInicial>
    <div>


      <div className="controletabela">
        <Text />
        <input className="tabelainput" type='text' placeholder="Pesquisar produto" />
      </div>
      <TabeladeProdutos />


    </div>
    </PaginaInicial>
  );
}

export default Cadastroproduto;



