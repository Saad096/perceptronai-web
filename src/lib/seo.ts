import type { Metadata } from "next";
import { publicEnv } from "./env";

const defaultDescription =
  "QentrixAI is a hybrid AI services and product studio. We build GenAI, Agentic AI, RAG, Voice AI, Computer Vision, NLP, Edge AI, Responsible AI, and Blockchain × AI systems — engineered for production, deployed on cloud or on-prem.";

export const defaultKeywords = [
  "AI development company",
  "Generative AI development services",
  "Agentic AI solutions",
  "RAG development company",
  "AI automation agency",
  "Voice AI solutions",
  "Computer vision development",
  "NLP development services",
  "Edge AI development",
  "Responsible AI consulting",
  "Blockchain development company",
  "AI x Blockchain solutions",
  "FinTech AI",
  "HealthTech AI",
  "InsureTech AI",
  "AI SaaS development",
  "AI consulting Pakistan",
  "AI product development company",
  "QentrixAI",
];

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description = defaultDescription,
  path = "/",
  image = "/og.png",
  keywords,
}: SeoInput = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${publicEnv.siteName}`
    : `${publicEnv.siteName} — AI Products, Agents & Automation, Engineered for Production`;
  const url = `${publicEnv.siteUrl.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;

  return {
    metadataBase: new URL(publicEnv.siteUrl),
    title: fullTitle,
    description,
    keywords: keywords ?? defaultKeywords,
    alternates: { canonical: url },
    authors: [{ name: publicEnv.siteName, url: publicEnv.siteUrl }],
    creator: publicEnv.siteName,
    publisher: publicEnv.siteName,
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: publicEnv.siteName,
      images: [{ url: image, width: 1200, height: 630, alt: publicEnv.siteName }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@Saad_Alam106",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    icons: {
      icon: [
        { url: "/logo/qentrixai-logo.png", type: "image/png" },
      ],
      apple: "/logo/qentrixai-logo.png",
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: publicEnv.siteName,
    url: publicEnv.siteUrl,
    logo: `${publicEnv.siteUrl}/logo/qentrixai-logo.png`,
    description: defaultDescription,
    foundingDate: "2024",
    email: publicEnv.profile.email,
    telephone: publicEnv.profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    sameAs: [
      publicEnv.socials.linkedin,
      publicEnv.socials.github,
      publicEnv.socials.x,
      publicEnv.socials.upwork,
    ].filter(Boolean),
  };
}
