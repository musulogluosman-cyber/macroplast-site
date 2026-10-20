"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  lang: string;
  switchLanguage: (newLang: string) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'tr',
  switchLanguage: () => {},
  t: (path) => path,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState('tr');
  const [translations, setTranslations] = useState<Record<string, any>>({});

  useEffect(() => {
    const savedLang = localStorage.getItem('site_lang') || 'tr';
    setLang(savedLang);
    loadTranslations(savedLang);
  }, []);

  const loadTranslations = async (targetLang: string) => {
    try {
      const res = await fetch(`/locales/${targetLang}.json`);
      const data = await res.json();
      setTranslations(data);
    } catch (err) {
      console.error('Dil dosyası yüklenemedi:', err);
    }
  };

  const switchLanguage = (newLang: string) => {
    setLang(newLang);
    localStorage.setItem('site_lang', newLang);
    loadTranslations(newLang);
  };

  const t = (path: string) => {
    return path.split('.').reduce((obj, key) => obj?.[key], translations) as unknown as string || path;
  };

  return (
    <LanguageContext.Provider value={{ lang, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
