import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from '@/components/ui/drawer';
import { languages } from '@/i18n/ui';
import { cn } from '@/lib/utils';

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default function LanguageSelector({
  currentLang,
  className = '',
}: {
  currentLang: string;
  className?: string;
}) {
  const handleChangeLang = (lang: string) => {
    if (lang === 'en') {
      window.location.pathname = '/';
    } else {
      window.location.pathname = `/${lang}/`;
    }
  };

  return (
    <div className={cn(className)}>
      {/* Desktop */}
      <div className="hidden sm:block">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <GlobeIcon className="h-5 w-5" />
              <span>{currentLang.toUpperCase()}</span>
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {Object.entries(languages).map(([lang, label]) => (
              <DropdownMenuItem
                key={lang}
                className="flex items-center justify-between"
                onClick={() => handleChangeLang(lang)}
              >
                <span>{label}</span>
                {lang === currentLang && <CheckIcon className="h-5 w-5" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Mobile */}
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2 sm:hidden">
            <GlobeIcon className="h-5 w-5" />
            <span>{currentLang.toUpperCase()}</span>
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="grid gap-4 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Select Language</h3>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <XIcon className="h-5 w-5" />
                </Button>
              </DrawerClose>
            </div>
            <div className="grid gap-2">
              {Object.entries(languages).map(([lang, label]) => (
                <Button
                  key={lang}
                  variant="ghost"
                  className="justify-start gap-2"
                  onClick={() => handleChangeLang(lang)}
                >
                  <GlobeIcon className="h-5 w-5" />
                  <span>{label}</span>
                  {lang === currentLang && <CheckIcon className="h-5 w-5 ml-auto" />}
                </Button>
              ))}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
