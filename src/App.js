


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastroproduto from './componentes/cadastroproduto';
import Cardes from './componentes/card';
import PaginaInicial from './componentes/paginainicial';





function App() {
  return (
    <div className="App">
       <BrowserRouter>
       
        <Routes>
         <Route path='/' element={<PaginaInicial/>}/>
         <Route path='/cadastroproduto' element={<Cadastroproduto/>}/>
         <Route path='/card' element={<Cardes/>}/>
         
         
        
           
            
            

        </Routes>
        </BrowserRouter>
        
        
      
    </div>
  );
}

export default App;
