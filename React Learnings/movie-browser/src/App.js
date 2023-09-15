import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutView from './Components/AboutView';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route path="/about" Component={AboutView} />
      </Routes>
    </div>
  );
}

export default App;
