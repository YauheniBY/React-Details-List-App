import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContext } from './context';
import MyButton from './UI/button/MyButton';

const Navigation = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logoff = (e) => {
        e.preventDefault()
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className='nav-bar'>
            <div>
                <NavLink className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'} to='/goods'>Goods</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'} to='/about'>About</NavLink>
            </div>
            <MyButton onClick={logoff}>Выйти</MyButton>
        </div>
    )
}

export default Navigation
