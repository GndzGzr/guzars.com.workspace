"use client";

import { useRouter, usePathname, useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// Import locale files
import enCommon from '../locales/en/common.json';
import trCommon from '../locales/tr/common.json';

// Define the supported languages
export type SupportedLanguage = 'en' | 'tr';

// Initialize i18next
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          common: enCommon,
        },
        tr: {
          common: trCommon,
        },
      },
      lng: 'en', // default language
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      ns: ['common'],
      defaultNS: 'common',
    });
}

export const useI18n = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const { t, i18n: i18nInstance } = useTranslation('common');

  // Get current language from params or i18n instance
  const langFromParams = params?.lang as string;
  const currentLanguage = (
    langFromParams && ['en', 'tr'].includes(langFromParams) 
      ? langFromParams 
      : i18nInstance.language
  ) as SupportedLanguage;

  // Change language function
  const changeLanguage = useCallback(
    async (language: SupportedLanguage) => {
      try {
        // Change language in i18n
        await i18nInstance.changeLanguage(language);
        
        // Navigate to the new locale route
        // Replace the current language segment in pathname
        const segments = pathname.split('/').filter(Boolean);
        const newPathSegments = segments[0] && ['en', 'tr'].includes(segments[0]) 
          ? [language, ...segments.slice(1)]
          : [language, ...segments];
        
        const newPath = `/${newPathSegments.join('/')}`;
        router.push(newPath);
      } catch (error) {
        console.error('Failed to change language:', error);
      }
    },
    [i18nInstance, router, pathname]
  );

  // Get available languages
  const availableLanguages: SupportedLanguage[] = ['en', 'tr'];

  // Check if a language is supported
  const isLanguageSupported = useCallback(
    (language: string): language is SupportedLanguage => {
      return availableLanguages.includes(language as SupportedLanguage);
    },
    [availableLanguages]
  );

  // Get language display names
  const getLanguageDisplayName = useCallback((language: SupportedLanguage): string => {
    const displayNames = {
      en: 'English',
      tr: 'Türkçe',
    };
    return displayNames[language];
  }, []);

  // Sync pathname locale with i18n
  useEffect(() => {
    if (currentLanguage && currentLanguage !== i18nInstance.language) {
      i18nInstance.changeLanguage(currentLanguage);
    }
  }, [currentLanguage, i18nInstance]);

  // Translation function with namespace support
  const translate = useCallback(
    (key: string, options?: any) => {
      return t(key, options);
    },
    [t]
  );

  // Get nested translation keys (for complex objects)
  const getNestedTranslation = useCallback(
    (keyPath: string) => {
      const keys = keyPath.split('.');
      let result: any = i18nInstance.getResourceBundle(currentLanguage, 'common');
      
      for (const key of keys) {
        if (result && typeof result === 'object' && key in result) {
          result = result[key];
        } else {
          return keyPath; // Return the key if not found
        }
      }
      
      return typeof result === 'string' ? result : keyPath;
    },
    [currentLanguage, i18nInstance]
  );

  return {
    // Translation functions
    t: translate,
    translate,
    getNestedTranslation,
    
    // Language management
    currentLanguage,
    changeLanguage,
    availableLanguages,
    isLanguageSupported,
    getLanguageDisplayName,
    
    // i18n instance for advanced usage
    i18n: i18nInstance,
    
    // Ready state
    isReady: i18nInstance.isInitialized,
  };
};

// Export a simple hook for just translation
export const useTranslate = () => {
  const { t } = useI18n();
  return t;
};

