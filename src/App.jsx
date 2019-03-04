import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Landing from './Landing';
import Header from './Header';
import Gigs from './Gigs';
import About from './About';
import StickyHeader from './StickyHeader';
import Videos from './Videos';
import Book from './Book';
import './css/main.css';

@observer
class App extends Component {
  state = {
    showOpacity: false,
    renderStickyHeader: false
  };

  hideBar = () => {
    const { showOpacity, renderStickyHeader } = this.state
    if (window.scrollY > (document.body.clientHeight * .6)) {
      !showOpacity && this.setState({ showOpacity: true });
    } else {
      showOpacity && this.setState({ showOpacity: false });
    }

    if (window.scrollY > 100) {
      !renderStickyHeader && this.setState({ renderStickyHeader: true });
    } else {
      renderStickyHeader && this.setState({ renderStickyHeader: false });
    }

    // this.prev = window.scrollY;
  }

  componentDidMount(){
    window.addEventListener('scroll', this.hideBar);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.hideBar);
  }


  render() {
    return (
      <div>
        <Header/>
        <Landing/>
        {
          this.state.renderStickyHeader && <StickyHeader show={this.state.showOpacity}/>
        }
        <Gigs/>
        <Videos/>
        <About/>
        <Book/>
        {/*<DevTools />*/}
      </div>
    );
  }
};

export default App;
