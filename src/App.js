import Login  from './component/Login'
import Home from './component/Home';


import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';

export const config = {
  endpoint: `http://localhost:3000/data`,
};
function App() {
  return (
    <Router>
    <Routes>
    
<Route exact path='/' element={< Login/>}></Route>
<Route  path='/home' element={< Home />}></Route>

</Routes>
   </Router>
  );
}

export default App;
