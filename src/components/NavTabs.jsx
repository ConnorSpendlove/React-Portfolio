import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  // State to store the background color of the active tab
  const [activeTabColor, setActiveTabColor] = useState('#000000'); // Default color

  // Function to handle click on a tab and update the active tab color
  const handleTabClick = (color) => {
    setActiveTabColor(color);
  };

  return (
    <header style={{ ...styles.header, backgroundColor: '#000000' }}>
      <div style={styles.headerLeft}>
        <h1 style={styles.title}>Connor Spendlove</h1>
      </div>
      {/* color of tab matches color of background of page */}
      <nav style={styles.nav}>
        <ul className="nav justify-content-end" style={styles.navList}>
          <li className="nav-item" style={{ ...styles.navItem, backgroundColor: activeTabColor === '#75b9be' ? '#75b9be' : '#000000' }}>
            <Link
              to="/"
              className="nav-link"
              style={{ ...styles.link, backgroundColor: activeTabColor === '#75b9be' ? '#75b9be' : '#000000' }}
              onClick={() => handleTabClick('#75b9be')}
            >
              About
            </Link>
          </li>
          <li className="nav-item" style={{ ...styles.navItem, backgroundColor: activeTabColor === '#d0d6b5' ? '#d0d6b5' : '#000000' }}>
            <Link
              to="/Portfolio"
              className="nav-link"
              style={{ ...styles.link, backgroundColor: activeTabColor === '#d0d6b5' ? '#d0d6b5' : '#000000' }}
              onClick={() => handleTabClick('#d0d6b5')}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item" style={{ ...styles.navItem, backgroundColor: activeTabColor === '#816e94' ? '#816e94' : '#000000' }}>
            <Link
              to="/Contact"
              className="nav-link"
              style={{ ...styles.link, backgroundColor: activeTabColor === '#816e94' ? '#816e94' : '#000000' }}
              onClick={() => handleTabClick('#816e94')}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item" style={{ ...styles.navItem, backgroundColor: activeTabColor === '#74226c' ? '#74226c' : '#000000' }}>
            <Link
              to="/Resume"
              className="nav-link"
              style={{ ...styles.link, backgroundColor: activeTabColor === '#74226c' ? '#74226c' : '#000000' }}
              onClick={() => handleTabClick('#74226c')}
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    paddingBottom: '0',
    color: '#fff',
    transition: 'background-color 0.3s',
  },
  headerLeft: {
    flex: '1',
  },
  title: {
    margin: '0',
    fontSize: '29px',
    paddingBottom: '20px',
  },
  nav: {
    flex: '1',
    textAlign: 'right',
  },
  navList: {
    display: 'flex',
    alignItems: 'stretch',
    height: '100%',
    margin: '0',
    padding: '0',
  },
  navItem: {
    flexGrow: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s',
    fontSize: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    transition: 'background-color 0.3s', 
    height: '100%',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: '25px 1px',
  },

};

export default NavTabs;
