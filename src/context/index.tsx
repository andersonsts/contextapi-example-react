import { createContext, useCallback, useContext, useMemo, useState } from 'react';

export interface ItemInterface {
  id: number;
  name: string;
  price: string;
}

interface DataContextState {
  items: ItemInterface[];
}

const DataContext = createContext<DataContextState>({} as DataContextState)

const DataProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'testing1',
      price: '12.50'
    },
    {
      id: 2,
      name: 'testing2',
      price: '1.50'
    },
    {
      id: 3,
      name: 'testing3',
      price: '4.50'
    },
  ])

  return (
    <DataContext.Provider value={{ items }}>
      {children}
    </DataContext.Provider>
  )
}

function useData(): DataContextState {
  const context = useContext(DataContext)
  return context;
}

export { DataProvider, useData }