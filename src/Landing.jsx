import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Landing extends Component {
  render() {
    return (
      <div className="landing">
        Allegiance
      </div>
    );
  }
};

export default Landing;