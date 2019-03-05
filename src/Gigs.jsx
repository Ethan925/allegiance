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
          month: "Apr",
          time: "9pm - 12am",
        },
        where: "Chuggers",
        link: "https://bing.com",
        description: "Returning to Streetsboro for a night of dancing and music."
      },
      {
        date: {
          number: "01",
          month: "Jun",
          time: "6pm - 8pm",
        },
        where: "The Big Dog",
        link: "https://bing.com",
        description: "Performing for the Chamber of Commerce"
      },
      {
        date: {
          number: "22",
          month: "Apr",
          time: "9pm - 12am",
        },
        where: "Chuggers",
        link: "https://bing.com",
        description: "Returning to Streetsboro for a night of dancing and music."
      },
      {
        date: {
          number: "01",
          month: "Jun",
          time: "6pm - 8pm",
        },
        where: "The Big Dog",
        link: "https://bing.com",
        description: "Performing for the Chamber of Commerce"
      },
      {
        date: {
          number: "22",
          month: "Apr",
          time: "9pm - 12am",
        },
        where: "Chuggers",
        link: "https://bing.com",
        description: "Returning to Streetsboro for a night of dancing and music."
      },
      {
        date: {
          number: "01",
          month: "Jun",
          time: "6pm - 8pm",
        },
        where: "The Big Dog",
        link: "https://bing.com",
        description: "Performing for the Chamber of Commerce"
      },
      {
        date: {
          number: "22",
          month: "Apr",
          time: "9pm - 12am",
        },
        where: "Chuggers",
        link: "https://bing.com",
        description: "Returning to Streetsboro for a night of dancing and music."
      },
      {
        date: {
          number: "01",
          month: "Jun",
          time: "6pm - 8pm",
        },
        where: "The Big Dog",
        link: "https://bing.com",
        description: "Performing for the Chamber of Commerce"
      },
    ];
    return (
      <div id="gigs">
        {
          _.map(gigs, (gig, index) => {
            return (
              <div className="gig" key={index}>
                <i className="fa fa-fw fa-calendar"></i>
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
