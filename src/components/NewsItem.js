import React from 'react';
import styled from 'styled-components';

// 뉴스 리스트에 뜨는 뉴스 아이템들

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = () => {
  // article이라는 객체를 props로 통째로 받아오기
  // 그 중 우리가 사용할 속성들 title, description, url, urlToImage
  
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          {/* 썸네일 url이미지, a태그/img태그 */}
        </div>
      )}
      <div className="contents">
        <h2>
          {/* 제목 및 링크, a태그 */}
        </h2>
        {/* 내용, p태그 */}
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;