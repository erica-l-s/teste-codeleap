import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Create from './components/Create'
import LoginForm from './components/LoginForm';
import Read from './components/Read'
import Update from './components/Update'
import Delete from './components/Delete'



function App() {

  return (
    <div className='App'>
      <Router>
      <Routes>
     
        <Route path={"/"} element={<LoginForm/>}/>
        <Route path={"/create"} element={<Create/>}/>
        <Route path={"/read"} element={<Read/>}/>
        <Route path={"/update/:id"} element={<Update/>}/>
        <Route path={"/delete/:id"} element={<Delete/>}/>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
