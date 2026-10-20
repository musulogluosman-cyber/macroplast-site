import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('tr');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    // Tarayıcı hafızasındaki dili kontrol et
    const savedLang = localStorage.getItem('site_lang') || 'tr';
    setLang(savedLang);
    loadTranslations(savedLang);
  }, []);

  const loadTranslations = async (targetLang) => {
    try {
      const res = await fetch(`/locales/${targetLang}.json`);
      const data = await res.json();
      setTranslations(data);
    } catch (err) {
      console.error('Dil dosyası yüklenemedi:', err);
    }
  };

  const switchLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem('site_lang', newLang);
    loadTranslations(newLang);
  };

  // Metin çekme yardımcısı (Örn: t('nav.home'))
  const t = (path) => {
    return path.split('.').reduce((obj, key) => obj?.[key], translations) || path;
  };

  return (
    <LanguageContext.Provider value={{ lang, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
