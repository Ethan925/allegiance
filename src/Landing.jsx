import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Img1 from './images/cover_image.jpg';
import Img2 from './images/cover2.jpg';
import Img3 from './images/cover3.jpg';
import Img4 from './images/cover4.jpg';
import Img5 from './images/cover5.jpg';
import Img6 from './images/cover6.jpg';
import Logo from './images/allegiance_logo_white.png';
import { Fade } from 'react-slideshow-image';

const slides = [
  Img5,
  Img2,
  Img6,//Img4
  Img3,
];


@observer
class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Fade
          duration={9000}
          transitionDuration={500}
          infinite={true}
          indicators={true}
          style={{width: "100%"}}
        >
          {
            _.map(slides, (slide, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    background: 'black',
                  }}
                >
                  <div
                    className="slide-img"
                    style={{
                      backgroundImage: `url('${slide}')`,
                    }}
                  ></div>
                </div>
              )

            })
          }
        </Fade>
      </div>
    )


    return (
      <div className="landing">
        <div
          className="landing-img"
          style={{
            backgroundImage: `url('${Img1}')`
          }}
        >
          {/*<div className="logo-wrapper">
            <img className="logo" src={Logo}/>
          </div>*/}
        </div>
      </div>
    );
  }
};

export default Landing;
