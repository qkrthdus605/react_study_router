import React from 'react';
import styled from 'styled-components';

// 상단 카테고리

// 카테고리 목록
const categories = [
  {
    name: 'all',    // 실제 카테고리
    text: '전체보기', // 렌더링할 때 사용할 한글 카테고리
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;
const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }
  & + & {
    margin-left: 1rem;
  }
`;

const NewsCategories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        // 카테고리 배열 내의 객체들의 한글로된 카테고리와 실제 카테고리 값 연결
        // 브라우저에는 한글 카테고리 이름이 표기되도록
        // <Category></Category>
      ))}
    </CategoriesBlock>
  );
};
export default NewsCategories;