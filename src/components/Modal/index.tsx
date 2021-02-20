import { memo, ReactNode, useRef } from "react";
import { ModalContainer, ModalContent, ModalHeader, ModalBody, ModalFooter } from "./styles";

interface ModalProps {
  showModal?: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal = ({ showModal, onClose, title, children }: ModalProps) => {
  const number = useRef(0);

  function handleSetValue() {
    const newNumber = Math.round(Math.random() * (10 - 1) + 1);
    number.current = newNumber;  
  }

  function handlePrintValue() {
    alert(number.current)
  }

  return (
    <ModalContainer show={showModal} onClick={onClose}>
      <ModalContent show={showModal} onClick={event => event.stopPropagation()}>
        <ModalHeader>
          <h1>{title}</h1>  
        </ModalHeader>  

        <ModalBody>
          {children}
        </ModalBody>

        <ModalFooter>
          <button type='button' onClick={onClose}>
            close
          </button>

          <div>
            <button type='button' onClick={handleSetValue}>
              Set value
            </button>
            <button type='button' onClick={handlePrintValue}>
              print value
            </button>
          </div>
        </ModalFooter>
      </ModalContent>  
    </ModalContainer>
  )
}

export default memo(Modal);