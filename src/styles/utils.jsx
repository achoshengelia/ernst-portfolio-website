import React from 'react';
import styled from 'styled-components';

export const CenterWrapperStyled = styled.div`
  height: 100%;
  width: 100%;
  padding: ${({ paddingInline, noPadding }) =>
    paddingInline ? `0 ${paddingInline}` : noPadding ? '0' : '0 2rem'};
  margin: 0 auto;
  max-width: 145rem;

  @media ${props => props.theme.breakpoints.md} {
    padding: 0 1.8rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 1.5rem;
  }

  @media ${props => props.theme.breakpoints.xs} {
    padding: 0 1rem;
  }
`;

export const HeadingStyled = styled.span`
  color: ${({ theme, color }) =>
    color ? theme.colors.text[color] : theme.colors.text.main};
  font-weight: ${({ weight }) => (weight ? weight : 'normal')};
  font-size: ${({ size, as }) =>
    size
      ? size
      : as === 'h1'
      ? '3rem'
      : as === 'h2'
      ? '2.4rem'
      : as === 'h3'
      ? '2.3rem'
      : as === 'h4'
      ? '2.2rem'
      : as === 'h5'
      ? '2rem'
      : as === 'h6'
      ? '1.8rem'
      : null};
  text-transform: ${({ isUppercase, noTransform }) =>
    isUppercase ? 'uppercase' : noTransform ? null : 'capitalize'};
  white-space: ${({ $wrap }) => ($wrap ? null : 'nowrap')};
  word-wrap: ${({ $wrap }) => ($wrap ? 'break-word' : null)};
`;

export const Heading = props => {
  const { as, children } = props;

  return (
    <HeadingStyled as={as} {...props}>
      {children}
    </HeadingStyled>
  );
};

export const TextStyled = styled.span`
  color: ${({ theme, color }) =>
    color ? theme.colors.text[color] : theme.colors.text.main};
  font-weight: ${({ weight }) => (weight ? weight : 'normal')};
  font-size: ${({ size }) => (size ? size : '1.8rem')};
  text-transform: ${({ isUppercase }) => (isUppercase ? 'uppercase' : null)};
`;

export const Text = props => {
  const { as, children } = props;

  return (
    <TextStyled as={as} {...props}>
      {children}
    </TextStyled>
  );
};

const LineBreakWrapperStyled = styled.div`
  background-color: ${props => props.theme.colors.primary.dark};
`;

const LineBreakStyled = styled.hr`
  height: 0.1rem;
  background-color: ${props => props.theme.colors.background.form};
  border: none;
  max-width: 141rem;
  margin: 0 auto;
`;

export const LineBreak = () => {
  return (
    <LineBreakWrapperStyled>
      <LineBreakStyled />
    </LineBreakWrapperStyled>
  );
};
