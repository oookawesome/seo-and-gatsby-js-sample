# GatsbyJS

## 개요

리액트 기반의 정적 사이트 생성기 (Static Site Generator)

## 어디에 쓰는 가

- 주로 블로그, 홈페이지, 포트폴리오
- 검색엔진에 표시
- Example
    - [뱅크 샐러드 블로그](https://blog.banksalad.com/tech/)
    - [당근 마켓 블로그](https://team.daangn.com/)

## 장점

1. SEO에 유리
2. 서버 없이 동작 가능 (빌드 타임 이후에 Pure한 HTML/CSS/JS가 나옴)
3. 다양한 플러그인과 레퍼런스
4. 빠른 페이지로드 속도
5. CMS연동
6. SSR, CSR 섞어서 사용 가능

## 단점

1. 빌드 시간이 오래걸림
2. Gatsby Ecosystem에 의존적임 & 플러그인 버그
3. 개발시-빌드시 output이 다른 경우 발생

## 핵심 컨셉

https://www.gatsbyjs.com/docs/conceptual/

### GraphQL

GraphQL을 이용해 리액트 컴포넌트의 데이터를 로딩

### Build

__빌드 시, 전체 페이지의 전체 데이터를 전부 가져옴__

- content : file, markdown, db, cms, external api...
  ```
  site-data.yml
  
  site:
    title: Home
    description: Gatsby tips
  ```
- build : 코드 컴파일해서 필요한 데이터 가져와서 GraphQL 스키마에 맞도록 데이터 정제
  ```
  src/pages/homepage.js
  
  const query = graphql`
    query HomePageQuery {
      site {
        title
        description
      }
    }
  `
  ```
- data : data layer에 graphql 요청에 일치하는 데이터를 저장
  - ex. public/page-data/homepage/page-data.json
  ```
  GraphQL Response
  
  data: {
    site: {
      title: "Home"
      description: "Gatsby tips"
    }
  }
  ```
- view : graphQL 응답을 기반으로 화면에 데이터를 표시
  ```
  src/pages/homepage.js
  
  export ({ data }) => (
    <div>
      <h1>{data.site.title}</h1>
      {data.site.description}
    </div>
  )
  ```

### 이미지 최적화

다양한 이미지 최적화 기능을 제공

1. 불필요 이미지에 대한 지연 로딩 자동 감지 및 지연로딩 실행
2. 포지션 홀딩을 통한 browser reflow 방지 (*browser reflow : 이미지 로딩으로 인한 텍스트 밀림)
3. 점진적인 이미지 변환 제공
4. 이미지 사이즈별 자르기 & 압축 제공
5. 반응형 사이즈별로 이미지 생성

### 데이터 프리 로딩

페이지 로드 성능 향상을 위해 필요한 페이지 리소스를 사전에 페이지 방문전에 로딩함.

---

## 참고 페이지

- [개츠비 이미지 처리방식](https://jeonghwan-kim.github.io/dev/2020/08/19/gatsby-image.html)
