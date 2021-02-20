import React, { memo } from "react"

import { MdContentPaste, MdClose } from 'react-icons/md'; 
import { FaWindowMinimize } from 'react-icons/fa';

import { useData } from "../../context";

import { Container, TabItem, ReminderContainer } from "./styles"

const Tab = () => {
  const { items, handleOpenTab, handleMinimize, handleClose } = useData();

  return (
    <Container>
      {items.map(item => 
        <React.Fragment key={String(item.id)}>
          <TabItem show={!item.show} onClick={() => handleOpenTab(item.id)}>
            <div>
              <MdContentPaste />
              <span>Lem. #{item.id}</span>
            </div>

            <button type="button" onClick={event => handleClose(event, item.id)}>
              <MdClose />
            </button>
          </TabItem>

          <ReminderContainer show={item.show}>
            <div>
              <h1>Lembrete #{item.id}</h1>

              <button 
                type="button" 
                onClick={event => handleMinimize(event, item.id)}
              >
                <FaWindowMinimize size={22} />
              </button>
              <button 
                type="button" 
                onClick={event => handleClose(event, item.id)}
              >
                <MdClose size={24} />
              </button>
            </div>

            <p>{item.description}</p>
          </ReminderContainer>
        </React.Fragment>
      )}
    </Container>
  )
}

export default memo(Tab);