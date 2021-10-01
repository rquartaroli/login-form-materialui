import styled, { keyframes } from 'styled-components';
import { Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const translateX = keyframes`
  from {
    opacity: 0.5;
    -webkit-transform: translateX(100px);
    transform: translateX(100px);
  }

  to {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
`;

export const ContainerStyled = styled(Box)`
  height: 100vh;
  display: flex;
  align-items: stretch;
  animation: ${translateX} 1s ease-out;
`;

export const TextTypography = styled(Typography)`
  font-size: 0.8rem;
`;

export const LinkStyled = styled(Link)`
  font-weight: 700;
  text-shadow: #ffd500 0.05em 0.05em 0.05em;
  color: #ffd500;

  :hover {
    color: #FF9000;
  }
`;