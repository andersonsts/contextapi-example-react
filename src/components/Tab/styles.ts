import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 64px;
  box-shadow: 2px 2px 30px #e2e2e2;
  display: flex;
  align-items: center;
`;

interface TabItemProps {
  show: boolean;
} 

export const TabItem = styled.div<TabItemProps>`
  width: 100px;
  height: 32px;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${props => !props.show && css`
    display: none;
  `}

  & + div {
    margin-left: 5px;
  }

  > div:first-child {
    display: flex;
    align-items: center;

    > span {
      font-size: 12px;
      margin-left: 4px;
    }
  }

  button {
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
  }
`;

export const ReminderContainer = styled.div<TabItemProps>`
  width: 240px;
  height: 400px;
  background: #7159c1;
  color: #fff;
  padding: 8px;
  border-radius: 10px;
  position: absolute;
  top: 30px; 
  opacity: 0;
  transition: all 0.1s ease-in-out;
  transform: translateY(200px);
  pointer-events: none;

  ${props => props.show && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);
  `}

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      color: #fff;
    }
  }
`;