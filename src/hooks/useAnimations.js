import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Hook: triggers when element enters viewport
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

/**
 * Hook: animated counter from 0 → target using requestAnimationFrame
 * (much smoother than setInterval, no jank — batches with browser paint cycle)
 */
export function useCounter(target, duration = 2000, startCounting = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let rafId;
    let startTime;

    function tick(now) {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out quad for smooth deceleration
      const eased = 1 - (1 - progress) * (1 - progress);
      const value = Math.floor(eased * target);

      setCount(value);

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, startCounting]);

  return count;
}

/**
 * Hook: typewriter text effect (pauses when tab is hidden to save CPU)
 */
export function useTypewriter(texts, typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const isVisible = useRef(true);

  // Pause when tab is hidden
  useEffect(() => {
    const onVisChange = () => { isVisible.current = !document.hidden; };
    document.addEventListener('visibilitychange', onVisChange);
    return () => document.removeEventListener('visibilitychange', onVisChange);
  }, []);

  useEffect(() => {
    if (!isVisible.current) {
      // re-check in 500ms instead of running the loop
      const id = setTimeout(() => setDisplayText((t) => t), 500);
      return () => clearTimeout(id);
    }

    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}
