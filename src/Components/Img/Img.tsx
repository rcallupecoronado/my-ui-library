import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';
import { omit } from 'lodash';

const StyledImg = styled.img<{
  $backgroundColor?: string;
  $disabled?: boolean;
}>`
  width: ${({ width }) => width || '100px'};
  height: ${({ height }) => height || '100px'};
  object-fit: cover;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || 'transparent'};
`;

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  disabled,
  backgroundColor,
  ...rest
}) => {
  const filteredProps = omit(rest, ['disabled', 'backgroundColor']);

  return (
    <StyledImg
      src={src}
      alt={alt}
      width={width}
      height={height}
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      {...filteredProps}
    />
  );
};

export default Img;
