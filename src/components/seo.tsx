import React from 'react';
import { Helmet } from 'react-helmet';

interface SeoProps {
  title: string;
  description: string;
  url: string;
  lang?: string;
  keywords?: Array<string>;
  siteName: string;
  imageUrl: string;
  imageAlt: string;
}

const Seo = ({
  title,
  description,
  url,
  lang,
  keywords,
  siteName,
  imageUrl,
  imageAlt,
}: SeoProps) => {
  const SITE_BASE_URL = process.env.SITE_BASE_URL;
  const fullLinkKr = `${SITE_BASE_URL}${url}`;
  const fullLinkEn = `${SITE_BASE_URL}${url}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          name: 'keywords',
          content: keywords,
        },
        {
          property: 'og:site_name',
          content: siteName,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: `${SITE_BASE_URL}${url}`,
        },
        {
          property: 'og:image',
          content: `${SITE_BASE_URL}${imageUrl}`,
        },
        {
          property: 'og:image:alt',
          content: imageAlt,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:url',
          content: `${SITE_BASE_URL}${url}`,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
        {
          name: 'twitter:image',
          content: `${SITE_BASE_URL}${imageUrl}`,
        },
        {
          name: 'twitter:site',
          content: siteName || '',
        },
        {
          name: 'twitter:creator',
          content: 'twitter account',
        },
        {
          name: 'msapplication-TileColor',
          content: '#ffffff',
        },
        {
          name: 'msapplication-TileImage',
          content: `${SITE_BASE_URL}/favicon/android-chrome-192x192.png`,
        },
        {
          name: 'google-site-verification',
          content: 'set google site verification key',
        },
        {
          name: 'naver-site-verification',
          content: 'set naver site verification key',
        },
      ]}
    >
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="/favicon/android-chrome-512x512.png"
      />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      {/*<link rel="canonical" href={`${SITE_BASE_URL}${url}`} />*/}
      <link rel="alternate" href={fullLinkKr} hrefLang="ko-kr" />
      <link rel="alternate" href={fullLinkEn} hrefLang="en-us" />
      <link rel="alternate" href={fullLinkEn} hrefLang="en-ca" />
      <link rel="alternate" href={fullLinkEn} hrefLang="en-gb" />
      <link rel="alternate" href={fullLinkEn} hrefLang="en-ie" />
      <link rel="alternate" href={fullLinkEn} hrefLang="en-de" />
      <link rel="alternate" href={fullLinkEn} hrefLang="en-fr" />
      <link rel="alternate" href={fullLinkEn} hrefLang="en-it" />
      <link rel="alternate" href={fullLinkEn} hrefLang="en-au" />
      <link rel="alternate" href={fullLinkEn} hrefLang="en-nz" />
      <link rel="alternate" href={fullLinkEn} hrefLang="en-hk" />
      <link rel="alternate" href={fullLinkEn} hrefLang="en-sg" />
      <link rel="alternate" href={fullLinkEn} hrefLang="en-my" />
      <link rel="alternate" href={fullLinkEn} hrefLang="x-default" />
      {/*<script type="application/ld+json">{JSON.stringify(ldJsonSchema)}</script>*/}
    </Helmet>
  );
};

export default Seo;
