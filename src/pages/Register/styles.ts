import styled, {keyframes} from 'styled-components';
import { 
  Box, 
  Button, 
  ButtonProps, 
  Container as MuiContainer,
  ContainerProps,
  Grid,
  GridProps,
  IconButton,
  IconButtonProps,
  InputAdornment,
  InputAdornmentProps,
  OutlinedInput,
  OutlinedInputProps,
  TextField,
  TextFieldProps,
  Typography,
  TypographyProps
} from '@material-ui/core';

const translateX = keyframes`
  from {
    opacity: 0.5;
    -webkit-transform: translateX(-100px);
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
`;

export const Container = styled(Box)`
  height: 100vh;
  display: flex;
  align-items: stretch;
  animation: ${translateX} 1s ease-out;
`;

export const Content = styled(Box)`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerCenter = styled(MuiContainer)<ContainerProps>``;

export const FormSubmit = styled.form``;

export const WrapperRegister = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  background-color: #FFF;
  border-radius: 4px;
`;

export const TitleRegister = styled(Typography)<TypographyProps>`
  padding-bottom: 1rem;
`;

export const GridContainer = styled(Grid)<GridProps>``;

export const GridItem = styled(Grid)<GridProps>``;

export const InputText = styled(TextField)<TextFieldProps>``;

export const InputHidePassword = styled(OutlinedInput)<OutlinedInputProps>``;

export const InputAdorn = styled(InputAdornment)<InputAdornmentProps>``;

export const IconPassword = styled(IconButton)<IconButtonProps>``;

export const ButtonAction = styled(Button)<ButtonProps>`
  margin-top: 3px;
  margin-bottom: 2px;
  font-weight: 700;
  text-shadow: #64656D 0.1em 0.1em 0.1em;
`;

export const BackGroundImg = styled(Box)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.palette.primary.dark};
  border-radius: 0% 800% 0% 0%;
`;