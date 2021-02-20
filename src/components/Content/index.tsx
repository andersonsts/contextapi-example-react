
import { useState } from 'react';

import List from '../List';
import Modal from '../Modal';

export default function Content() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShow(true)}>Show modal</button>

      <Modal 
        title="My Modal"
        showModal={show} 
        onClose={() => setShow(false)} 
      >
        <strong>This is my modal body</strong>
      </Modal>

      <List />
    </>
  )
}