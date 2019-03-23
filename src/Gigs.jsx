import React, { Component } from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';

@observer
class Gigs extends Component {
  render() {
    const gigs = [
      {
        date: {
          number: "22",
          month: "Jun",
          time: "6pm - 8pm",
        },
        where: "The Big Dog",
        link: "https://www.facebook.com/BigDogSaloon/",
        description: "More Info to Come"
      },
      {
        date: {
          number: "23",
          month: "Jul",
          time: "6:30pm - 8:30pm",
        },
        where: "Summit County Fair",
        link: "https://www.summitfair.com/",
        description: "More Info to Come"
      },
      {
        date: {
          number: "07",
          month: "Sep",
          time: "2:30pm - 6pm",
        },
        where: "Mantua Potato Fest",
        link: "http://www.mantuapotatofestival.org/",
        description: "More Info to Come"
      },
      {
        date: {
          number: "13",
          month: "Sep",
          time: "5pm - 7pm",
        },
        where: "Brimfest",
        link: "https://brimfieldohio.gov/event/brimfest/",
        description: "More Info to Come"
      },
    ];
    return (
      <div id="gigs">
        {
          _.map(gigs, (gig, index) => {
            return (
              <div className="gig" key={index}>
                <i className="fa fa-calendar"></i>
                <div className="date">
                  <div className="number">{gig.date.number}</div>
                  <div>{gig.date.month}</div>
                </div>
                <div>
                  <a className="where" href={gig.link} target="_blank">{gig.where}</a>
                  <div className="time">{gig.date.time}</div>
                  <div>{gig.description}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
};

export default Gigs;
