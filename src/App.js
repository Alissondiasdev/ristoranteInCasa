
import Bgcontainer from './componentes/bgcontainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastrocliente from './componentes/cadastrocliente';
import Cadastroproduto from './componentes/cadastroproduto';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
            <Route path='/' element={<Bgcontainer/>}/>
            <Route path='/cadastro/cliente' element={<Cadastrocliente/>}/>
            <Route path='/cadastro/produto' element={<Cadastroproduto/>}/>
            

        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
