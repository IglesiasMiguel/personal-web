import React, { useEffect, useState } from 'react';
import { useTranslations } from '@/i18n/utils';
import { languages } from '@/i18n/ui';

function getLangFromPath(): 'en' | 'es' {
  if (typeof window === 'undefined') return 'en'; // Safe fallback for SSR
  const [, lang] = window.location.pathname.split('/');
  return lang in languages ? (lang as 'en' | 'es') : 'en';
}

export default function ScrollSpy() {
  const [lang, setLang] = React.useState<'en' | 'es'>('en'); // Default to 'en'
  const t = useTranslations(lang);

  React.useEffect(() => {
    setLang(getLangFromPath());
    const handle = () => setLang(getLangFromPath());
    window.addEventListener('popstate', handle);
    window.addEventListener('pushstate', handle);
    window.addEventListener('replacestate', handle);
    return () => {
      window.removeEventListener('popstate', handle);
      window.removeEventListener('pushstate', handle);
      window.removeEventListener('replacestate', handle);
    };
  }, []);

  const sections = [
    { id: 'about', label: t('scrollspy.about') },
    { id: 'experience', label: t('scrollspy.experience') },
    { id: 'projects', label: t('scrollspy.projects') },
  ];

  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const handler = () => {
      let current = sections[0].id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && window.scrollY + 100 >= el.offsetTop) {
          current = section.id;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handler);
    handler();

    return () => window.removeEventListener('scroll', handler);
  }, [sections]);

  return (
    <nav className="flex flex-col gap-4">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById(section.id);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className={`group flex items-center gap-2 transition-all duration-200 ease-in-out 
            ${
              active === section.id ? 'font-bold text-primary' : 'text-accent hover:text-foreground'
            }`}
        >
          <span
            className={`block h-0.5 transition-all duration-200 ease-in-out 
              ${
                active === section.id
                  ? 'w-12 bg-accent'
                  : 'w-6 bg-muted group-hover:w-9 group-hover:bg-accent'
              }`}
          ></span>
          {section.label}
        </a>
      ))}
    </nav>
  );
}
