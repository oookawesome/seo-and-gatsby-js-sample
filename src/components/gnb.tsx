import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const S = {
  GnbWrapper: styled.div`
    display: flex;
    gap: 20px;
    position: fixed;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: inherit;
    background-color: beige;
  `,
  GnbItemWrapper: styled.div`
    width: 100px;
    padding: 10px;
    background-color: antiquewhite;
    text-align: center;
    border-radius: 4px;
  `,
  GnbItem: styled(Link)`
    display: block;
    text-decoration: none;
  `,
};

interface GnbProps {}

const Gnb = ({}: GnbProps) => {
  return (
    <S.GnbWrapper>
      <S.GnbItemWrapper>
        <S.GnbItem to="/good">Good</S.GnbItem>
      </S.GnbItemWrapper>
      <S.GnbItemWrapper>
        <S.GnbItem to="/bad">Bad</S.GnbItem>
      </S.GnbItemWrapper>
    </S.GnbWrapper>
  );
};

export default Gnb;
