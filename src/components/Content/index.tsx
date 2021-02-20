
import { useMemo, useState } from 'react';

import List from '../List';
import Modal from '../Modal';
import Ref from '../Ref';

export default function Content() {
  const [show, setShow] = useState(false);

  const data = useMemo(() => show ? 123123 : 0, [show])

  return (
    <>
      <button type="button" onClick={() => setShow(true)}>Show modal</button>

      {data}

      <Modal 
        title="My Modal"
        showModal={show} 
        onClose={() => setShow(false)} 
      >
        <strong>This is my modal body</strong>
      </Modal>

      <Ref />

      <List />
    </>
  )
}