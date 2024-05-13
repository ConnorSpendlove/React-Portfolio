import React from 'react';

const Resume = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Resume</h2>
      <p style={styles.text}>Download my resume:</p>
      <a href="../assets/Connor Spendlove's Resume.pdf" target="_blank" rel="noopener noreferrer" style={styles.link}>
        Download Resume
      </a>
      <h3 style={styles.subheading}>Proficiencies</h3>
      <ul style={styles.list}>
        <li style={styles.listItem}>JavaScript</li>
        <li style={styles.listItem}>React.js</li>
        <li style={styles.listItem}>Node.js</li>
        <li style={styles.listItem}>HTML5</li>
        <li style={styles.listItem}>CSS3</li>
        <li style={styles.listItem}>SQL</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#74226c',
    minHeight: '100vh',
    color: '#fff',
  },
  heading: {
    fontSize: '2em',
    marginBottom: '10px',
  },
  text: {
    marginBottom: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    backgroundColor: '#816e94',
    padding: '10px 20px',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  listItem: {
    marginBottom: '5px',
  },
};

export default Resume;
