import React from 'react';

const PortfolioItem = ({ title, description, imageUrl }) => {
  return (
    <div style={styles.container}>
      <img src={imageUrl} alt={title} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>{description}</p>
      </div>
    </div>
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
};

export default PortfolioItem;
