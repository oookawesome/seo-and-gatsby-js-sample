import React from 'react';
import Gnb from '@/components/gnb';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div``,
  GnbWrapper: styled.div`
    height: 70px;
  `,
  ContentsWrapper: styled.div`
    overflow: auto;
    height: 90vh;
    padding: 0 5vw;
  `,
};

interface LayoutProps {
  children?: any;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Wrapper>
      <S.GnbWrapper>
        <Gnb />
      </S.GnbWrapper>
      <S.ContentsWrapper>{children}</S.ContentsWrapper>
    </S.Wrapper>
  );
};

export default Layout;
