import { createContext, useCallback, useContext, useMemo, useState } from 'react';

export interface ItemInterface {
  id: number;
  name: string;
  price: string;
  show: boolean;
  description: string;
}

interface DataContextState {
  items: ItemInterface[];
  handleOpenTab: (itemId: number) => void;
  handleMinimize: (event: any, itemId: number) => void;
  handleClose: (event: any, itemId: number) => void;
}

const DataContext = createContext<DataContextState>({} as DataContextState)

const DataProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'testing1',
      price: '12.50',
      description: 'description da testing1',
      show: false
    },
    {
      id: 2,
      name: 'testing2',
      price: '2.50',
      description: 'description da testing2',
      show: false
    },
    {
      id: 3,
      name: 'testing3',
      price: '34.9',
      description: 'description da testing3',
      show: false
    },
  ])

  const handleOpenTab = useCallback((itemId: number) => {
    setItems(prevState => prevState.map(item => item.id === itemId ? { ...item, show: true } : item))
  }, [])

  const handleMinimize = useCallback((event: any, itemId: number) => {
    event.stopPropagation();
    setItems(prevState => prevState.map(item => item.id === itemId ? { ...item, show: false } : item))
  }, [])

  const handleClose = useCallback((event: any, itemId: number) => {
    event.stopPropagation();
    setItems(prevState => prevState.filter(item => item.id !== itemId))
  }, [])

  return (
    <DataContext.Provider value={{ items, handleOpenTab, handleMinimize, handleClose }}>
      {children}
    </DataContext.Provider>
  )
}

function useData(): DataContextState {
  const context = useContext(DataContext)
  return context;
}

export { DataProvider, useData }