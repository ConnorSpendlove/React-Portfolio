import React, { useState } from 'react';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';

export default function Footer() {
  const [githubColor, setGithubColor] = useState('#000000');
  const [linkedinColor, setLinkedinColor] = useState('#000000');
  const [instagramColor, setInstagramColor] = useState('#000000');

  return (
    <footer style={styles.footer}>
      <div style={styles.imageContainer}>
        <a href="https://github.com/ConnorSpendlove" onMouseEnter={() => setGithubColor('#FFD700')} onMouseLeave={() => setGithubColor('#000000')}>
          <img 
            src={github} 
            alt="github logo" 
            style={{ 
              ...styles.image, 
              filter: `invert(${githubColor === '#000000' ? 1 : 0})`, 
              ...(githubColor === '#000000' ? styles.imageHover : {}) 
            }} 
          />
        </a>
        <a href="https://www.linkedin.com/in/connor-spendlove-0887a7299/" onMouseEnter={() => setLinkedinColor('#FFD700')} onMouseLeave={() => setLinkedinColor('#000000')}>
          <img 
            src={linkedin} 
            alt="linkedin logo" 
            style={{ 
              ...styles.image, 
              filter: `invert(${linkedinColor === '#000000' ? 1 : 0})`, 
              ...(linkedinColor === '#000000' ? styles.imageHover : {}) 
            }} 
          />
        </a>
        <a href="https://www.instagram.com/connorspendlove1/" onMouseEnter={() => setInstagramColor('#000')} onMouseLeave={() => setInstagramColor('#000000')}>
          <img 
            src={instagram} 
            alt="instagram" 
            style={{ 
              ...styles.image, 
              filter: `invert(${instagramColor === '#000000' ? 1 : 0})`, 
              ...(instagramColor === '#000000' ? styles.imageHover : {}) 
            }} 
          />
        </a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#000',
    padding: '20px',
    textAlign: 'center',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '50px',
    height: '50px',
    margin: '0 10px',
    transition: 'filter 0.3s ease, transform 0.3s ease',
    outline: 'none',
  },
  
  imageHover: {
   
  }
};
