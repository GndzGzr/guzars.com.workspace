"use client";
import AtomText from "@/components/atom/AtomText";
import { useI18n } from "@/hooks/usei18n";
import { Heros } from "@/components/templates/GuzarsHero";
import { Grids } from "../templates/GuzarsGrid";
import SectionHeaderLabel from "../molecule/MoleculeLabel";
export default function AboutPage() {
  const { t } = useI18n();


  return (
    <>
      <div id="about-hero">
        <Heros.about />

      </div>
      <div id="about-timeline">
        <Grids.AboutTimeLine />
      </div>
    </>
  );
}
