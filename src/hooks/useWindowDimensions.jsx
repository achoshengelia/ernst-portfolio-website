import { useState, useEffect } from 'react';
import { isBrowser } from 'constants/global';

const getWindowDimensions = () => {
  let defaultHeight;
  let defaultWidth;

  if (isBrowser) {
    defaultHeight = window.innerHeight;
    defaultWidth = window.innerWidth;
  }
  return {
    width: defaultWidth,
    height: defaultHeight
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
