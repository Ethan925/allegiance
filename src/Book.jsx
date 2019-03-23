import React, { Component } from 'react';
import { observer } from 'mobx-react';
import * as emailjs from 'emailjs-com';
import toastr from 'toastr';
import 'toastr/build/toastr.css';

toastr.options ={
  ...toastr.options,
  timeOut: 7000,
  extendedTimeOut: 4000,
}

const BASE_EMAIL_FORM = {
  reply_to: '',
  from_name: '',
  message_content: '',
};

@observer
class Book extends Component {
  state = {
    address: '',
    emailForm: BASE_EMAIL_FORM,
  };

  sendEmail = (e, serviceID, templateID, templateParams, userID) => {
    e.preventDefault();
    emailjs.send(
      'gmail',
      'template_URhy6272',
      this.state.emailForm,
      'user_HPXlkB6bf5laKT2iEdgoM'
    ).then((res) => {
        toastr.success(
          'The Band Allegiance will reply to you as soon as possible',
          'Email Sent!'
        )
      }).catch((error) => {
        toastr.error(
          'Please try again. If problem persists, please email thebandallegiance@gmail.com',
          'Email failed'
        );
      });
    this.setState({emailForm: BASE_EMAIL_FORM});
  };

  render() {
    return (
      <div id="book">
        <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            width: 735
          }}>
          <h2 style={{marginBottom: 0}}>Booking and Questions</h2>
        </div>
        <form className="form">
          <div className="input-wrapper">
            Name:
            <input
              type="text"
              placeholder="Name..."
              value={this.state.emailForm.from_name}
              onChange={(e) => {
                this.setState({
                  emailForm: {
                    ...this.state.emailForm,
                    from_name: e.target.value,
                  }
                })
              }}
            />
          </div>
          <div className="input-wrapper">
            Email:
            <input
              type="text"
              placeholder="Email address..."
              value={this.state.emailForm.reply_to}
              onChange={(e) => {
                this.setState({
                  emailForm: {
                    ...this.state.emailForm,
                    reply_to: e.target.value,
                  }
                })
              }}
            />
          </div>
          <div className="input-wrapper">
            Message:
            <textarea
              type="text"
              placeholder="Message..."
              height="300"
              value={this.state.emailForm.message_content}
              onChange={(e) => {
                this.setState({
                  emailForm: {
                    ...this.state.emailForm,
                    message_content: e.target.value,
                  }
                })
              }}
            />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
            <button onClick={this.sendEmail}>
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default Book;
