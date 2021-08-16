import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home  from './pages/Home.jsx';
import  Login  from './pages/Login.jsx';
import { Dashboard } from './pages/Dashboard';
import Menu from './components/Menu';
 
function App() {
  return (
    <BrowserRouter>
        <Menu/>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard}/>
    </BrowserRouter>
  );
}

export default App;
