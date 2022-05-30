import { Component } from 'react';
import './App.css';
import Title from './component/Title/Title';
import Menu from './component/Menu/Menu';
import Webinar from './component/Content/WebinarLinije/WebinarLinije';
import TTBL from './component/Content/TTBLLinije/TTBLLinija';
import Qa from './component/Content/Qa/Qa';
import Home from './component/Content/Home/Home';
import Fun from './component/Fun/Fun';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
  }

  render() {
    return( 
      <Router>
        <div className='App'>
          <Title />
          <hr/>
          <div className='flex'>
            <Menu/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/webinar" element={<Webinar/>}/>
              <Route path="/ttbl" element={<TTBL/>}/>
              <Route path="/qa" element={<Qa/>}/>
            </Routes>
          </div>
          <Fun />
        </div>
      </Router>
    )
  }
}



export default App;
