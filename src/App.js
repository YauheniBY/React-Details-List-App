import './App.css';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import AppRouter from './components/AppRouter';
import { useEffect, useState } from 'react';
import { AuthContext } from './components/context';


function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

 
  return (
    <AuthContext.Provider value={ {isAuth, setIsAuth, isLoading}}>
       <BrowserRouter>
          <Navigation/>      
          <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
   

             
  );
}

export default App;
