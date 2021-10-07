import React from 'react';
import styled from 'styled-components';
import { FluidObject } from 'gatsby-image';
import CommonImage from '@/components/common-image';

const S = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 720px) {
      flex-wrap: wrap;
    }
  `,
  ContentsWrapper: styled.div<{ maxWidth?: string }>`
    max-width: ${({ maxWidth }) => maxWidth || '50%'};

    @media (max-width: 720px) {
      max-width: 100%;
    }
  `,
  Title: styled.h2``,
  SubTitle: styled.h3``,
  Description: styled.p``,
  ImageWrapper: styled.div`
    max-width: 800px;
    width: 100%;
    margin: 5vw;
  `,
};

export interface SectionProps {
  title?: string;
  subTitle?: string;
  descriptions: Array<string>;
  imageFluid?: FluidObject;
  imageAlt?: string;
}

const Section = ({ title, subTitle, descriptions, imageFluid, imageAlt }: SectionProps) => {
  return (
    <S.Wrapper>
      <S.ContentsWrapper maxWidth={imageFluid ? '50%' : '100%'}>
        {title && <S.Title>{title}</S.Title>}
        {subTitle && <S.SubTitle>{subTitle}</S.SubTitle>}
        {descriptions.map((description) => (
          <S.Description>{description}</S.Description>
        ))}
      </S.ContentsWrapper>
      <>
        {imageFluid && imageAlt && (
          <S.ImageWrapper>
            <CommonImage fluid={imageFluid} alt={imageAlt} />
          </S.ImageWrapper>
        )}
      </>
    </S.Wrapper>
  );
};

export default Section;
