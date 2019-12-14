import React, { Component } from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import Movies from './components/movies';
// import logo from './logo.svg';
import Customers from './components/customers';
// import Rentals from './components/Rentals';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navbar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';

import './App.css';

// import { Route } from 'rr';



class App extends Component {
  render() {
    return (
      <React.Fragment>
      <NavBar/>
      <main className='container'>
      <Switch>
      <Route path="/register" component={RegisterForm}></Route>
      <Route path="/login" component={LoginForm}></Route>
      <Route path="/movies/:id" component={MovieForm}></Route>
      <Route path="/movies" component={Movies}></Route>
      <Route path="/customers" component={Customers}></Route>
      <Route path="/Rentals" component={Rentals}></Route>
      <Route path="/not-found" component={NotFound}></Route>
      <Redirect from='/' exact to="/movies"/>
      <Redirect to="/not-found"/>
      </Switch>
      
      {/* <Movies/> */}
      </main>
      </React.Fragment>
    );
  }
 
}

export default App;
