import React, { Component } from 'react';
import { observer } from 'mobx-react';
import * as emailjs from 'emailjs-com';

@observer
class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="form">
          form here
        </div>
      </div>
    );
  }
};

export default Book;
