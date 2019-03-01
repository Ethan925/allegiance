import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class HeaderItems extends Component {
  render() {
    return (
      <div className="header-items">
      	<div className="header-item">gigs</div>
      	<div className="header-item">listen</div>
      	<div className="header-item">book</div>
      	<div className="header-item">about</div>
      </div>
    );
  }
};

export default HeaderItems;
