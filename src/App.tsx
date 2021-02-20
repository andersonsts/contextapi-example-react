import { DataProvider } from './context';

// import Content from './components/Content';  
import Global from './styles/Global';
import Tab from './components/Tab';

function App() {
  return (
    <DataProvider>
      <Global />
      {/* <Content /> */}
      <Tab />
    </DataProvider>
  );
}

export default App;
