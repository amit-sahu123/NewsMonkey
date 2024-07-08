import React, { Component } from 'react'
import News  from './components/News'
import Navbar from './components/Navbar'
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
 
  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height='4'
        progress={this.state.progress}
      />

          <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} key="general" pageSize={6} country="in" category="general" apiKey={this.apiKey}/>} />
            <Route path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={6} country="in" category="business" apiKey={this.apiKey}/>} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={6} country="in" category="entertainment" apiKey={this.apiKey}/>} />
            <Route path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={6} country="in" category="general" apiKey={this.apiKey}/>} />
            <Route path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={6} country="in" category="health" apiKey={this.apiKey}/>} />
            <Route path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={6} country="in" category="science" apiKey={this.apiKey}/>} />
            <Route path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={6} country="in" category="sports" apiKey={this.apiKey}/>} />
            <Route path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={6} country="in" category="technology" apiKey={this.apiKey}/>} />

          
          </Routes>
        </Router>

       
      </div>
    )
  }
}


