import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
        title
        alt
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              height: 600
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
  const slides = allSlidesJson.nodes;

  const getCurrentIndex = () => {
    if (realIndex < 10) return `0${realIndex + 1}`;
    return realIndex + 1;
  };

  const getTotalSlidesCount = slides => {
    const length = slides.length;
    if (length < 10) return `0${length}`;
    return length;
  };

  const getTitle = () => {
    return slides[realIndex].title;
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
            alt={slide?.alt}
            className="gatsby-image"
          />
        </SwiperSlide>
      ))}

      <Navigation
        currentIndex={getCurrentIndex()}
        totalCount={getTotalSlidesCount(slides)}
        title={getTitle()}
      />
    </SwiperStyled>
  );
};

export default Swiper;
