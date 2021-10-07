import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '@/components/layout';
import styled from 'styled-components';

const S = {
  Title: styled.h1`
    padding-top: 40px;
  `,
  Description: styled.p`
  
  `,
};

const Homepage = (props: PageProps) => {
  return (
    <Layout>
      <S.Title>SEO sample homepage</S.Title>
      <S.Description>Good, Bad 버튼을 클릭해서 비교해보세요.</S.Description>
      <S.Description>개발자도구를 열어 head 메타 태그 내용을 확인해보세요.</S.Description>
    </Layout>
  );
};

export default Homepage;
