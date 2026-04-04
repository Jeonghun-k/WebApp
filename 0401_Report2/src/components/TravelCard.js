/* TravelCard.js */
import React from 'react';

// props: name, image, description, season, category, continent
const TravelCard = (props) => {
  return (
    <div style={styles.card}>
      <img
        src={props.image}
        alt={props.name}
        style={styles.img}
        onError={(e) => {
          e.target.style.background = '#dde4ef';
          e.target.src = '';
        }}
      />
      <div style={styles.body}>
        <div style={styles.tagRow}>
          <span style={styles.tagBlue}>{props.continent}</span>
          <span style={styles.tagGray}>{props.category}</span>
        </div>
        <h3 style={styles.name}>{props.name}</h3>
        <p style={styles.desc}>{props.description}</p>
        <p style={styles.season}>추천 계절: {props.season}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    background: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
    cursor: 'pointer',
  },
  img: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    background: '#c5d5ea',
    display: 'block',
  },
  body: {
    padding: '14px',
  },
  tagRow: {
    display: 'flex',
    gap: '6px',
    marginBottom: '8px',
  },
  tagBlue: {
    fontSize: '0.72rem',
    background: '#e8f0fe',
    color: '#1a73e8',
    borderRadius: '10px',
    padding: '2px 8px',
    fontWeight: 'bold',
  },
  tagGray: {
    fontSize: '0.72rem',
    background: '#f1f3f4',
    color: '#555',
    borderRadius: '10px',
    padding: '2px 8px',
  },
  name: {
    fontSize: '1.1rem',
    marginBottom: '6px',
  },
  desc: {
    fontSize: '0.85rem',
    color: '#666',
    lineHeight: 1.5,
    marginBottom: '10px',
  },
  season: {
    fontSize: '0.8rem',
    color: '#e67e22',
    fontWeight: 'bold',
  },
};

export default TravelCard;
