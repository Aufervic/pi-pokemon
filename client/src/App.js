import './App.css';
import { Route, useLocation} from 'react-router-dom'
import { Landing, Home, Detail, Form, About } from './pages';
import {NavBar} from './components';

function App() {
  const location =  useLocation()

  return (
    <div className="App">
   
      {location.pathname !== '/' && <NavBar/>}
      <Route exact path='/' component={Landing} />
      <Route path='/home' render={()=> <Home/>}/>
      <Route path='/detail/:id' render={()=> <Detail/>}/>
      <Route path='/form' render={()=> <Form/>}/>
      <Route path='/about' render={()=> <About/>}/>
      
    </div>
  );
}

export default App;
