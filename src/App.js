import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Create from './components/Create'
import LoginForm from './components/LoginForm';
import Read from './components/Read'





function App() {

  return (
    <div className='App'>
      <Router>
      <Routes>
        <Route path={"/"} element={<LoginForm/>}/>
        <Route path={"/create"} element={<Create/>}/>
        <Route path={"/read"} element={<Read/>}/>
              
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
