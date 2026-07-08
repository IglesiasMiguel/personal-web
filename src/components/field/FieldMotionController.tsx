import { useEffect } from 'react';

interface FieldMotionControllerProps {
  selector?: string;
}

export default function FieldMotionController({
  selector = '[data-field-reveal]',
}: FieldMotionControllerProps) {
  useEffect(() => {
    document.documentElement.classList.add('field-motion-ready');
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (nodes.length === 0) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.12,
      }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [selector]);

  useEffect(() => {
    const timelines = Array.from(document.querySelectorAll<HTMLElement>('[data-timeline]'));
    if (timelines.length === 0) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let frame = 0;

    const clamp = (value: number) => Math.min(1, Math.max(0, value));

    const updateTimelines = () => {
      frame = 0;

      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const viewportBottom = window.scrollY + viewportHeight;
      const pageBottomReached = viewportBottom >= documentHeight - 2;

      timelines.forEach((timeline) => {
        const rect = timeline.getBoundingClientRect();
        const items = Array.from(timeline.querySelectorAll<HTMLElement>('[data-timeline-item]'));
        const lastItem = items.at(-1);
        const railEnd = lastItem
          ? lastItem.offsetTop + lastItem.offsetHeight / 2
          : timeline.clientHeight;
        const start = viewportHeight * 0.74;
        const traveled = Math.max(0, start - rect.top);
        const progressHeight = pageBottomReached ? railEnd : Math.min(railEnd, traveled);
        const progress = railEnd === 0 ? 0 : clamp(progressHeight / railEnd);
        const signalVisible = !reducedMotion && progress > 0.02 && progress < 0.995 ? 1 : 0;

        timeline.style.setProperty('--timeline-rail-end', `${railEnd}px`);
        timeline.style.setProperty('--timeline-progress-px', `${progressHeight}px`);
        timeline.style.setProperty('--timeline-signal-opacity', signalVisible.toString());

        const nodes = Array.from(timeline.querySelectorAll<HTMLElement>('[data-timeline-node]'));
        nodes.forEach((node) => {
          const item = node.closest<HTMLElement>('[data-timeline-item]');
          if (!item) return;

          const itemMidpoint = item.offsetTop + item.offsetHeight / 2;
          node.classList.toggle('is-engaged', progressHeight >= itemMidpoint - 6);
        });
      });
    };

    const requestUpdate = () => {
      if (frame !== 0) return;
      frame = window.requestAnimationFrame(updateTimelines);
    };

    updateTimelines();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  return null;
}
