import React from 'react';
import { useSwiper } from 'swiper/react';
import {
  CenterWrapperStyled,
  HeadingStyled,
  TextStyled
} from 'components/Global';
import { NextArrowIcon, PrevArrowIcon } from '../../../assets/icons';
import {
  ButtonStyled,
  ButtonsWrapperStyled,
  ContainerStyled,
  InfoWrapperStyled
} from './NavigationStyles';

const Navigation = ({ currentIndex, totalCount, title }) => {
  const swiper = useSwiper();

  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <InfoWrapperStyled>
          <TextStyled size="1.8rem">{`${currentIndex}/${totalCount}`}</TextStyled>
          <HeadingStyled as="h2" size="1.8rem" $wrap noTransform>
            {title}
          </HeadingStyled>
        </InfoWrapperStyled>

        <ButtonsWrapperStyled>
          <ButtonStyled onClick={() => swiper.slidePrev()}>
            <PrevArrowIcon />
          </ButtonStyled>
          <ButtonStyled onClick={() => swiper.slideNext()}>
            <NextArrowIcon />
          </ButtonStyled>
        </ButtonsWrapperStyled>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Navigation;
