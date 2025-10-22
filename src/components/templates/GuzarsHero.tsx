"use client";
import {CenteredBrandContainer} from "@/components/molecule/MoleculeContainer";
import AtomText from "@/components/atom/AtomText";
import { useI18n } from "@/hooks/usei18n";
import { OrganismHero } from "../organism/OrganismHero";


const GuzarsHeroAbout = () => {
    const {t} = useI18n();
    return (OrganismHero({text: t('headers.about') as string}));
}

const Heros = {
    about: GuzarsHeroAbout
};

export {Heros};