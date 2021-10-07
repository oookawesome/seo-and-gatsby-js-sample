import React from 'react';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import Layout from '@/components/layout';
import Seo from '@/components/seo';
import styled from 'styled-components';
import Section, { SectionProps } from '@/components/section';

const S = {
  Wrapper: styled.div`
    padding: 0 5vw;
  `,
  Title: styled.h1``,
};

const GoodPage = (props: PageProps) => {
  const { dog1, dog2 } = useStaticQuery(
    graphql`
      query getDogImages {
        dog1: file(relativePath: { eq: "dog1.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 725, maxHeight: 483, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        dog2: file(relativePath: { eq: "dog2.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 500, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `,
  );

  const sectionDataList: Array<SectionProps> = [
    {
      title: '개요',
      descriptions: [
        '개의 품종 중 하나로, 원산지는 영국의 스코틀랜드 지역이다.',
        '비슷하게 생긴 래브라도 리트리버가 원형이다.", "이름대로 윤기가 흐르는 크림빛 또는 금빛의 풍성한 털이 가장 큰 특징이며 은은하게 귀티가 흐르는 인상이다. ',
        '마당이 있는 집이 일반적인 미국과 영국, 또한 영국의 직할 속령이었던 아일랜드, 캐나다, 오스트레일리아나 뉴질랜드에서 자주 볼 수 있는 견종이라고 한다.',
        '신장 51~61cm, 체중 25~40kg 정도이다.',
        '대한민국 한정으로는 누렁이, 인절미와 골댕이(=골든 댕댕이)라고도 불린다.',
        "성격이 온순해서 '천사견'이라는 별명도 있다.",
        '온순한 성미와 똑똑한 것으로 인해 맹인 안내견으로도 유명하다.',
      ],
      imageFluid: dog1.childImageSharp.fluid,
      imageAlt: 'golden retriever',
    },
    {
      title: '기본 특성',
      descriptions: [
        '학대, 방임, 공격성을 방치한 훈육 등의 악조건을 겪지 않은 골든 리트리버는 대체로 온화한 성격을 지닌다.',
        '강형욱 훈련사는 골든 리트리버의 온화한 성격에 대해 "100개의 옐로 카드를 가졌고, 한숨 자고 나면 옐로 카드가 전부 회복된다"라고 설명하기도 했다.',
        '누군가 자신을 괴롭히더라도 99번까지는 봐줄 만큼 인내심이 좋다는 뜻.',
        '리트리버는 원래 사냥개 중에서도 총에 맞은 새를 물어오는 것(Retriever)을 목적으로 교배된 견종이다.',
        '당연히 주인이 총을 쏘기 전에 짖거나, 난리를 피우면 새가 날아서 도망갈 테니 주인이 물어오라는 지시를 내릴 때까지 얌전히 명령에 복종하는 게 체질적으로 몸에 밴 견종이다.',
        '다만 엄연한 대형견이자 사냥개임을 주지해야 안전사고를 방지할 수 있다. 자주 일어나는 일은 아니지만 마음만 먹는다면 사람을 해칠 수 있다.',
        "만약 이빨을 드러내거나 그르릉거리는 적대적인 시그널을 보낸다면 '골든 리트리버이니까 위협만 하겠지' 같은 안일한 마음으로 대하지 말고 충분히 물러나야 한다.",
        "'어떻게 하면 이 개를 화나게 할 수 있을까?'라는 고민과 함께, 화난 리트리버가 찍힌 유튜브 동영상이 신기하다며 화제가 될 정도다.",
        '공격성이 지극히 낮아서 먼저 공격을 당해도 자리를 피하고 대부분 반격하지 않는다.',
        '안내견으로서 리트리버 견종이 1순위로 선택되는 것은 그만큼 인내심, 사회성 등이 명백하게 검증되었다는 뜻이다.',
        '가끔 안내견 부적합을 평가받는 경우도 있지만, 보통 대다수의 이유가 너무 친밀하게 굴어서가 1순위 이유라고.',
        '자기는 먹지 않고 아이에게 모두 먹이는 리트리버.',
      ],
      imageFluid: dog2.childImageSharp.fluid,
      imageAlt: 'golden retriever',
    },
    {
      title: '키울 시 주의할 점',
      descriptions: [
        "초보 애견가에게는 추천하기 어려운 품종인데, 앞서 말한 골든 리트리버의 빛나는 장점들은 어디까지나 개 주인이 개 사육에 대한 지식이 어느 정도 있으며, '체계적인 훈련'을 할 준비가 되어 있는 사람일 때 나오는 것이다.",
        '또한 대형견인 만큼 먹고 싸는 문제도 무시할 수 없으며 털빠짐이 심한 것도 유의해야 한다.',
        '먹는 사료의 양은 보통 20Kg 사료를 하루 두 번씩 급양하면 40~45일 전후로 다 떨어진다.',
        '털은 정도의 차이만 있을 뿐 거의 일 년 내내 빠진다고 보면 된다.',
        '국내의 경우, 11월을 넘어 겨울로 접어들면 털은 별로 빠지지 않는 편이다.',
        '다만 여름에 빠지는 털은 상상을 초월한다.',
      ],
    },
    {
      subTitle: '유전병',
      descriptions: [
        '다른 한 가지 단점은 인기 견종인 탓에 근친교배가 일어나 유전병이 있는 개체가 많다는 것이다.',
        '고관절 이형성이 그것인데, 뒷다리의 고관절 하나 이상에서 발생하며 고관절 주변의 연골이나 뼈를 괴사시키는 무서운 질병이다.',
        '유전적으로 타고나는데다 강아지 때는 특별히 판별할 방법도 없고, 한 번 발병하면 막대한 치료비가 드는데다가 완치될 가능성도 매우 낮다.',
      ],
    },
    {
      subTitle: '입질',
      descriptions: [
        '또 다른 단점은 입질(무는 것)이 생각보다 잦을 수 있다는 것이다.',
        "리트리버(retriever)라는 명칭은 '회수하는 자'라는 뜻으로, 본래 수렵견이었다.",
        '사람이 총으로 새 따위를 쏴서 죽이면 그걸 회수하는 개이다. 이 때문에 무는 것을 좋아한다.',
        '물리는 상황도 순해보이는 이미지 때문에 사람들이 초식동물에게처럼 경계심 없이 멋대로 다가가다가 다치는 경우가 매우 많다.',
        '단, 입질 성향 때문에 무는 것이지, 공격 의도를 품고 무는 것은 아니다.',
      ],
    },
  ];
  return (
    <Layout>
      <Seo
        lang="ko"
        title="Golden retriever sample | 골든 리트리버 소개"
        description="골든 리트리버에 대해 소개합니다. 성격이 온순한 천사견 골든 리트리버의 개요와 기본 특성, 주의할 점 등을 알아보세요!"
        imageUrl="/ogImage.jpeg"
        imageAlt="Golden Retriever"
        siteName="golden retriever sample site"
        url="/good"
      />
      <S.Wrapper>
        <S.Title>귀염둥이 천사견 골든 리트리버 소개</S.Title>
        {sectionDataList.map((sectionData) => (
          <Section
            title={sectionData.title}
            subTitle={sectionData.subTitle}
            descriptions={sectionData.descriptions}
            imageFluid={sectionData.imageFluid}
            imageAlt={sectionData.imageAlt}
          />
        ))}
      </S.Wrapper>
    </Layout>
  );
};

export default GoodPage;
