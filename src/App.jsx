import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Landing from './Landing';
import Header from './Header';
import './css/main.css';

@observer
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Landing/>
        {/*<DevTools />*/}
      </div>
    );
  }
};

export default App;
