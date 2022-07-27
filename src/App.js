import "./App.css";
import Inputs from "./Inputs";
import AddList from "./AddList";
import Edit from "./Edit";
import { useAppContext } from "./Context";
import Options from "./Options";
import Total from "./Total";

const App = () => {
  const { editMode } = useAppContext();

  return (
    <div className="App">
      <h2>Cost accounting</h2>
      {editMode ? (
        <Edit />
      ) : (
        <span>
          {" "}
          <Options /> <Inputs /> <Total /> <AddList />{" "}
        </span>
      )}
    </div>
  );
};

export default App;
