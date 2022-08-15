import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About';
import Goods from './pages/Goods';
import GoodID from './pages/GoodID';
import Error from './pages/Error';
import Login from './pages/Login';
import { routes } from './router'
import { useContext } from 'react';
import { AuthContext } from './context';
import MyLoader from './UI/loader/MyLoader';

const AppRouter = () => {


  const {isAuth, setIsAuth, isLoading} = useContext(AuthContext)

  if(isLoading){
    return <MyLoader/>
  }
  return (
    
        isAuth
        ?
        <Routes>
          <Route exact path='/goods' element={ <Goods/>}/>
          <Route exact  path='/goods/:id' element={ <GoodID/>}/>
          <Route exact  path='/about' element={ <About/>}/>
          <Route exact path="/" element={<Navigate to="/goods" replace />} />
          <Route exact path="/login" element={<Navigate to="/goods" replace />} />
          <Route exact  path='*' element={ <Error/>}/>
        </Routes>
        :
        <Routes>
          <Route exact path='/login' element={ <Login/>}/>
          <Route exact path="*" element={<Navigate to="/login" replace />} />
        </Routes>
       
        

  )
}

export default AppRouter
