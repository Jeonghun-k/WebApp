/* FilterBar.js */
import React from 'react';

// props: label, filters, selected, onSelect
const FilterBar = (props) => {
  return (
    <div style={styles.wrapper}>
      <span style={styles.label}>{props.label}</span>
      <div style={styles.btnGroup}>
        {props.filters.map((item) => (
          <button
            key={item}
            onClick={() => props.onSelect(item)}
            style={{
              ...styles.btn,
              ...(props.selected === item ? styles.btnActive : {}),
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '12px',
  },
  label: {
    fontWeight: 'bold',
    fontSize: '0.9rem',
    color: '#555',
    minWidth: '60px',
  },
  btnGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  },
  btn: {
    padding: '6px 14px',
    border: '1.5px solid #ccc',
    borderRadius: '20px',
    background: '#fff',
    cursor: 'pointer',
    fontSize: '0.85rem',
    transition: 'all 0.2s',
  },
  btnActive: {
    background: '#1a73e8',
    color: '#fff',
    borderColor: '#1a73e8',
  },
};

export default FilterBar;
