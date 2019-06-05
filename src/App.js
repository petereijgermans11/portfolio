import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Projects from './components/projects'
import Workshops from './components/workshops'
import Publications from './components/publications'
import Talks from './components/talks'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				    <div id="colorlib-main">
              <Introduction></Introduction>
              <About></About>
              <Workshops></Workshops>
              <Publications></Publications>
              <Talks></Talks>
              {/*<Projects></Projects>
              <Timeline></Timeline>*/}
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
