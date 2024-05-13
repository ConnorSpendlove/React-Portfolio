import React from 'react';
import avatar from '../assets/avatar.png'; // import your avatar image
import suuImage from '../assets/suuCampus.png'; // import SUU campus image

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.content}>
          <h1 style={styles.heading}>About Me</h1>
          <p style={styles.paragraph}>
            My name is Connor Spendlove. Originally from Fillmore, Utah, I now call Cedar City home. I'm on the verge of completing the Full-Stack Development Bootcamp at the University of Utah and eagerly look forward to starting my Computer Science journey at Southern Utah University. Driven by a profound passion for technology, my ultimate aspiration is to excel as a Fullstack software developer.
          </p>
        </div>
        <div style={styles.avatarContainer}>
          <img src={avatar} alt="Avatar" style={styles.avatar} />
        </div>
      </div>
      <div style={styles.expandImage}>
        <img src={suuImage} alt="SUU Campus" style={styles.suuImage} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#75b9be',
    minHeight: '100vh', // Adjusted to cover the entire viewport height
    padding: '50px', // Added padding for spacing
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c4f5c', // Darker shade of blue
    borderRadius: '8px',
    padding: '30px',
    marginBottom: '40px',
  },
  avatarContainer: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    marginLeft: '20px', // Moved avatar to the right
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  content: {
    textAlign: 'center',
    flex: '1', // Added flex to make it expand
  },
  heading: {
    color: '#fff',
    fontSize: '32px',
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', // Added text shadow
    marginLeft: "140px"
  },
  paragraph: {
    color: '#fff',
    fontSize: '18px',
    lineHeight: '1.6',
    fontFamily: 'Arial, sans-serif',
    marginBottom: '0', // Removed bottom margin
  },
  expandImage: {
    width: '100%',
    textAlign: 'center',
  },
  suuImage: {
    maxWidth: '100%',
    maxHeight: '500px', // Adjusted max height
    borderRadius: '8px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    marginTop: '20px', // Added margin top
  },
};

export default About;
