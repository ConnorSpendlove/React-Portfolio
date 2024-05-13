import React, { useState } from 'react';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

export default function Footer() {
  const [imageColor, setImageColor] = useState('#000000'); // Default color

  // Function to handle click on a tab and update the image color
  const handleTabClick = (color) => {
    setImageColor(color);
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.imageContainer}>
        <img src={github} alt="github logo" style={{ ...styles.image, filter: `invert(${imageColor === '#000000' ? 1 : 0})` }} />
        <img src={linkedin} alt="linkedin logo" style={{ ...styles.image, filter: `invert(${imageColor === '#000000' ? 1 : 0})` }} />
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
    width: '50px', // Adjust the size as needed
    height: '50px', // Adjust the size as needed
    margin: '0 10px', // Adjust the margin as needed
  },
};
