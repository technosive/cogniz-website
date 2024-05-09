import siteConfig from "data/config";
import { NextSeo, NextSeoProps } from "next-seo";
import React from "react";

export interface SEOProps extends NextSeoProps {}

export const SEO = ({ title, description, canonical, ...props }: SEOProps) => (
  <NextSeo
    title={title}
    description={description}
    openGraph={{
      ...siteConfig.seo.openGraph,
      title,
      description,
      url: siteConfig.seo.openGraph?.url || "",
      images: siteConfig.seo.openGraph?.images || [],
    }}
    titleTemplate={siteConfig.seo.titleTemplate}
    twitter={siteConfig.seo.twitter}
    noindex={false}
    nofollow={false}
    canonical={canonical}
    {...props}
  />
);
