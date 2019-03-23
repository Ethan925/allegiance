import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Logo from './images/allegiance_logo_white.png';
import HeaderItems from './HeaderItems';

@observer
class StickyHeader extends Component {
  render() {
    return (
      <div
        className="sticky-header"
        style={{
          opacity: this.props.show ? 1 : 0,
        }}
      >
        <img
          src={Logo}
          style={{
            height: "150%"
          }}
        />
        <HeaderItems/>
      </div>
    );
  }
};

export default StickyHeader;
