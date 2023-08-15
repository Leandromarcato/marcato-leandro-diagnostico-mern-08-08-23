import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Navegacion from "./components/Navegacion";
import Mostrar from "./components/Mostrar";
import Tareas from "./components/Tareas";
function App() {
  return (
<BrowserRouter>
<Tareas/>


<Routes>
<Route path="/" Component={Mostrar}/>
</Routes>

</BrowserRouter>
  );
}

export default App;
