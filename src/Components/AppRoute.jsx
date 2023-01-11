import React, { Component } from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
export default class AppRoute extends Component {
  render() {
    return (
     <React.Fragment>
        <Routes>
            <Route path='/about' element={<AboutUs/>}/>
            <Route exact path='/' element={<Home/>}/>
        </Routes>
     </React.Fragment>
    )
  }
}
