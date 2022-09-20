import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';
import { EffectFade } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import Navigation from './Navigation/Navigation';
import { SwiperStyled } from './SwiperStyles';

const query = graphql`
  {
    allSlidesJson {
      nodes {
        id
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              layout: FULL_WIDTH
              quality: 100
            )
          }
        }
      }
    }
  }
`;

const Swiper = () => {
  const [realIndex, setRealIndex] = useState(0);
  const { allSlidesJson } = useStaticQuery(query);
  const { t } = useTranslation('slides');
  const slides = allSlidesJson.nodes;

  const getCurrentIndex = () => {
    if (realIndex < 10) return `0${realIndex + 1}`;
    return realIndex + 1;
  };

  const getTotalSlidesCount = () => {
    const length = slides.length;
    if (length < 10) return `0${length}`;
    return length;
  };

  const getAlt = () => {
    return t(`slide_${getCurrentIndex()}.alt`);
  };

  return (
    <SwiperStyled
      spaceBetween={30}
      effect="fade"
      loop={true}
      modules={[EffectFade]}
      fadeEffect={{ crossFade: true }}
      speed={500}
      onSlideChange={swiper => setRealIndex(swiper.realIndex)}
    >
      {slides?.map(slide => (
        <SwiperSlide key={slide.id}>
          <GatsbyImage
            image={getImage(slide.image)}
            alt={getAlt()}
            className="gatsby-image"
          />
        </SwiperSlide>
      ))}

      <Navigation
        currentIndex={getCurrentIndex()}
        totalCount={getTotalSlidesCount()}
      />
    </SwiperStyled>
  );
};

export default Swiper;
