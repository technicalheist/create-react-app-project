import React, { Component } from 'react'
import Header from './Template/Header'
import Footer from './Template/Footer'
import AppRoute from './AppRoute'
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
export default class Common extends Component {

  render() {
    return (
      <React.Fragment>
        <Router>
        <ScrollToTop/>
        <Header/>
        <AppRoute/>
        <Footer/>
        </Router> 
      </React.Fragment>
    )
  }
}
