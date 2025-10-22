"use client";
import AtomText from "@/components/atom/AtomText";
import { useI18n } from "@/hooks/usei18n";
import { Heros } from "@/components/templates/GuzarsHero";
export default function AboutPage() {
  const { t } = useI18n();

  return (
    <>
      <Heros.about />
      
    </>
  );
}
