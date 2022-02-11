import React from 'react';
import NewsCategory from './NewsCategory';
import NewsList from './NewsList';

// 카테고리 + 뉴스 리스트

const NewsPage = () => {
  // 카테고리가 선택되지 않으면 기본값으로 'all'을 가짐
  // const category

  return (
    <>
      <NewsCategory />
      {/* category에 따라 NewsList 컴포넌트에 해당 카테고리의 뉴스들이 보여질 수 있도록 */}
      <NewsList />
    </>
  );
};

export default NewsPage;