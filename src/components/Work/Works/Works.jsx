import React, { useState, useEffect } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { HeadingStyled } from 'components/Global';
import { workItems } from 'constants/work';
import { CloseIcon } from '../../../assets/icons';
import {
  ListStyled,
  ListItemStyled,
  ButtonStyled,
  HeaderContainer,
  ContainerStyled,
  AccordionContainerStyled
} from './WorksStyles';

const Works = () => {
  const [openedIndex, setOpenedIndex] = useState(null);

  return (
    <ContainerStyled>
      {workItems.map((item, i) => (
        <Item
          key={`${item.heading}-${i}`}
          index={i}
          openedIndex={openedIndex}
          item={item}
          setOpenedIndex={setOpenedIndex}
        />
      ))}
    </ContainerStyled>
  );
};

export default Works;

const Item = ({ item, index, openedIndex, setOpenedIndex }) => {
  const { heading, listItems } = item;

  const { t } = useTranslation('work');
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (!isOpen) setOpenedIndex(index);
    setIsOpen(prevState => !prevState);
  };

  useEffect(() => {
    if (openedIndex !== null && index !== openedIndex) setIsOpen(false);
  }, [index, openedIndex]);

  return (
    <AccordionContainerStyled isOpen={isOpen} onClick={handleToggle}>
      <HeaderContainer>
        <HeadingStyled as="h2" $wrap noTransform>
          {t(heading)}
        </HeadingStyled>
        <ButtonStyled>
          <CloseIcon />
        </ButtonStyled>
      </HeaderContainer>
      <ListStyled>
        {listItems.map(item => (
          <ListItemStyled key={item}>{t(item)}</ListItemStyled>
        ))}
      </ListStyled>
    </AccordionContainerStyled>
  );
};
