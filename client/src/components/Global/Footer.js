import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
        <div class="footer-bot-sec">
        <div class="container">
    <div class="col-xl-12 col-lg-12">
        <div class="row mar align-items-center">
          <div class="col-xl-3 col-lg-6">
              <img src="images/footer-logo.png"/>
          </div>
          <div class="offset-xl-1 col-xl-4 col-lg-5">
             <p class="cop-right">Copyright © 2019, Medleymed. All rights reserved.</p>
            </div>
            <div class="col-xl-4 col-lg-4">
                <div class="pay-card">
                     <img src="images/pay-cards.png"/>
                </div>
                          </div>
        </div>
      </div>
  </div>
    </div>
      );

  }
}

export default Footer;
