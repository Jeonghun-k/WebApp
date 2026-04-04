/* App.js */
// Design Ref: §3 — 상태 관리 + 계산 로직 집중, 컴포넌트는 UI만 담당
import React, { useState } from 'react';
import Header from './components/Header';
import UnitToggle from './components/UnitToggle';
import InputForm from './components/InputForm';
import ResultCard from './components/ResultCard';
import BmiGauge from './components/BmiGauge';
import IdealWeight from './components/IdealWeight';
import History from './components/History';
import Footer from './components/Footer';

// Plan SC: BMI 분류 4단계 색상 구분
const getCategory = (bmi) => {
  if (bmi < 18.5) return { label: '저체중', color: '#3498db' };
  if (bmi < 25)   return { label: '정상',   color: '#2ecc71' };
  if (bmi < 30)   return { label: '과체중', color: '#e67e22' };
  return           { label: '비만',   color: '#e74c3c' };
};

const App = () => {
  const [unit, setUnit] = useState('metric');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('bmi-history');
    return saved ? JSON.parse(saved) : [];
  });

  // Plan SC: kg/cm ↔ lb/ft 단위 전환
  const handleUnitToggle = (newUnit) => {
    setUnit(newUnit);
    setHeight('');
    setWeight('');
    setBmi(null);
  };

  // Plan SC: BMI 계산 정확 (WHO 기준 공식)
  const handleCalculate = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!h || !w || h <= 0 || w <= 0) return;

    let result;
    if (unit === 'metric') {
      const hm = h / 100;
      result = w / (hm * hm);
    } else {
      const hInch = h * 12;
      result = (703 * w) / (hInch * hInch);
    }
    result = Math.round(result * 10) / 10;
    setBmi(result);

    // Plan SC: 히스토리 localStorage 저장
    const newEntry = {
      bmi: result,
      category: getCategory(result).label,
      unit,
      height,
      weight,
      date: new Date().toLocaleDateString('ko-KR'),
    };
    const newHistory = [newEntry, ...history].slice(0, 5);
    setHistory(newHistory);
    localStorage.setItem('bmi-history', JSON.stringify(newHistory));
  };

  const handleClearHistory = () => {
    setHistory([]);
    localStorage.removeItem('bmi-history');
  };

  const category = bmi !== null ? getCategory(bmi) : null;

  return (
    <div>
      <Header />
      <main style={styles.main}>
        <div style={styles.card}>
          <UnitToggle unit={unit} onToggle={handleUnitToggle} />
          <InputForm
            unit={unit}
            height={height}
            weight={weight}
            onHeightChange={setHeight}
            onWeightChange={setWeight}
            onCalculate={handleCalculate}
          />
          <ResultCard bmi={bmi} category={category} />
          <BmiGauge bmi={bmi} />
          <IdealWeight height={height} unit={unit} />
        </div>
        <History history={history} onClear={handleClearHistory} />
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  main: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '30px 20px',
  },
  card: {
    background: '#fff',
    borderRadius: '16px',
    padding: '28px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    marginBottom: '24px',
  },
};

export default App;
