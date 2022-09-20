import React from 'react';
import { useTranslation } from 'react-i18next';
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

const Navigation = ({ currentIndex, totalCount }) => {
  const swiper = useSwiper();
  const { t } = useTranslation(`slides`);

  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <InfoWrapperStyled>
          <TextStyled size="1.8rem">{`${currentIndex}/${totalCount}`}</TextStyled>
          <HeadingStyled as="h2" size="1.8rem" $wrap noTransform>
            {t(`slide_${currentIndex}.title`)}
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
