import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter} from 'react-router-dom';
//import Navegacion from "./components/Navegacion";

import Tareas from "./components/Tareas";
function App() {
  return (
<BrowserRouter>

<Tareas/>



</BrowserRouter>
  );
}

export default App;
