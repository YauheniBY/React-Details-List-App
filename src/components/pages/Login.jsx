import React, { useContext } from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'
import '../../App.css';
import { AuthContext } from '../context';

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const tryLogin = (e) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }


    return (
        <div className='login-block'>
            <h1 >Страница входа</h1>
            <form onSubmit={tryLogin} className='login-block'>
                <MyInput type="text" placeholder="Ввевдите логин" />
                <MyInput type="password" placeholder="Ввевдите пароль" />
                <MyButton  style={{ marginTop: '30px' }}>Войти</MyButton>
            </form>
        </div>
    )
}

export default Login
