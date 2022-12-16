import { Route, Routes } from 'react-router-dom';
import Catalog from './components/Catalog/Catalog.jsx';
import Home from './components/Home/Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import Services from './components/Services/Services.jsx';


const App = () =>  {
  return (
    <div className="App">
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/home" element={<Navbar/>}/>
            <Route path="/catalog" element={<Catalog/>} />
            <Route path="/services" element={<Services/>} />

        </Routes>
    </div>
  );
}

export default App;
