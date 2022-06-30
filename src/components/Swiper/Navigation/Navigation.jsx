import React from 'react';
import { useSwiper } from 'swiper/react';
import { NextArrowIcon, PrevArrowIcon } from '../../../assets/icons';
import { CenterWrapperStyled, Heading, Text } from '../../../styles/utils';
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
          <Text size="1.8rem">{`${currentIndex}/${totalCount}`}</Text>
          <Heading as="h2" size="1.8rem" $wrap noTransform>
            {title}
          </Heading>
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
