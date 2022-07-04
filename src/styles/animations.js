import { keyframes } from 'styled-components';

export const popIn = keyframes`
   from {
      opacity: 0;
   }

   to {
      opacity: 1;
   }
`;

export const slideUp = keyframes`
   from {
      height: 100vh;
      opacity: 1;
   }

   to {
      height: 0;
      opacity: 0;
   }
`;

export const slideDown = keyframes`
   from {
      height: 0;
      opacity: 0;
   }

   to {
      height: 100vh;
      opacity: 1;
   }
`;

export const shrinkDown = size => keyframes`
   from {
      font-size: ${size ? size : '2rem'}
   }

   to {
      font-size: ${size ? size : '1.6rem'}
   }
`;
