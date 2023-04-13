import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import PageCrud from './Components/PageCrud'
import LoginForm from './Components/LoginForm';



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
