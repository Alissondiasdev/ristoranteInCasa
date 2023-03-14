import Bgcontainer from "../bgcontainer";
import  '../cadastrocliente/cadastrocliente.css'
import { useState, useEffect } from "react";

import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs, addDoc } from "firebase/firestore";



const firebaseApp = initializeApp( {
  apiKey: "AIzaSyDz7CM4oQhdCMlEOWjHYcuF2auh-AHRH7M",
  authDomain: "testeenviardados.firebaseapp.com",
  databaseURL: "https://testeenviardados-default-rtdb.firebaseio.com",
  projectId: "testeenviardados",
  storageBucket: "testeenviardados.appspot.com",
  messagingSenderId: "166968148425",
  appId: "1:166968148425:web:ab2df075160fb59a5ee818"

});


function Cadastrocliente() {

  const [nome, setNome]= useState('')
  const [email, setEmail]= useState('')
  const [telefone, setTelefone]= useState('')
  const [users, setUsers]= useState([])

  const db = getFirestore(firebaseApp)
  const userCollectionRef = collection(db, 'cadastroClientes')

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
      nome: nome,
      email: email,
      telefone: telefone,
    }
    try {
      const docRef = await addDoc(userCollectionRef, newUser)
      setUsers([...users, {...newUser, id: docRef.id}])
      setNome('')
      setEmail('')
      setTelefone('')
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }


  
  


    return (
      <Bgcontainer>
      <form onSubmit={handleSubmit} className="cadastro-form">
      <h2 className="form-title">Cadastro de Cliente</h2>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="nome">Nome:</label>
          <input
          value={nome} onChange={(event) => setNome(event.target.value)}
            id="nome"
            name="name"
            type="text"
            className="form-control"
            
            
            required
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="email">Email:</label>
          <input
          value={email} onChange={(event) => setEmail(event.target.value)}
            id="email"
            type="email"
            className="form-control"
            
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="telefone">Telefone:</label>
          <input
          value={telefone} onChange={(event) => setTelefone(event.target.value)}
            id="telefone"
            type="tel"
            className="form-control"
            
            required
          />
        </div>
      </div>
      <h3 className="form-subtitle">Endereço</h3>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="rua">Rua:</label>
          <input
            id="rua"
            type="text"
            className="form-control"
            
            
          />
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="numero">Número:</label>
          <input
            id="numero"
            type="text"
            className="form-control"
            
          
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="bairro">Bairro:</label>
          <input
            id="bairro"
            type="text"
            className="form-control"
            
            
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="cidade">Cidade:</label>
          <input
            id="cidade"
            type="text"
            className="form-control"
            
            
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <button type="submit" className="btn btn-primary">Cadastrar</button>
        </div>
      </div>
      
    </form>
  

      </Bgcontainer>
    );
  }
  
  export default Cadastrocliente;