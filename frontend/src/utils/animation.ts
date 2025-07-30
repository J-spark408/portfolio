export const observer = (): void => {
  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach((element) => {
    observer.observe(element);
  });
};