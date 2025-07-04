import * as React from 'react';
import type { JSX } from 'react';
import { useTranslations } from '@/i18n/utils';
import { languages } from '@/i18n/ui';

function getLangFromPath(): 'en' | 'es' {
  if (typeof window === 'undefined') return 'en';
  const [, lang] = window.location.pathname.split('/');
  return lang in languages ? (lang as 'en' | 'es') : 'en';
}

type TranslationKey =
  | 'scrollspy.about'
  | 'scrollspy.experience'
  | 'scrollspy.projects'
  | 'layout.role'
  | 'layout.description';

type TransTextProps = {
  translationKey: TranslationKey;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export default function TransText({ translationKey, className = '', as = 'p' }: TransTextProps) {
  const [lang, setLang] = React.useState<'en' | 'es'>('en');
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

  const Tag = as;
  return <Tag className={className}>{t(translationKey)}</Tag>;
}
