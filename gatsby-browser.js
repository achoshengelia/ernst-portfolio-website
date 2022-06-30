exports.shouldUpdateScroll = ({
  prevRouterProps,
  routerProps: { location },
  getSavedScrollPosition
}) => {
  const currentPosition = getSavedScrollPosition(location);
  const prevLocation = prevRouterProps?.location;

  const isLanguageChange =
    (!location.pathname.includes('it') &&
      prevLocation?.pathname.includes('it')) ||
    (location.pathname.includes('it') &&
      !prevLocation?.pathname.includes('it'));

  if (isLanguageChange) {
    return false;
  }

  return window.scrollTo(...(currentPosition || [0, 0]));
};
