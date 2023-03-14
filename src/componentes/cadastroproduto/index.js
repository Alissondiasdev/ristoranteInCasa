import Bgcontainer from "../bgcontainer";
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
      <form onSubmit={handleSubmit} className="cadastro-form">
      <h2 className="form-title">Cadastro de Produto</h2>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="nome">Descrição</label>
          <input
          value={descricao} onChange={(event) => setDescricao(event.target.value)}
            id="Descricao"
            type="text"
            className="form-control"
            
            required
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="email">Valor</label>
          <input
          value={valor} onChange={(event) => setValor(event.target.value)}
            id="valor"
            type="number"
            className="form-control"
            
            required
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="email">Imagem</label>
          <input
            id="imagem"
            type="file"
            className="form-control"
            
          
          />
        </div>
      </div>
      
      
      
      <>
    
  </>
  
  <div className="form-row">
        <div className="form-group col-md-6">
          <button type="submit" className="btn btn-primary">Cadastrar</button>
        </div>
      </div>
  
    </form>
      </Bgcontainer>
    );
  }
  
  export default Cadastroproduto;



  