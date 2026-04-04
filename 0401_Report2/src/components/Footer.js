/* Footer.js */
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2026 여행지 추천 | 웹프로그래밍응용 과제</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '24px',
    marginTop: '40px',
    background: '#1a73e8',
    color: '#fff',
    fontSize: '0.85rem',
  },
};

export default Footer;
