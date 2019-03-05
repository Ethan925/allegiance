import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Scrollspy from 'react-scrollspy';

@observer
class HeaderItems extends Component {
  render() {
    return (
      <Scrollspy
        items={['gigs', 'video-wrapper', 'about', 'book']}
        currentClassName={this.props.ignoreScrollspy ? "" : "is-current"}
        offset={-100}
        style={{
          display: 'flex',
          cursor: 'pointer',
        }}
      >
      	<div
          className="header-item"
          onClick={() => {
            const el = document.getElementById('gigs');
            el.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            // setTimeout(() => {
            //   window.scrollBy({top: -100, left: 0, behavior: 'smooth'});
            // }, 500)
          }}
        >gigs</div>
      	<div
          className="header-item"
          onClick={() => {
            const el = document.getElementById('video-wrapper');
            el.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            // setTimeout(() => {
            //   window.scrollBy({top: -100, left: 0, behavior: 'smooth'});
            // }, 500)
          }}
        >listen</div>
        <div
          className="header-item"
          onClick={() => {
            const el = document.getElementById('about');
            el.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            // setTimeout(() => {
            //   window.scrollBy({top: -100, left: 0, behavior: 'smooth'});
            // }, 500)
          }}
        >about</div>
      	<div
          className="header-item"
          onClick={() => {
            const el = document.getElementById('book');
            el.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            // setTimeout(() => {
            //   window.scrollBy({top: -100, left: 0, behavior: 'smooth'});
            // }, 500)
          }}
        >book</div>
      </Scrollspy>
    );
  }
};

export default HeaderItems;
