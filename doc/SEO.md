# SEO (Search engine optimization, 검색 엔진 최적화)

## SEO란?

웹사이트를 웹 검색 크롤러가 잘 읽어갈 수 있도록 만들고, 각 페이지가 트래픽 유입을 일으킬 수 있는 주제로 색인될 수 있도록 하며, 검색 결과에서 높은 랭킹을 얻을 수 있도록 페이지별로 태깅과 콘텐츠를 최적화하는
것

## SEO의 목표

구글, 네이버 등 검색 엔진 노출을 통한 마케팅 효과 향상

## 중요 가이드라인

SEO 업체와의 협업을 통해, 홈페이지 개편 작업을 진행했는데, 이 과정에서 업체에서 강조한 중요 가이드라인을 요약함. `구글 검색엔진`에 맞춘 내용임

### 컨텐츠 업데이트

꾸준히 주기적으로 신규 페이지를 릴리즈하고 웹 사이트의 컨텐츠를 계속 추가해야함. 구글 Search bot의 경우, 웹 페이지가 계속 개발되고 업데이트되는 것을 확인해야만 색인 주기가 짧아지고, 관련 페이지의 검색
노출 순위를 올림

### HTML head meta tag

페이지 html의 `<head>` 내에 있는 title, description 등의 메타 태그는 _반드시_ 설정해야 함. 우리 제품의 중요 키워드를 포함하도록 구성

- __title__ : __현재 페이지 제목__
- __description__ : __현재 페이지 설명__
- __sitemap__ : __웹사이트 sitemap.xml의 주소__
- og : open graph tag, SNS에 공유할 때, 이 페이지를 어떻게 표시할 지 명시
    - og:title
    - og:description
    - og:url
    - og:image : 썸네일 이미지 주소
    - og:type
    - og:site_name
- twitter : 트위터 공유 시, 이 페이지를 어떻게 표시할 지 명시
    - twitter:card
    - twitter:url
    - twitter:title
    - twitter:description
    - twitter:image
    - twitter:site
    - twitter:creator

### 구조화된 페이지 구성

div와 같은 일반 element로만 페이지를 구성해선 안되며, 각각 html요소별 특성에 맞는 타입의 태그를 설정해야 함

- __페이지 제목을 의미하는 h1태그는 페이지 내에 반드시 1개 포함해야 하고, 중복되지 않은 고유한 제목으로 설정__
- 소제목은 컨텐츠 구성에 맞춰 h2, h3 태그 등으로 설정
- 본문은 p 태그로 설정
- 하이퍼 링크는 a 태그로 설정
- 이미지는 img, picture 태그로 설정

### 텍스트 컨텐츠

- 글자로 표현되는 데이터는 html 내에 모두 텍스트로 설정
- 텍스트 컨텐츠는 약 800자 이상의 일정 수준의 분량을 가지고 있어야 함
- 우리 제품의 중요 키워드 포함하도록 구성
- 중복된 컨텐츠가 없도록 해야 함

### 모바일 친화적인 페이지

페이지에 반응형 디자인을 적용해 모바일 친화적인 페이지를 만들도록 해야 함

### 어뷰징 시도

SEO를 이유로 구글 Search bot을 기술적으로 속이려는 시도는 _절대로_ 해선 안됨. Search bot의 성능은 나날이 개선되고 있어, 기술적으로 랭크 점수를 올리거나 의도적으로 검색 키워드를 노출하는 것은
불가능함. 어뷰징이 감지되는 경우 페이지 점수 감점요인으로 작용함 (ex. 보이지 않게 숨겨놓은 페이지 제목, 본문 등)

### Search console 모니터링

사이트맵을 제출했다고 해도, 바로 엔진에 색인되지 않을 수 있음. 구글 검색도구를 통해, 페이지가 제대로 색인이 되었는지, 페이지가 제대로 노출이 되고 있는 지 주기적인 확인이 필요함. 색인이 제대로 되지 않는
경우, 강제 색인 요청 등도 필요함

---

## 참고 페이지

- [구글 검색엔진 최적화 가이드라인](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [SEO score 측정 사이트](https://www.seobility.net)
- [SEO에 대한 오해와 진실](https://www.twinword.co.kr/blog/truth-and-misunderstanding-about-seo/)


