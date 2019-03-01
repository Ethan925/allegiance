import React, { Component } from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';
import Alexis from './images/alexis.jpg';
import Ethan from './images/ethan.jpg';

@observer
class About extends Component {
  render() {
    const members = [
      {
        name: "Alexis Pinney",
        instruments: ["vocals"],
        picture: Alexis,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum hendrerit quam eu vestibulum.",
      },
      {
        name: "Ethan Long",
        instruments: ["guitar"],
        picture: Ethan,
        bio: "Aliquam pellentesque lorem quis nibh pellentesque, vitae sodales diam pharetra. Aenean hendrerit tortor at nisi elementum, ac dapibus neque tincidunt.",
      },
      {
        name: "Alexis Pinney",
        instruments: ["vocals"],
        picture: Alexis,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum hendrerit quam eu vestibulum.",
      },
      {
        name: "Ethan Long",
        instruments: ["guitar"],
        picture: Ethan,
        bio: "Aliquam pellentesque lorem quis nibh pellentesque, vitae sodales diam pharetra. Aenean hendrerit tortor at nisi elementum, ac dapibus neque tincidunt.",
      },
      {
        name: "Alexis Pinney",
        instruments: ["vocals"],
        picture: Alexis,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum hendrerit quam eu vestibulum.",
      },
      {
        name: "Ethan Long",
        instruments: ["guitar"],
        picture: Ethan,
        bio: "Aliquam pellentesque lorem quis nibh pellentesque, vitae sodales diam pharetra. Aenean hendrerit tortor at nisi elementum, ac dapibus neque tincidunt.",
      },
      {
        name: "Alexis Pinney",
        instruments: ["vocals"],
        picture: Alexis,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum hendrerit quam eu vestibulum.",
      },
    ];
    return (
      <div className="about">
        {
          _.map(members, (member) => {
            return (
              <div className="member">
                <div className="picture">
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
                  <i
                    className="fab fa-lg fa-facebook"
                    style={{marginRight: 5}}
                  />
                  <i className="fab fa-lg fa-instagram"/>
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
