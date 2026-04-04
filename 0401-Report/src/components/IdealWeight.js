/* IdealWeight.js */
// Plan SC: 이상 체중 범위 정확하게 표시
import React from 'react';

const IdealWeight = (props) => {
  if (!props.height || parseFloat(props.height) <= 0) return null;

  const h = parseFloat(props.height);
  let minWeight, maxWeight, unit;

  if (props.unit === 'metric') {
    const hm = h / 100;
    minWeight = (18.5 * hm * hm).toFixed(1);
    maxWeight = (24.9 * hm * hm).toFixed(1);
    unit = 'kg';
  } else {
    const hInch = h * 12;
    minWeight = ((18.5 * hInch * hInch) / 703).toFixed(1);
    maxWeight = ((24.9 * hInch * hInch) / 703).toFixed(1);
    unit = 'lb';
  }

  return (
    <div style={styles.wrapper}>
      <p style={styles.label}>정상 체중 범위</p>
      <p style={styles.value}>
        {minWeight} ~ {maxWeight} {unit}
      </p>
    </div>
  );
};

const styles = {
  wrapper: {
    marginTop: '16px',
    padding: '12px 16px',
    background: '#f0f9f0',
    borderRadius: '8px',
    borderLeft: '4px solid #2ecc71',
  },
  label: {
    fontSize: '0.78rem',
    color: '#888',
    marginBottom: '4px',
  },
  value: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#27ae60',
  },
};

export default IdealWeight;
