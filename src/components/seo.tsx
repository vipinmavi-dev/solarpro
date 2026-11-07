import { Helmet } from "react-helmet-async";

const SITE_NAME = "SolarPro";
const SITE_URL = "https://yourdomain.com";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export default function SEO({
  title,
  description,
  path,
  image = "/images/solar-social-cover.jpg",
  keywords = [],
  noIndex = false,
}: SEOProps) {
  const canonicalUrl = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}

      <link rel="canonical" href={canonicalUrl} />

      <meta
        name="robots"
        content={
          noIndex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large"
        }
      />

      <meta name="theme-color" content="#10243A" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
