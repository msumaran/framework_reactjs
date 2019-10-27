import {
    LOGIN_GOOGLE,
    LOGIN_LOGOUT
} from '../actions/types'
// cada reducers tiene su propio state
let login = JSON.parse(localStorage.getItem('login'));

const initialState = login ? {
    loggedIn: true,
    login
} : {};

// los reducers son los unicos que pueden modificar el store
export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN_GOOGLE:
            return {
                loggedIn: true,
                login: action.login
            }
         case LOGIN_LOGOUT:
            return {
                loggedIn: false,
                login: {}
            }

            
        default:
            return state;
    }
}