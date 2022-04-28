import { Component } from 'react';
import './App.css';
import Title from './component/Title/Title';
import Menu from './component/Menu/Menu';
import Content from './component/Content/Content';
import Fun from './component/Fun/Fun';

class App extends Component {
  render() {
    return(
      
      <div className='App'>

        <Title />
        <hr/>
        <div className='flex'>
          <Menu />
          <Content />
        </div>
        <Fun />
      </div>
    )
  }
}



export default App;
