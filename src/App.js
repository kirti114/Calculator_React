import './App.css';
import Nitssolutions from "./Nitssolutions";
import { useHistory } from "react-router-dom";
function App() {
  const history = useHistory();
  return (
    <Nitssolutions history={history}/>
  );
}

export default App;
