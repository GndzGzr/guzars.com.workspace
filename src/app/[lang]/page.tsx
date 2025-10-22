"use client";

import { useI18n } from '@/hooks/usei18n';

export default function Home() {
  const { t, currentLanguage, changeLanguage, availableLanguages, getLanguageDisplayName
   } = useI18n();

  return (
    <div>
      {/* Basic translation */}
      <h1>{t('title') as string}</h1>
      <button>{t('contactMe') as string}</button>
      
      {/* Nested translation */}
      <nav>
        <a href="/about">{t('headers.about') as string}</a>
        <a href="/contact">{t('headers.contact') as string}</a>
        <a href="/portfolio">{t('headers.portfolio') as string}</a>
      </nav>
      
      {/* Language switcher */}
      <select 
        value={currentLanguage} 
        onChange={(e) => changeLanguage(e.target.value as 'en' | 'tr')}
      >
        {availableLanguages.map(lang => (
          <option key={lang} value={lang}>
            {getLanguageDisplayName(lang)}
          </option>
        ))}
      </select>
      
      {/* Display current language */}
      <p>Current language: {currentLanguage}</p>
    </div>
  );
}
