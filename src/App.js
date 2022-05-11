import './App.css';
import Minter from './Minter'
import Login from "./Login";
import { useMoralis } from "react-moralis";

function App() {
  const { isAuthenticated } = useMoralis();
  return (
    <div className="App">
      {
        isAuthenticated ? (
            <Minter />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
