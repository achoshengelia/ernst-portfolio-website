import { isBrowser } from 'constants/global';

export const pxToEm = pixels => pixels / 16 + 'em';

export const scrollTo = (id, showLanding) => {
  const isContactSection = id === 'contact';

  if (isBrowser) {
    if (!id) return window.scrollTo(0, 0);

    const element = document.getElementById(id);
    const headerOffset =
      showLanding && isContactSection
        ? 800
        : showLanding
        ? 860
        : isContactSection
        ? 60
        : 100;
    const elementPosition = element?.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const getIsIndexPage = () => {
  if (isBrowser) {
    const urlArr = window.location.pathname.split('/');
    const filterLang = urlArr.filter(item => item !== 'it');
    const isIndexPage = filterLang.every(item => !item);

    return isIndexPage;
  }
};
