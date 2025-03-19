import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';
import { omit } from 'lodash';

const StyledHeroImage = styled.div<{
  src?: string;
  disabled?: boolean;
  backgroundColor?: string;
}>`
  width: 100%;
  height: 300px;
  background-image: ${({ src }) => `url(${src || 'default-image.png'})`};
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  disabled,
  backgroundColor,
  ...rest
}) => {
  const filteredProps = omit(rest, ['backgroundColor']);
  return (
    <StyledHeroImage
      src={src}
      data-testid="hero-image"
      disabled={disabled}
      backgroundColor={backgroundColor}
      {...filteredProps}
    />
  );
};

export default HeroImage;
