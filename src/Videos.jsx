import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Videos extends Component {
  render() {
    return (
      <div id="video-wrapper">
        <div className="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/videoseries?list=PLpFwFqHqpCJ_GE19aq0EBjj7OWereNDYC"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
};

export default Videos;
