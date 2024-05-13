import React from 'react';
import avatar from '../assets/avatar.png'; // import your avatar image

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.avatarContainer}>
        <img src={avatar} alt="Avatar" style={styles.avatar} />
      </div>
      <div style={styles.content}>
        <h1 style={styles.heading}>About Me</h1>
        <p style={styles.paragraph}>
          My name is Connor Spendlove. Originally from Fillmore, Utah, I now call Cedar City home. I'm on the verge of completing the Full-Stack Development Bootcamp at the University of Utah and eagerly look forward to starting my Computer Science journey at Southern Utah University. Driven by a profound passion for technology, my ultimate aspiration is to excel as a Fullstack software developer.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#75b9be',
    minHeight: '100vh', // Adjusted to cover the entire viewport height
    padding: '0', // Removed padding
    margin: '0', // Removed margin
  },
  avatarContainer: {
    marginBottom: '20px',
  },
  avatar: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
  },
  content: {
    textAlign: 'center',
    maxWidth: '600px',
  },
  heading: {
    color: '#333',
    fontSize: '32px',
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  paragraph: {
    color: '#555',
    fontSize: '18px',
    lineHeight: '1.6',
    fontFamily: 'Arial, sans-serif',
  },
};

export default About;
