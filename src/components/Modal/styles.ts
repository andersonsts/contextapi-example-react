import styled, { css } from 'styled-components';

interface ModalProps {
  show?: boolean;
}

export const ModalContainer = styled.div<ModalProps>`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;

  ${props => props.show && css`
    opacity: 1;
    pointer-events: visible;
  `}
`;

export const ModalContent = styled.div<ModalProps>`
  max-width: 500px;
  width: 100%;
  background-color: #f1f1f1;
  transform: ${props => props.show ? 'translateY(-200px)' : 'translateY(0)' };
  transition: all 0.3s ease-in-out;
`;

export const ModalHeader = styled.div`
  padding: 10px;

  > h1 {
    margin: 0;
  }
`;

export const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

export const ModalFooter = styled.div`
  padding: 10px;
`;
