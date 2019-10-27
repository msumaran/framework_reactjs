import React from 'react';

import { connect } from 'react-redux';
import AdminLTE, { Sidebar, Navbar} from 'adminlte-2-react';

import Dashboard from './sections/dashboard'

import Login from './sections/login'

import {
    logout
} from './actions/loginActions';

const { Item } = Sidebar;
const {
  Entry, 
} = Navbar;



class App extends React.Component {
  

  sidebar = [
    <Item key="dashboard" icon="fa-home" text="Inicio" to="/" />,

  ]


  render() {

      const { login } = this.props;
      let name = "Hola, "+this.props.login.login.name;



      let content = login.loggedIn ?
            (
             


              <AdminLTE title={["Nativos", "Digitales"]}  titleShort={["N", "D"]} theme="black" sidebar={this.sidebar}>
                
                  <Navbar.Core>
       
          <Item
            icon="fa-user"
            text={name}

          />
          <Entry
            icon="fas-power-off"
            onClick={() => this.props.logout()}
          />
        </Navbar.Core>

                 <Dashboard path="/"  />
              </AdminLTE>
            ) :
            (
                  <Login />
            );


    return ( <div>
                {content}
            </div> );
  }
}

function mapStateToProps(state) {
  const { login } = state;
  return {login};
}

export default connect(mapStateToProps, {
            logout
        })(App); 


