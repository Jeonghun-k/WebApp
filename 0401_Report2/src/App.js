/* App.js */
import React, { useState } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import TravelList from './components/TravelList';
import Footer from './components/Footer';

// 여행지 데이터
const destinations = [
  {
    id: 1,
    name: '파리, 프랑스',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80',
    description: '에펠탑과 루브르 박물관이 있는 예술과 낭만의 도시.',
    season: '봄, 가을',
    category: '문화',
    continent: '유럽',
  },
  {
    id: 2,
    name: '로마, 이탈리아',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=80',
    description: '콜로세움과 바티칸이 살아있는 역사의 도시.',
    season: '봄, 가을',
    category: '역사',
    continent: '유럽',
  },
  {
    id: 3,
    name: '발리, 인도네시아',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80',
    description: '에메랄드빛 바다와 힌두 사원이 어우러진 휴양지.',
    season: '여름',
    category: '휴양',
    continent: '아시아',
  },
  {
    id: 4,
    name: '도쿄, 일본',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80',
    description: '전통과 첨단이 공존하는 매력적인 도시.',
    season: '봄, 가을',
    category: '도시',
    continent: '아시아',
  },
  {
    id: 5,
    name: '시드니, 호주',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&q=80',
    description: '오페라하우스와 하버브리지, 아름다운 해변의 도시.',
    season: '여름 (12~2월)',
    category: '도시',
    continent: '오세아니아',
  },
  {
    id: 6,
    name: '뉴욕, 미국',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&q=80',
    description: '타임스스퀘어와 브로드웨이, 세계 문화의 중심지.',
    season: '봄, 가을',
    category: '도시',
    continent: '아메리카',
  },
  {
    id: 7,
    name: '교토, 일본',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=80',
    description: '천 년 고도의 사찰과 게이샤 문화가 살아있는 곳.',
    season: '봄, 가을',
    category: '역사',
    continent: '아시아',
  },
  {
    id: 8,
    name: '제주도, 한국',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&q=80',
    description: '한라산과 오름, 맑은 바다가 있는 자연의 섬.',
    season: '봄, 여름',
    category: '자연',
    continent: '아시아',
  },
  {
    id: 9,
    name: '바르셀로나, 스페인',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&q=80',
    description: '가우디 건축과 지중해의 태양이 눈부신 예술 도시.',
    season: '여름, 가을',
    category: '문화',
    continent: '유럽',
  },
  {
    id: 10,
    name: '페루, 마추픽추',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400&q=80',
    description: '안데스산맥 위에 펼쳐진 신비로운 잉카 문명의 유산.',
    season: '봄 (5~10월)',
    category: '모험',
    continent: '아메리카',
  },
  {
    id: 11,
    name: '뉴질랜드, 퀸스타운',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&q=80',
    description: '번지점프 발상지, 피요르드랜드와 함께하는 액티비티 천국.',
    season: '여름 (12~2월)',
    category: '모험',
    continent: '오세아니아',
  },
  {
    id: 12,
    name: '홍콩',
    image: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=400&q=80',
    description: '야경과 딤섬, 다채로운 음식 문화가 매력적인 도시.',
    season: '가을, 겨울',
    category: '미식',
    continent: '아시아',
  },
];

const CATEGORIES = ['전체', '문화', '역사', '자연', '휴양', '미식', '도시', '모험'];
const CONTINENTS = ['전체', '아시아', '유럽', '오세아니아', '아메리카'];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedContinent, setSelectedContinent] = useState('전체');

  const filtered = destinations.filter((dest) => {
    const categoryMatch = selectedCategory === '전체' || dest.category === selectedCategory;
    const continentMatch = selectedContinent === '전체' || dest.continent === selectedContinent;
    return categoryMatch && continentMatch;
  });

  return (
    <div>
      <Header title="✈ 여행지 추천" subtitle="카테고리와 대륙별로 나에게 맞는 여행지를 찾아보세요" />

      <main style={styles.main}>
        <div style={styles.filterSection}>
          <FilterBar
            label="테마"
            filters={CATEGORIES}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <FilterBar
            label="대륙"
            filters={CONTINENTS}
            selected={selectedContinent}
            onSelect={setSelectedContinent}
          />
          <p style={styles.count}>총 {filtered.length}개의 여행지</p>
        </div>

        <TravelList destinations={filtered} />
      </main>

      <Footer />
    </div>
  );
};

const styles = {
  main: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '30px 20px',
  },
  filterSection: {
    background: '#fff',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '24px',
    boxShadow: '0 1px 6px rgba(0,0,0,0.08)',
  },
  count: {
    marginTop: '8px',
    fontSize: '0.85rem',
    color: '#888',
  },
};

export default App;
