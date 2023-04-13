import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import PageCrud from './components/PageCrud'
import LoginForm from './components/LoginForm';



function App() {

  return (
    <div className='App'>
      <Router>
      <Routes>
        <Route path={"/"} element={<LoginForm/>}/>
        <Route path={"/crud"} element={<PageCrud/>}/>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
