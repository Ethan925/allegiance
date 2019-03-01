import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Header extends Component {
  render() {
    return (
      <div className="header">
        header
      </div>
    );
  }
};

export default Header;
