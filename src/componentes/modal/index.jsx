import { Button, Modal, Input, } from 'antd';

import './modal.css'
import { initializeApp } from "firebase/app";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useState } from "react";


const firebaseApp = initializeApp({
  apiKey: "AIzaSyDz7CM4oQhdCMlEOWjHYcuF2auh-AHRH7M",
  authDomain: "testeenviardados.firebaseapp.com",
  databaseURL: "https://testeenviardados-default-rtdb.firebaseio.com",
  projectId: "testeenviardados",
  storageBucket: "testeenviardados.appspot.com",
  messagingSenderId: "166968148425",
  appId: "1:166968148425:web:ab2df075160fb59a5ee818"

});
const db = getFirestore(firebaseApp);
const userCollectionRef = collection(db, 'produtos');

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [descricao, setDescricao] = useState('');
  const [id, setId] = useState('');
  const [valor, setValor] = useState('');

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
    await addProduto();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value);
  };
  const handleValorChange = (event) => {
    setValor(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };
  const handleRandomId = () => {
    const randomId = Math.floor(Math.random() * 1000);
    setId(randomId);
  };

  const addProduto = async () => {
    try {
      await addDoc(userCollectionRef, {
        descricao,
        id,
        valor
      });
      console.log('Produto adicionado com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar produto: ', error);
    }
  };

  return (
    <>
      <Button className='butao' type="primary" onClick={showModal}>
        Adicionar
      </Button>
      <Modal title="Adicionar Produto"
        visible={isModalOpen}
        width={700}
        onOk={handleOk}
        onCancel={handleCancel}>
        <div className="modal-content">
          <div className="modal-row">
            <label htmlFor="descricao">Descrição</label>
            <Input id="descricao" value={descricao} onChange={handleDescricaoChange} />
          </div>
          <div className="modal-row">
            <label htmlFor="id">ID</label>
            <Input id="id" value={id} onChange={handleIdChange} />
          </div>
          <div className="modal-row">
            <label htmlFor="valor">Valor</label>
            <Input id="valor" value={valor} onChange={handleValorChange} />
            
            <Button className='butao' type="primary" onClick={handleRandomId}>
              Gerar ID Aleatório
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default App;