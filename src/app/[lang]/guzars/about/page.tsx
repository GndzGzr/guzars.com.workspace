"use client";
import AtomText from "@/components/atom/AtomText";
import { useI18n } from "@/hooks/usei18n";
import { PageHeroTemplate } from "@/components/templates/GuzarsHero";
import AboutPage from "@/components/pages/AboutPage";
export default function About() {
  const { t } = useI18n();

  return (
   <AboutPage />
  );
}
