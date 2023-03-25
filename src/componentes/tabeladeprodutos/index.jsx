import { Form, InputNumber, Popconfirm, Table, Typography, Input } from 'antd';
import { useState, useEffect } from 'react';
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
  const db = getFirestore(firebaseApp)
  const userCollectionRef = collection(db, 'produtos')
  


  const TabeladeProdutos = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const querySnapshot = await getDocs(userCollectionRef);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(data);
        
      };
  
      fetchData();
    }, []);
  
    const columns = [
      {
        title: 'descricao',
        dataIndex: 'descricao',
        key: 'descricao',
      },
      {
        title: 'Valor',
        dataIndex: 'valor',
        key: 'valor',
      },
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      },
    ];
  
    return <Table dataSource={data} columns={columns} />;
  };
  
  export default TabeladeProdutos;