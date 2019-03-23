import React, { Component } from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';
import Alexis from './images/alexis.jpg';
import Ethan from './images/ethan.jpg';
import Alivia from './images/alivia.jpg';
import Paul from './images/paul.jpg';
import Nick from './images/nick.jpg';
import Andy from './images/andy.jpg';
import Evan from './images/evan.jpg';

@observer
class About extends Component {
  render() {
    const members = [
      {
        name: "Alexis Pinney",
        instruments: ["fa-microphone"],
        picture: Alexis,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum hendrerit quam eu vestibulum.",
      },
      {
        name: "Alivia Pinney",
        instruments: ["fa-microphone"],
        picture: Alivia,
        bio: "Aliquam pellentesque lorem quis nibh pellentesque, vitae sodales diam pharetra. Aenean hendrerit tortor at nisi elementum, ac dapibus neque tincidunt.",
      },
      {
        name: "Paul Olson",
        instruments: ["fa-guitar"],
        picture: Paul,
        bio: "im a cunt.",
      },
      {
        name: "Nick Luthy",
        instruments: ["fa-drum"],
        picture: Nick,
        bio: "Aliquam pellentesque lorem quis nibh pellentesque, vitae sodales diam pharetra. Aenean hendrerit tortor at nisi elementum, ac dapibus neque tincidunt.",
      },
      {
        name: "Andy Tucker",
        instruments: ["fa-guitar"],
        picture: Andy,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum hendrerit quam eu vestibulum.",
      },
      {
        name: "Ethan Long",
        instruments: ["fa-guitar"],
        picture: Ethan,
        bio: "Aliquam pellentesque lorem quis nibh pellentesque, vitae sodales diam pharetra. Aenean hendrerit tortor at nisi elementum, ac dapibus neque tincidunt.",
      },
      {
        name: "Evan Blaha",
        instruments: ["fa-guitar"],
        picture: Evan,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum hendrerit quam eu vestibulum.",
      },
    ];
    return (
      <div id="about">
        {
          _.map(members, (member, index) => {
            return (
              <div className="member" key={index}>
                <div className="picture">
                  <div className="instruments">
                    {
                      _.map(member.instruments, (instrument, index) => {
                        return (
                          <i key={index} className={`fa fa-fw ${instrument}`}></i>
                        )
                      })
                    }
                  </div>
                  <img src={member.picture}/>
                </div>
                <div className="bio-wrapper">
                  <div className="bio">
                    <div className="name">
                      {member.name}
                    </div>
                    <div className="description">
                      {member.bio}
                    </div>
                  </div>
                </div>
                <div className="social-links">
                  {
                      _.map(member.instruments, (instrument, index) => {
                        return (
                          <i key={index} className={`fa fa-fw ${instrument}`}></i>
                        )
                      })
                    }
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
};

export default About;
