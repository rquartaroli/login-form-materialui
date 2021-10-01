import React from 'react';

import {
  ContainerStyled,
  TextTypography,
  LinkStyled,
} from './styles';

import { 
  Box, 
  Button, 
  Container,
  Grid,
  TextField,
  Typography,
  useTheme,
} from '@material-ui/core';

import imgUnlock from '../../assets/img_unlock.svg';

export function SignIn() {
  const theme = useTheme();
  return (
    <ContainerStyled>
        <Box
          sx={{
            width: '100%',
            maxWidth: 700,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Container component="main" maxWidth="xs" >
            <Box
              sx={{
                padding: 8,
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: 'white'
              }}
            >
              <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
                Login
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField 
                    autoComplete="femail"
                    name="email"
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    autoComplete="fpassword"
                    name="password"
                    required
                    fullWidth
                    type="password"
                    id="password"
                    label="Senha"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, fontWeight: 700, textShadow: `#64656d 0.1em 0.1em 0.1em `}}
                  >
                    Entrar
                  </Button>
                </Grid>

                <Grid item xs={12}>
                <TextTypography>
                  Ainda não é cadastrado ? Faça já seu cadastro&nbsp;
                  <LinkStyled 
                    to="/register"
                  >
                    clicando aqui.
                  </LinkStyled> 
                </TextTypography>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>


        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: `${theme.palette.primary.dark}`,
            borderTopLeftRadius: '800%',
            borderTopRightRadius: '0%',
            borderBottomRightRadius: '0%',
            borderBottomLeftRadius: '0%',
          }}
        >
          <img 
            src={imgUnlock}
            width="100%"
            alt="unlock"
          />
        </Box>
      </ContainerStyled>
  )
}