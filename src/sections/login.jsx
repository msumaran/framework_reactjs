import React from 'react';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import GoogleLogin from 'react-google-login';
import {
    connect
} from 'react-redux';
import {
    loginGoogle
} from '../actions/loginActions';
class Login extends React.Component {
        componentDidMount() {
            //this.props.googleUrl();
        }
        render() {
            const responseGoogle = (response) => {
                this.props.loginGoogle(response.accessToken);
                //this.setState({ isAuthenticated: true, user: 1, token: 'dad'});
            }
          
         
            return ( <div class = "login" > <div class = "formLogin" > <div class = "logo" > < img src = "nativos-iso.svg"
                alt = "" / > </div> <div class = "text" > ¡Hola Nativos <FontAwesomeIcon className = "IconRed"
                icon = "heart" / > ! </div> <div class = "BtnGoogle" > <GoogleLogin clientId = "398505625313-jivq5uosptpkscnov6fmu1ikj9l69uh7.apps.googleusercontent.com"
                buttonText = "Ingresar con Google"
                onSuccess = {
                    responseGoogle
                }
                onFailure = {
                    responseGoogle
                }
                cookiePolicy = {
                    'single_host_origin'
                }
                /> </div> </div> </div>);
            }
        }
        const mapStateToProps = state => ({
            login: state.login
        })
        export default connect(mapStateToProps, {
            loginGoogle
        })(Login); // Don’t forget to use export default!
