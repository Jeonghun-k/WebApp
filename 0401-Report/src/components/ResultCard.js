/* ResultCard.js */
// Plan SC: BMI 분류 4단계 색상 구분 표시
import React from 'react';

const ResultCard = (props) => {
  if (props.bmi === null) {
    return (
      <div style={styles.empty}>
        <p>키와 몸무게를 입력하고 계산 버튼을 눌러주세요</p>
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      <p style={styles.bmiValue}>{props.bmi}</p>
      <span style={{ ...styles.badge, background: props.category.color }}>
        {props.category.label}
      </span>
    </div>
  );
};

const styles = {
  empty: {
    textAlign: 'center',
    color: '#aaa',
    padding: '24px 0',
    fontSize: '0.9rem',
  },
  wrapper: {
    textAlign: 'center',
    padding: '20px 0 10px',
  },
  bmiValue: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: '#222',
    lineHeight: 1.1,
  },
  badge: {
    display: 'inline-block',
    marginTop: '10px',
    padding: '6px 20px',
    borderRadius: '20px',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
};

export default ResultCard;
