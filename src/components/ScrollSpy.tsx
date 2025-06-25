import React, { useEffect, useState } from 'react';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

export default function ScrollSpy() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const handler = () => {
      let current = sections[0].id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && window.scrollY + 120 >= el.offsetTop) {
          current = section.id;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handler);
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className="flex flex-col gap-4">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`group flex items-center gap-2 transition-all ${
            active === section.id ? 'font-bold text-accent scale-105 ml-2' : 'text-muted-foreground'
          }`}
        >
          <span
            className={`block w-2 h-2 rounded-full transition-all ${
              active === section.id ? 'bg-accent scale-150' : 'bg-muted'
            }`}
          ></span>
          {section.label}
        </a>
      ))}
    </nav>
  );
}
