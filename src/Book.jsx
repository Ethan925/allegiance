import React, { Component } from 'react';
import { observer } from 'mobx-react';
import * as emailjs from 'emailjs-com';

@observer
class Book extends Component {
  state = {
    address: '',
    email: ''
  };

  render() {
    return (
      <div id="book">
        <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            width: 735
          }}>
          <h2 style={{marginBottom: 0}}>Booking</h2>
        </div>
        <div className="form">
          <div className="input-wrapper">
            Name:
            <input type="text" placeholder="Name..."/>
          </div>
          <div className="input-wrapper">
            Email:
            <input type="text" placeholder="Email..."/>
          </div>
          <div className="input-wrapper">
            Message:
            <textarea type="text" placeholder="Message..." height="300"/>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
            <button>
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Book;
