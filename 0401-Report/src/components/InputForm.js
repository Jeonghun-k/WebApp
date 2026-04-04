/* InputForm.js */
import React from 'react';

const InputForm = (props) => {
  const heightPlaceholder = props.unit === 'metric' ? '키 (cm)' : '키 (ft)';
  const weightPlaceholder = props.unit === 'metric' ? '몸무게 (kg)' : '몸무게 (lb)';
  const isValid = props.height > 0 && props.weight > 0;

  return (
    <div>
      <div style={styles.row}>
        <input
          type="number"
          placeholder={heightPlaceholder}
          value={props.height}
          onChange={(e) => props.onHeightChange(e.target.value)}
          style={styles.input}
          min="0"
        />
        <input
          type="number"
          placeholder={weightPlaceholder}
          value={props.weight}
          onChange={(e) => props.onWeightChange(e.target.value)}
          style={styles.input}
          min="0"
        />
      </div>
      <button
        onClick={props.onCalculate}
        disabled={!isValid}
        style={{ ...styles.btn, ...(!isValid ? styles.btnDisabled : {}) }}
      >
        BMI 계산하기
      </button>
    </div>
  );
};

const styles = {
  row: {
    display: 'flex',
    gap: '12px',
    marginBottom: '14px',
  },
  input: {
    flex: 1,
    padding: '12px 14px',
    border: '1.5px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
  },
  btn: {
    width: '100%',
    padding: '14px',
    background: '#1a73e8',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  btnDisabled: {
    background: '#b0c4de',
    cursor: 'not-allowed',
  },
};

export default InputForm;
