import { memo, ReactNode } from "react";
import { ModalContainer, ModalContent, ModalHeader, ModalBody, ModalFooter } from "./styles";

interface ModalProps {
  showModal?: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal = ({ showModal, onClose, title, children }: ModalProps) => {
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
        </ModalFooter>
      </ModalContent>  
    </ModalContainer>
  )
}

export default memo(Modal);