// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Vicky Balloon Decoration | Best Balloon Decorator in Patna",
  description = "Vicky Balloon Decoration is Patna's top-rated birthday planner and balloon decorator. Specializing in creative, affordable decorations for birthdays, honeymoon, anniversaries, engagements, and more.",
  image = "https://vickyballoondecoration.com/og-image.jpg",
  url = "https://vickyballoondecoration.com",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;