import React, { Component } from 'react';
import { observer } from 'mobx-react';
import HeaderItems from './HeaderItems';
import Logo from './images/allegiance_logo_white.png';

@observer
class Header extends Component {
  render() {
    return (
      <div className="header">
        <img
          src={Logo}
          style={{
            height: "150%"
          }}
        />
        <HeaderItems ignoreScrollspy={true}/>
      </div>
    );
  }
};

export default Header;
