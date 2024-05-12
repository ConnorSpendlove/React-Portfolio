import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <header style={styles.header}>
      <div style={styles.headerLeft}>
        <h1 style={styles.title}>Connor Spendlove</h1>
      </div>
      <nav style={styles.nav}>
        <ul className="nav nav-tabs justify-content-end">
          <li className="nav-item">
            <Link
              to="/"
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Portfolio"
              className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Resume"
              className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
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
    backgroundColor: '#333',
    color: '#fff',
  },
  headerLeft: {
    flex: '1',
  },
  title: {
    margin: '0',
    fontSize: '24px',
  },
  nav: {
    flex: '1',
    textAlign: 'right',
  },
};

export default NavTabs;
