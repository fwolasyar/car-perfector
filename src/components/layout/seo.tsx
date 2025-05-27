
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  children?: React.ReactNode;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Car Detective',
  description = 'Get accurate valuations for your vehicle with advanced AI technology',
  image = '/images/og-image.jpg',
  url = typeof window !== 'undefined' ? window.location.href : '',
  twitterCard = 'summary_large_image',
  children,
}) => {
  const siteTitle = title ? `${title} | Car Detective` : 'Car Detective';
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {children}
    </Helmet>
  );
};
