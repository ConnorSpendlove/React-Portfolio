import React from 'react';
import PortfolioItem from '../components/Project';
import DigitalDealHunt from "../assets/digitalDealHunt.png"
import PhysicsSandbox from "../assets/PhysicsSandbox.png"
import ExpressNoteTaker from "../assets/ExpressNoteTaker.png"
import WeeklyForecast from "../assets/WeeklyForecast.png"
import PasswordGenerator from "../assets/PasswordGenerator.png"

const Portfolio = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>View My Portfolio!</h1>
        <p style={styles.paragraph}>
          Explore a curated selection of my favorite projects, each representing a milestone in my coding journey.
        </p>
      </div>
      <PortfolioItem
        title="Digital Deal Hunt"
        description="A website to scout out the best video games deals."
        imageUrl={DigitalDealHunt}
        linkUrl="https://connorspendlove.github.io/Project-1-Repo/index.html"
      />
      <PortfolioItem
        title="Physics Sandbox"
        description="A website to simulate physics scenarios and observe the outcomes."
        imageUrl={PhysicsSandbox}
        linkUrl="https://connorspendlove.github.io/Physics-Sandbox/"
      />
      <PortfolioItem
        title="Express Note Taker"
        description="A website to keep track of your most important notes."
        imageUrl={ExpressNoteTaker}
        linkUrl="https://note-taker-bn5s.onrender.com/"
      />
      <PortfolioItem
        title="Weekly Forecast"
        description="A website to see the weekly forecast in any city."
        imageUrl={WeeklyForecast}
        linkUrl="https://connorspendlove.github.io/Weekly-Forecast/"
      />
      <PortfolioItem
        title="Password Generator"
        description="A website to generate a secure password for any need."
        imageUrl={PasswordGenerator}
        linkUrl="https://connorspendlove.github.io/Password-Generator/"
      />
    </div>
  );
};

const styles = {
  container: {
    padding: '20px', // Added padding for spacing
    backgroundColor: "#d0d6b5",
  },
  card: {
    backgroundColor: '#E8eae5', // Slightly darker shade
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    marginBottom: '20px', // Added margin bottom for spacing
  },
  heading: {
    color: '#000',
    fontSize: '35px',
    marginBottom: '10px',
  },
  paragraph: {
    color: '#000',
    fontSize: '18px',
    lineHeight: '1.6',
  },
};

export default Portfolio;
