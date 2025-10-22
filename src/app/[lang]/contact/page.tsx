"use client";
import AtomText from "@/components/atom/AtomText";
import { useI18n } from "@/hooks/usei18n";

export default function About() {
  const { t } = useI18n();
     
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <AtomText variant="pageHeading" className="pageHeading">{t('headers.about') as string}</AtomText>
      
    </div>
    );
}