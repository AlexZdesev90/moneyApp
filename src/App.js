import './App.css';
import Inputs from './Inputs';
import { AppProvider } from './Context';
import AddList from './AddList';


function App() {
  return (
    <div className="App">
    <AppProvider>
        <Inputs />
        <AddList />
    </AppProvider>
    </div>
  );
}

export default App;
