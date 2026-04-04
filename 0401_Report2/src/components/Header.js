/* Header.js */
import React from 'react';

// props: title, subtitle
const Header = (props) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>{props.title}</h1>
      <p style={styles.subtitle}>{props.subtitle}</p>
    </header>
  );
};

const styles = {
  header: {
    background: 'linear-gradient(135deg, #1a73e8, #0d47a1)',
    color: '#fff',
    padding: '40px 20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.2rem',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1rem',
    opacity: 0.85,
  },
};

export default Header;
