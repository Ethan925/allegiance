import React, { Component } from 'react';
import { observer } from 'mobx-react';
import HeaderItems from './HeaderItems';

@observer
class Header extends Component {
  render() {
    return (
      <div className="header">
      	<HeaderItems ignoreScrollspy={true}/>
      </div>
    );
  }
};

export default Header;
