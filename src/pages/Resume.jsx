import React from 'react';
import ResumeDownload from '../assets/ConnorSpendlovesResume.pdf';

const Resume = () => {
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h3 style={styles.subheading}>Proficiencies</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>JavaScript</li>
          <li style={styles.listItem}>React.js</li>
          <li style={styles.listItem}>Node.js</li>
          <li style={styles.listItem}>HTML</li>
          <li style={styles.listItem}>CSS</li>
          <li style={styles.listItem}>MySQL</li>
          <li style={styles.listItem}>MongoDB</li>
          <li style={styles.listItem}>Express.js</li>
          <li style={styles.listItem}>Bootstrap</li>
          <li style={styles.listItem}>Materialize</li>
          <li style={styles.listItem}>Bulma</li>
          {/* Add more proficiencies as needed */}
        </ul>
      </div>
      <div style={styles.content}>
        <h2 style={styles.heading}>Resume</h2>
        <p style={styles.text}>Click to View my Resume!</p>
        <a href={ResumeDownload} target="_blank" rel="noopener noreferrer" style={styles.link}>
          View Resume
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#74226c',
    minHeight: '100vh',
    color: '#fff',
  },
  sidebar: {
    backgroundColor: '#a36199',
    padding: '20px',
    width: '200px', // Set a fixed width for the sidebar
  },
  content: {
    flex: 1, // Flex to fill the remaining space
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '340px',
  },
  heading: {
    fontSize: '3em',
    marginBottom: '10px',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
  },
  text: {
    fontSize: '20px',
    marginBottom: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    backgroundColor: '#816e94',
    padding: '8px 16px', // Smaller padding
    borderRadius: '5px',
    textAlign: 'center',
    minWidth: '120px', // Smaller width
  },
  subheading: {
    fontSize: '1.5em',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: "column",
    alignItems: 'center',
  },
  listItem: {
    marginBottom: '5px',
  },
};

export default Resume;
