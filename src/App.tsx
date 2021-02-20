import { DataProvider } from './context';

import Content from './components/Content';

function App() {
  return (
    <DataProvider>
      <Content />
    </DataProvider>
  );
}

export default App;
