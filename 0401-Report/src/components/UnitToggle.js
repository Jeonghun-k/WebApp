/* UnitToggle.js */
// Design Ref: §3 — 단위 변경 시 height/weight 초기화는 App.js에서 처리
import React from 'react';

const UnitToggle = (props) => {
  return (
    <div style={styles.wrapper}>
      <button
        style={{ ...styles.btn, ...(props.unit === 'metric' ? styles.btnActive : {}) }}
        onClick={() => props.onToggle('metric')}
      >
        kg / cm
      </button>
      <button
        style={{ ...styles.btn, ...(props.unit === 'imperial' ? styles.btnActive : {}) }}
        onClick={() => props.onToggle('imperial')}
      >
        lb / ft
      </button>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    gap: '8px',
    marginBottom: '20px',
  },
  btn: {
    flex: 1,
    padding: '10px',
    border: '1.5px solid #ccc',
    borderRadius: '8px',
    background: '#fff',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: '#555',
    transition: 'all 0.2s',
  },
  btnActive: {
    background: '#1a73e8',
    color: '#fff',
    borderColor: '#1a73e8',
  },
};

export default UnitToggle;
