/* Header.js */
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>BMI 계산기</h1>
      <p style={styles.subtitle}>키와 몸무게로 나의 체질량지수를 확인하세요</p>
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
    fontSize: '2rem',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1rem',
    opacity: 0.85,
  },
};

export default Header;
