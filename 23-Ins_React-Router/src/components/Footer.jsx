import React, { useState } from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';

export default function Footer() {
  const [imageColor, setImageColor] = useState('#000000'); // Default color

  // Function to handle click on a tab and update the image color
  const handleTabClick = (color) => {
    setImageColor(color);
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.imageContainer}>
        <img src={image1} alt="Image 1" style={{ ...styles.image, filter: `invert(${imageColor === '#000000' ? 1 : 0})` }} />
        <img src={image2} alt="Image 2" style={{ ...styles.image, filter: `invert(${imageColor === '#000000' ? 1 : 0})` }} />
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
