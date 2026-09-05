"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { useLanguage } from "@/components/language-provider";
import { languagePath } from "@/lib/seo";

export default function LocalizedLink({ href, ...props }: ComponentProps<typeof NextLink>) {
  const { locale } = useLanguage();
  if (typeof href !== "string" || !href.startsWith("/") || href.startsWith("//")) return <NextLink href={href} {...props} />;
  const split = href.search(/[?#]/);
  const path = split < 0 ? href : href.slice(0, split);
  const suffix = split < 0 ? "" : href.slice(split);
  const localized = path === "/" || /^\/(ar(?:\/|$)|about(?:\/|$)|services\/|engineering$|solutions(?:\/|$)|insights(?:\/|$)|locations\/)/.test(path);
  return <NextLink href={localized ? `${languagePath(path, locale)}${suffix}` : href} {...props} />;
}
