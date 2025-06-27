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
        if (el && window.scrollY + 100 >= el.offsetTop) {
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
