import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home  from './pages/Home.jsx';
import  Login  from './pages/Login.jsx';
import Chat from './pages/Chat.jsx';
import { Dashboard } from './pages/Dashboard';
import Menu from './components/Menu';
 
function App() {
  console.log("RENDER APP")
  return (
    <BrowserRouter>
        <Menu/>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/chat' component={Chat}/>
    </BrowserRouter>
  );
}

export default App;
