import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from "./Components/header"
import Home from "./Components/home"
import GrandCanyon from "./Components/GrandCanyon"
import Escocia from "./Components/Escocia"
import Muralha from "./Components/Muralha"
import Aruba from "./Components/Aruba"
import Footer from "./Components/Footer"
import './App.css';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={ <Home /> }  />
          <Route path='/GrandCanyon' element={ <GrandCanyon /> }  />
          <Route path='/Escocia' element={ <Escocia /> }  />
          <Route path='/Muralha' element={ <Muralha /> }  />
          <Route path='/Aruba' element={ <Aruba /> }  />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
