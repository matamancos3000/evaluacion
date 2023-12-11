import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from './containers/errors/error404';
import Home from './containers/pages/home';
import Home from './containers/pages/login';
import Home from './containers/pages/info';


function App() {
  return (
    <Router>
      <Routes> 
      <Route path="*" element={<Error404/>}/>
      {/* vistas de paginas */}
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<login/>}/>
      <Route path="/login" element={<info/>}/>
      </Routes>
    </Router>
  );
}

export default App;
