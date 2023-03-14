import '../bgcontainer/bgcontainer.css'
import logo from '../../assets/logo.jpg'



import Cadastrocliente from '../cadastrocliente';
import { Switch, Route, Link } from 'react-router-dom';



const Bgcontainer = (props) => {




    return (



        <div className="bgcontainer">

            <div className="header">
                <img className='header-logo' src={logo}></img>
            </div>
            <div className='container-menulateral-conteudo'>
                <section className="menu-lateral">
                    <nav className="menu-navegacao">
                        <ul className="menu-lista">

                            <li><Link to='/' className="menu-link">Inicio</Link></li>

                            <li><Link to='/' className="menu-link">Cadastro</Link></li>
                            <ul className='submenu'>
                                <li><Link to='/cadastro/cliente' className="menu-link">Cliente</Link></li>
                                <li><Link to='/cadastro/produto' className="menu-link">Produto</Link></li>
                            </ul>
                            <li><Link to='/' className="menu-link">Caixa</Link></li>
                            

                        </ul>
                    </nav>
                </section>
                <section id="containerdepedido" className="container-pedidos">
                    <h1>Em Desenvolvimento</h1>

                    {props.children}



                </section>
            </div>
        </div>


    )
}
export default Bgcontainer