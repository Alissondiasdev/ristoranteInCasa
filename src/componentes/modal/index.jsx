import { Button, Modal } from 'antd';
import { useState } from 'react';
import './modal.css'
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button className='butao' type="primary" onClick={showModal}>
        Adicionar
      </Button>
      <Modal  title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <input type='text'/>
        <input type='text'/>
        <input type='text'/>
      </Modal>
    </>
  );
};
export default App;