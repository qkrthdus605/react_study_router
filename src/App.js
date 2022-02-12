import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './components/NewsPage';

const App = () => {
  // 라우터 설정
  // 경로는 '/카테고리명' 으로 
  // '/'경로는 전체 카테고리를 나타내므로 뒤의 카테고리명은 선택적 => ? (물음표) 사용 
  return <Route path='/:category?' component={NewsPage} /> 
};

export default App;
