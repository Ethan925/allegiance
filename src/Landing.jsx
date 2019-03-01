import React, { Component } from 'react';
import { observer } from 'mobx-react';
import CrowdImg from './images/crowd.jpg'
import Logo from './images/allegiance_logo_white.png'

@observer
class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div
          className="landing-img"
          style={{
            backgroundImage: `url('${CrowdImg}')`
          }}
        >
          <img className="logo" src={Logo}/>
        </div>
      </div>
    );
  }
};

export default Landing;
