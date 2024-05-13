import React, { useState } from 'react';

const PortfolioItem = ({ title, description, imageUrl, linkUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const containerStyle = {
    ...styles.container,
    ...(isHovered && styles.containerHover), // Apply hover effect if isHovered is true
  };

  return (
    <a href={linkUrl} target="_blank" style={styles.link}>
      <div
        style={containerStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={imageUrl} alt={title} style={styles.image} />
        <div style={styles.content}>
          <h2 style={styles.title}>{title}</h2>
          <p style={styles.description}>{description}</p>
        </div>
      </div>
    </a>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer', // Add cursor pointer for hover effect
  },
  containerHover: {
    transform: 'scale(1.01)', // Increase size on hover
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '8px 0 0 8px',
    objectFit: 'cover',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
  title: {
    margin: '0',
    fontSize: '24px',
    color: '#333333',
  },
  description: {
    margin: '10px 0 0',
    fontSize: '16px',
    color: '#666666',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
};

export default PortfolioItem;
