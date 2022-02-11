import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import styled from 'styled-components';
import axios from 'axios';

// 뉴스 리스트

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
`;

const NewsList = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      // props로 받은 카테고리별 api를 받아오도록 쿼리값 설정
      // 쿼리값이 all이면 공백, all이 아니면 &category=카테고리명
      const response = await axios.get(
        '쿼리값을 포함한 api 주소',
      );
      setArticles(response.data.articles);
    };
    fetchData();
    // category 값이 바뀔 때마다 뉴스를 불러와야 하기 때문에 두 번째 파라미터 필요
  }, []); 

  // 아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }
  // articles 값이 유효할 때
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={setArticles.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;