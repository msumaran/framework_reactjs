import { LOGIN_GOOGLE , LOGIN_LOGOUT } from './types';

import axios from 'axios';


export const loginGoogle = (token) => async dispatch => {
     const respuesta = await axios.post('http://localhost:3000/login',{token: token})
     
     localStorage.setItem('login', JSON.stringify(respuesta.data));

     dispatch({

          type: LOGIN_GOOGLE,
          login: respuesta.data
     })
}


export const logout = () => async dispatch => {
     //const respuesta = await axios.post('http://localhost:3000/login',{token: token})
     
     localStorage.removeItem('login');

     dispatch({
          type: LOGIN_LOGOUT,
          loggedIn: false
     })
}

 