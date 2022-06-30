export const pxToEm = pixels => pixels / 16 + 'em';

export const scrollTo = id => {
  const element = document.getElementById(id);
  const headerOffset = id === 'contact' ? 60 : 120;
  const elementPosition = element?.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

export const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
