import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Footer from '../Global/Footer';
import Header from '../Global/Headernew';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Login/Signup';
import Help from '../Help/Help';
import App from '../.././App';
class Headernew extends Component {
  render() {
    //const { main, header,footer } = this.props;
    return (
      <div class="col-xl-12 col-lg-12 col-md-12 col-12">
     
    <div class="row  mar menu_bg">
       <div class=" mar top-nav col-12">
         <div class="row">
           <div class="brand-div col-xl-6 col-lg-6 col-md-12 col-12">
           <Link to={'/'} className="nav-link"><img src="images/logo.png"/></Link>
         </div>
         <div class="col-xl-6 col-lg-6 col-md-12 col-12">
           <div class="button-box">
               <button type="button" class="hamburger is-closed" data-toggle="offcanvas">
                   <span class="hamb-top"></span>
             <span class="hamb-middle"></span>
           <span class="hamb-bottom"></span>
               </button>
           </div>
     
           <ul class="top-nav-menu" >
            <li><Link to={'/help'} className="nav-link">Security & Help</Link></li>
            <li><Link to={'/login'} className="nav-link">Login</Link></li>
            <li><Link to={'/signup'} className="nav-link sign_up">Signup</Link></li>
         </ul>
         
         </div>
       </div>
    </div>   
   </div>
 </div>
      )

  }
}

export default Headernew;
