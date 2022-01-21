import './App.css';
import Inputs from './Inputs';
import AddList from './AddList';
import { useContext } from 'react';
import Edit from './Edit';
import { Context } from './Context';
import Options from './Options';
import Total from './Total';

  const App = () => {

  const { editMode } = useContext(Context);

  return (
    <div className="App">
    {editMode ? <Edit /> : <span> <Options/> <Inputs /> <Total /> <AddList /> </span>}
    </div>
  );
}

export default App;
