import PortifolioContainer from "./PortifolioContainer/PortifolioContainer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css"

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PortifolioContainer />
    </div>
  );
}

export default App;
