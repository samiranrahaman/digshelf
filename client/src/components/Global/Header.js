import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import logo from './logo.svg';
//import './App.css';
//import Product from './components/product/product';
class Header extends Component {
    render()
    {
        return(
            <div class="col-xl-12 col-lg-12 col-md-12 col-12">
     
   <div class="row  mar menu_bg">
      <div class=" mar top-nav col-12">
        <div class="row">
          <div class="brand-div col-xl-6 col-lg-6 col-md-12 col-12">
       <img src="images/logo.png">
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
           <li><a href="#">Security & Help</a></li>
           <li><a href="#">Login</a> </li>
           <li class="sign_up"><a href="#">Signup for free</a></li>
         </ul>
        </div>
      </div>
   </div>   
  </div>
</div>
  




<!-- start of code for middle nav -->

 <div class="pad col-xl-12 col-lg-12 col-md-12 col-sm-12  col-12">
   <div class="m-nav-sec">
<div class="container max-width-1000">

  <!-- <div class="row m-nav mar">
      <div class="m-nav-l offset-xl-1 col-xl-2 col-lg-2 col-md-3 col-sm-12 pad">
      	<div>
          <p class="p1">Find a Doctor</p>
          <p class="p2">Book an Appointment</p>
          </div>
      </div>
      <div class="m-nav-l offset-xl-1 col-xl-2 col-lg-2 col-md-3 col-sm-12 pad">
      	<div>
          <p class="p1">Order Medicine</p>
          <p class="p2">Order your medicines</p>
          </div>
        </div>
        <div class="m-nav-l offset-xl-1 col-xl-2 col-lg-2 col-md-3 col-sm-12 pad">
        	<div>
          <p class="p1">Book for Diagnostic</p>
            <p class="p2">Book labtest from home</p>
            </div>
          </div>
          <div class="m-nav-l offset-xl-1 col-xl-2 col-lg-2 col-md-3  col-sm-12 pad">
          	<div>
              <p class="p1">Care at Home</p>
              <p class="p2">Call doctor at home</p>
              </div>
            </div>
    </div> -->


     <div class="row m-nav mar">
      <div class="m-nav-l">
      	<div>
          <p class="p1">Find a Doctor</p>
          <p class="p2">Book an Appointment</p>
          </div>
      </div>
      <div class="m-nav-l ">
      	<div>
          <p class="p1">Order Medicine</p>
          <p class="p2">Order your medicines</p>
          </div>
        </div>
        <div class="m-nav-l ">
        	<div>
          <p class="p1">Book for Diagnostic</p>
            <p class="p2">Book labtest from home</p>
            </div>
          </div>
          <div class="m-nav-l ">
          	<div>
              <p class="p1">Care at Home</p>
              <p class="p2">Call doctor at home</p>
              </div>
            </div>
    </div>


    <div class="row mar search-area">
      <div class="input1  col-xl-3 col-lg-3 col-md-4 pr-0">
           <input type="search">
      </div>
      <div class="input2 col-xl-9 col-lg-9 col-md-8">
        <input type="search">
        <button class="search">Search</button>
      </div>
    </div>
  </div>
</div>
 </div>


<!-- end of code for middle nav -->



 <!-- start of code for carousel section -->

<div id="demo" class="carousel slide back-color" data-ride="carousel">
	 <div class="container">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item back-color active">
    	<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    		<div class="row mar">
    			<div class=" col-xl-9 col-lg-9 col-md-8 ">
    				  <div class="image-caption">
        <h3>Quickly get appointment from best doctor from your city</h3>
      <div class="col-xl-12">
      	<div class="row">
      		<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 pad">
      			Reasonable wait time
      		</div>
      		<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 pad">
      			Fixed consultation fee
      		</div>
      		<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 pad">
      			Best doctor from your city
      		</div>
      	</div>
      	<div class="row">
      		<div class="col-xl-12 col-lg-12 col-sm-12 col-12 pad">
      		<p class="disc-p">Get 25% off on your first booking</p>
      	</div>
      		
      	</div>
      	     	<div class="row">

<div class="book-btn">Book Now</div>
</div>
      	</div>
      </div> 
    			</div>
    			<div class="col-xl-3 col-lg-3 col-md-4 slide1-im">
    				  <img src="images/doctor.png" alt="Doctor" >
    			</div>
    		</div>
    	</div>
    
       
    </div>
    <div class="carousel-item">
      <img src="images/2.jpg" alt="Chicago" width="1100" height="500">
      <div class="carousel-caption">
        <h3>Chicago</h3>
        <p>Thank you, Chicago!</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src="images/1.jpg" alt="New York" width="1100" height="500">
      <div class="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>   
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
</div>
 <!-- end of code for carousel section --></div>

        )
    }
}
export default Header;