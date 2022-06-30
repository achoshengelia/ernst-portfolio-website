import styled from 'styled-components';

export const HamburgerStyled = styled.div`
  z-index: 9;
  background-color: ${({ isOpen }) => (isOpen ? 'transparent' : 'black')};
  height: 0.25rem;
  width: 2.5rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease-in;
  position: relative;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(-10px)' : null)};

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: black;
    height: 0.25rem;
    width: 2.5rem;
    border-radius: 0.25rem;
    transition: all 0.2s ease-in;
  }

  &::before {
    transform: ${({ isOpen }) =>
      isOpen ? 'translate(10px) rotate(-45deg)' : 'translateY(0.8rem)'};
  }
  &::after {
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(10px) rotate(45deg)' : 'translateY(-0.8rem)'};
  }
`;

export const HamburgerWrapperStyled = styled.div`
  cursor: pointer;
  padding: 1rem;
`;
