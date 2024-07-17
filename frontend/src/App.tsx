import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Career from "./pages/Career";
import Market from './pages/Market';
import Trade from './pages/Trade';
import Earn from './pages/Earn';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgivePassword from './pages/ForgivePassword';
import NewPassword from './pages/NewPassword';
import Blog from './pages/Blog';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" Component={Home}/>
        <Route path="/market" Component={Market}/>
        <Route path="/trade" Component={Trade} />
        <Route path="/earn" Component={Earn} />
        <Route path="/about" Component={About} />
        <Route path="/career" Component={Career} />
        <Route path="/login" Component={Login} />
        <Route path='/signup' Component={SignUp}/>
        <Route path='/forgive_password' Component={ForgivePassword}/>
        <Route path='/new_password' Component={NewPassword}/>
        <Route path='/blog' Component={Blog}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
