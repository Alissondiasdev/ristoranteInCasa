import Bgcontainer from "../bgcontainer";
import Editar from '../../assets/botao-editar.png'
import Excluir from '../../assets/excluir.png'
import Text from '../modal/index'
import './cadastroproduto.css'
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs, addDoc } from "firebase/firestore";
import { useState, useEffect } from "react";


const firebaseApp = initializeApp( {
  apiKey: "AIzaSyDz7CM4oQhdCMlEOWjHYcuF2auh-AHRH7M",
  authDomain: "testeenviardados.firebaseapp.com",
  databaseURL: "https://testeenviardados-default-rtdb.firebaseio.com",
  projectId: "testeenviardados",
  storageBucket: "testeenviardados.appspot.com",
  messagingSenderId: "166968148425",
  appId: "1:166968148425:web:ab2df075160fb59a5ee818"

});

function Cadastroproduto() {
  const [descricao, setDescricao]= useState('')
  const [valor, setValor]= useState('')
  const [users, setUsers]= useState([])

  const db = getFirestore(firebaseApp)
  const userCollectionRef = collection(db, 'produtos')

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef)
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getUsers()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newUser = {
      descricao: descricao,
      valor: valor,
    }
    try {
      const docRef = await addDoc(userCollectionRef, newUser)
      setUsers([...users, {...newUser, id: docRef.id}])
      setDescricao('')
      setValor('')
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }


    return (
      <Bgcontainer>
      
      <h2 className="form-title">Cadastro de Produto</h2>
      <div className="controletabela">
      <Text/>
        <input className="tabelainput" type='text' placeholder="Pesquisar produto"/>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>pizza</th>
            <th><img className="tabela-icone" src={Editar} alt='icone para editar'/><img className="tabela-icone" src={Excluir} alt='icone para excluir'/></th>
          </tr>
          <tr>
            <th>1</th>
            <th>pizza</th>
            <th></th>
          </tr>
        </tbody>
      </table>
      
      </Bgcontainer>
    );
  }
  
  export default Cadastroproduto;



  