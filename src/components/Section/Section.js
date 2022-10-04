import PropTypes from 'prop-types';

import { SectionContainer, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      {title && <SectionTitle>{title}</SectionTitle>}

      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
