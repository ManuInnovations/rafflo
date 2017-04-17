import React, { Component } from 'react';
import './App.css';

class IntroApp extends Component {
  render() {
    return (
      <div className='container'>
        <div className="Intro-app">
          <h3>Kia ora! Are you ready to do some awesome fundraising for your community?</h3>
          <h3> Would you like to know how Rafflo can help you?</h3>
          <h3>Rafflo is quick, easy to use and fun.</h3>
          <p>Rafflo is a raffle app that manages your ticket sales, gives you real time information on your progress toward your fundraising goal and helps you to organise and promote your raffle. </p>
          <ul>
            <li>No more fiddly raffle books: everyone can sell tickets!</li>
            <li>Get real-time updates on funds raised from every ticket sale.</li>
            <li>Keep track of your own ticket sales.</li>
            <li>Ticket purchasers get all the information about the raffle instantly emailed to them, so they never have to worry about losing their raffle tickets!</li>
            <li>Ticket purchasers can have the option of cash or online banking.</li>
            <li>Rafflo can email everyone the results of the raffle - letting people know how successful your fundraising was for your community.</li>
          </ul>
          <div className='button'>
            <a class="button" href="#">Sign up and create a new Rafflo for your raffle</a>
          </div>
          <div className='button'>
            <a class="button" href="#">Sign in and check out your current raffle</a>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroApp;
