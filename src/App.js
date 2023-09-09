import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home';
import Contactus from './Component/Contactus';
import About from './Component/About';
import Post from './Component/Post';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      //1-login, 0-logout
       auth: false
    }
  }

  authHandler=()=>{
    this.setState({auth: !this.state.auth})
  }
  render() {
    return (
      <Router>
      <Navbar login={this.authHandler} status={this.state.auth}/>
        <Routes>
          <Route path='/about' element={
            <React.Fragment>
              <Header title="About" image="Contact.jpg"/>
              <About/>
            </React.Fragment>
          }></Route>
          <Route path='/contact' element={
            <React.Fragment>
              <Header title="Contact Us" image="home1.jpg"/>
              <Contactus/>
            </React.Fragment>
          }></Route>
          <Route path='/post' element={
            <React.Fragment>
              {this.state.auth === false ? 
                <Navigate to="/"/>:
                <>
                  <Header title="post" image="light.jpg"/>
                  <Post/>
                </>
                }
            </React.Fragment>
          }></Route>
          <Route path='/' element={
            <React.Fragment>
              <Header title="Home" image="dark.jpg"/>
              <Home/>
            </React.Fragment>
          }></Route>
          <Route path="*" element={
            <React.Fragment>
              <Header title="404 page not found" image="404.jpg"/>
            </React.Fragment>
          }></Route>
        </Routes>
        <Footer/>
      </Router>
    )
  }
}
