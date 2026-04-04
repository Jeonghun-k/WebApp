/* BmiGauge.js */
// Plan SC: 게이지 바로 현재 BMI 위치 시각화
import React from 'react';

const BmiGauge = (props) => {
  if (props.bmi === null) return null;

  // BMI 10~40 범위를 0~100%로 매핑
  const MIN = 10;
  const MAX = 40;
  const percent = Math.min(100, Math.max(0, ((props.bmi - MIN) / (MAX - MIN)) * 100));

  return (
    <div style={styles.wrapper}>
      <div style={styles.track}>
        <div style={styles.gradient} />
        <div style={{ ...styles.marker, left: `calc(${percent}% - 6px)` }} />
      </div>
      <div style={styles.labels}>
        <span>저체중</span>
        <span>정상</span>
        <span>과체중</span>
        <span>비만</span>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    marginTop: '20px',
    marginBottom: '4px',
  },
  track: {
    position: 'relative',
    height: '14px',
    borderRadius: '7px',
    overflow: 'visible',
    marginBottom: '6px',
  },
  gradient: {
    width: '100%',
    height: '100%',
    borderRadius: '7px',
    background: 'linear-gradient(to right, #3498db 0%, #2ecc71 37%, #e67e22 62%, #e74c3c 100%)',
  },
  marker: {
    position: 'absolute',
    top: '-3px',
    width: '12px',
    height: '20px',
    background: '#222',
    borderRadius: '3px',
  },
  labels: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.72rem',
    color: '#888',
  },
};

export default BmiGauge;
