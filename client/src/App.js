import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import Home from './components/Home/Home';
//import About from './components/About/About';
//import Contact from './components/Contact/Contact';
//import logo from './logo.svg';
//import './App.css';
//import Product from './components/product/product';

import Footer from './components/Global/Footer';
import Header from './components/Global/Headernew';
import Sidebar from './components/Global/Sidebar';
import Home from './components/Home/Home';


import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Help from './components/Help/Help';

//<App children={{main: <Users/>, sidebar: <UsersSidebar/>}}/>

class App extends Component {
  render() {
    //const { main, header,footer } = this.props;
    return (
      <Router>
      <div className="App">
      <Header/>
      <Sidebar/>
      <main>
         <Switch>
            <Route exact path='/help' component={Help} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route exact path='' component={Home} />
        </Switch>
      </main>
      <Footer/>
       </div>
       </Router>
     )
 }
}

export default App;
