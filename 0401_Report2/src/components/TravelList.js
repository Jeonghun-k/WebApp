/* TravelList.js */
import React from 'react';
import TravelCard from './TravelCard';

// props: destinations
const TravelList = (props) => {
  if (props.destinations.length === 0) {
    return <p style={styles.empty}>해당 조건에 맞는 여행지가 없습니다.</p>;
  }

  return (
    <div style={styles.grid}>
      {props.destinations.map((dest) => (
        <TravelCard
          key={dest.id}
          name={dest.name}
          image={dest.image}
          description={dest.description}
          season={dest.season}
          category={dest.category}
          continent={dest.continent}
        />
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '20px',
  },
  empty: {
    textAlign: 'center',
    color: '#999',
    padding: '60px 0',
    fontSize: '1rem',
  },
};

export default TravelList;
