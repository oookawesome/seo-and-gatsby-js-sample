import React from 'react';
import Layout from '@/components/layout';
import styled from 'styled-components';
import Section, { SectionProps } from '@/components/section';

const S = {
  Wrapper: styled.div`
    padding: 0 5vw;
  `,
  BadSection: styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
  `,
  BadSectionContents: styled.div`
    width: 50%;
    max-width: 50%;
  `,
  BadSectionTitle: styled.div``,
  BadSectionDescription: styled.div`
    text-align: center;
  `,
  BadSectionImageWrapper: styled.div`
    padding: 5vw;
  `,
  BadSectionImage: styled.div<{ width: string; height: string; url: string }>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background-image: url(${({ url }) => url});
    background-size: cover;
    border-radius: 10px;
  `,
};

interface BadPageProps {}

const BadPage = ({}: BadPageProps) => {
  const sectionDataList = [
    {
      descriptions: ["성격이 온순한 '천사견'"],
      imageUrl: '/dog1.jpeg',
      imageWidth: '40vw',
      imageHeight: '20vw',
    },
    {
      descriptions: ['누군가 자신을 괴롭히더라도 99번까지는 봐줄 만한 인내심'],
      imageUrl: '/dog2.jpeg',
      imageWidth: '40vw',
      imageHeight: '40vw',
    },
    {
      descriptions: ['다만 여름에 빠지는 털은 상상을 초월'],
      imageUrl: '/dog3.jpg',
      imageWidth: '40vw',
      imageHeight: '40vw',
    },
  ];

  return (
    <Layout>
      <S.Wrapper>
        {sectionDataList.map((sectionData) => (
          <S.BadSection>
            <S.BadSectionContents>
              {sectionData.descriptions.map((desc) => (
                <S.BadSectionDescription>{desc}</S.BadSectionDescription>
              ))}
            </S.BadSectionContents>
            {sectionData.imageUrl && (
              <S.BadSectionImageWrapper>
                <S.BadSectionImage
                  width={sectionData.imageWidth}
                  height={sectionData.imageHeight}
                  url={sectionData.imageUrl}
                />
              </S.BadSectionImageWrapper>
            )}
          </S.BadSection>
        ))}
      </S.Wrapper>
    </Layout>
  );
};

export default BadPage;
