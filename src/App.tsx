import { DataProvider } from './context';

// import Content from './components/Content';  
// import Tab from './components/Tab';
import Global from './styles/Global';
import Svg from './components/SvgExample';

function App() {
  return (
    <DataProvider>
      <Global />
      {/* <Content /> */}
      {/* <Tab /> */}
      <Svg />
    </DataProvider>
  );
}

export default App;
