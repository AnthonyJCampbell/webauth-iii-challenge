import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Login from './Login';
import Users from './Users';
import Register from './Register';
 
export function App (props) {
  const onLogout = () => {
    localStorage.clear();
    props.history.replace('/');
  };

  return (
    <div className="App">
      <NavLink to="/">Login</NavLink><br/>
      <NavLink to="/register">Register</NavLink><br/>
      <NavLink to="/users">Users</NavLink><br/>
      <button onClick={onLogout}>Logout</button>
      <main>
        <Route path='/' exact component={Login}/>
        <Route path='/register' component={Register}/>
        {/* <Route path='/users' exact component={Users} /> */}
      </main>
    </div>
  );
}

export default withRouter(App);
