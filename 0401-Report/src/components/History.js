/* History.js */
// Plan SC: 히스토리 localStorage 저장/조회
import React from 'react';

const History = (props) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <h3 style={styles.title}>계산 히스토리</h3>
        {props.history.length > 0 && (
          <button onClick={props.onClear} style={styles.clearBtn}>
            전체 삭제
          </button>
        )}
      </div>
      {props.history.length === 0 ? (
        <p style={styles.empty}>아직 계산 기록이 없습니다</p>
      ) : (
        <ul style={styles.list}>
          {props.history.map((item, i) => (
            <li key={i} style={styles.item}>
              <span style={styles.date}>{item.date}</span>
              <span style={styles.bmi}>BMI {item.bmi}</span>
              <span style={styles.category}>{item.category}</span>
              <span style={styles.info}>
                {item.height}{item.unit === 'metric' ? 'cm' : 'ft'} /{' '}
                {item.weight}{item.unit === 'metric' ? 'kg' : 'lb'}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  wrapper: {
    background: '#fff',
    borderRadius: '16px',
    padding: '20px 24px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '14px',
  },
  title: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#333',
  },
  clearBtn: {
    background: 'none',
    border: '1px solid #ddd',
    borderRadius: '6px',
    padding: '4px 10px',
    fontSize: '0.78rem',
    color: '#888',
    cursor: 'pointer',
  },
  empty: {
    textAlign: 'center',
    color: '#bbb',
    fontSize: '0.9rem',
    padding: '16px 0',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 14px',
    background: '#f9f9f9',
    borderRadius: '8px',
    fontSize: '0.85rem',
  },
  date: { color: '#aaa', minWidth: '80px' },
  bmi: { fontWeight: 'bold', color: '#222' },
  category: { color: '#1a73e8', fontWeight: 'bold' },
  info: { color: '#888', marginLeft: 'auto' },
};

export default History;
