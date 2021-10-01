import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { FormControl, FormHelperText, InputLabel } from '@material-ui/core';

import {
  Container,
  Content,
  BackGroundImg,
  ContainerCenter,
  WrapperRegister,
  TitleRegister,
  GridContainer,
  GridItem,
  InputText,
  ButtonAction,
  FormSubmit,
  InputHidePassword,
  InputAdorn,
  IconPassword,
} from './styles';

import imgRegister from '../../assets/img_register.svg';


export function Register() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Nome é obrigatório'),
      email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
      password: Yup.string().required('Senha é obrigatória'),
      confirm_password: Yup.string().test('passwords-match', 'Senhas devem ser compatíveis', function(value){
        return this.parent.password === value
      }),
    }),
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  function handleShowPassword() {
    if(showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    } 
  }

  function handleShowConfirmPassword() {
    if(confirmShowPassword) {
      setConfirmShowPassword(false);
    } else {
      setConfirmShowPassword(true);
    } 
  }

  function handleMouseDownPassword (event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
  }

  return (
    <Container>
      <BackGroundImg>
        <img 
          src={imgRegister}
          width="100%"
          alt="register"
        />
      </BackGroundImg>

      <Content>
        <ContainerCenter>
          <WrapperRegister component="main" maxWidth="sm">
            <FormSubmit onSubmit={formik.handleSubmit}>
            <TitleRegister variant="h5">
              Cadastro de Usuário
            </TitleRegister>

            <GridContainer container spacing={2}>
              <GridItem item xs={12}>
                <InputText 
                  id="name"
                  name="name"
                  label="Nome Completo"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  fullWidth
                  required
                  error={formik.touched.name && formik.errors.name ? true : false}
                  helperText={formik.touched.name && formik.errors.name && formik.errors.name}
                  autoFocus
                />
              </GridItem>

              <GridItem item xs={12}>
                <InputText 
                  id="email"
                  name="email"
                  label="E-mail"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  fullWidth
                  required
                  error={formik.touched.email && formik.errors.email ? true : false}
                  helperText={formik.touched.email && formik.errors.email && formik.errors.email}
                />
              </GridItem>

              <GridItem item xs={12}>
                <FormControl 
                  variant="outlined" 
                  fullWidth
                  error={formik.touched.password && formik.errors.password ? true : false}
                >
                  <InputLabel htmlFor="password">Senha</InputLabel>
                    <InputHidePassword 
                      id="password"
                      name="password"
                      label="Senha"
                      type={showPassword ? "text" : "password"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      required
                      inputProps={{
                        'aria-label': 'senha',
                      }}
                      endAdornment={
                        <InputAdorn position="end">
                          <IconPassword
                            aria-label="alternar a visibilidade da senha"
                            onClick={handleShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff/>}
                          </IconPassword>
                        </InputAdorn>
                      }
                    />
                  <FormHelperText id="password">
                    {formik.touched.password && formik.errors.password && formik.errors.password}
                  </FormHelperText>
                </FormControl>
                {/* <InputText 
                  id="password"
                  name="password"
                  label="Senha"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  fullWidth
                  required
                  error={formik.touched.password && formik.errors.password ? true : false}
                  helperText={formik.touched.password && formik.errors.password && formik.errors.password}
                /> */}
              </GridItem>

              <GridItem item xs={12}>
              <FormControl 
                  variant="outlined" 
                  fullWidth
                  error={formik.touched.confirm_password && formik.errors.confirm_password ? true : false}
                >
                  <InputLabel htmlFor="confirm_password">Confirme a Senha</InputLabel>
                    <InputHidePassword 
                      id="confirm_password"
                      name="confirm_password"
                      label="Confirme a Senha"
                      type={confirmShowPassword ? "text" : "password"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirm_password}
                      required
                      inputProps={{
                        'aria-label': 'Confirme a Senha',
                      }}
                      endAdornment={
                        <InputAdorn position="end">
                          <IconPassword
                            aria-label="alternar a visibilidade da senha"
                            onClick={handleShowConfirmPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {confirmShowPassword ? <Visibility /> : <VisibilityOff/>}
                          </IconPassword>
                        </InputAdorn>
                      }
                    />
                  <FormHelperText id="confirm_password">
                    {formik.touched.confirm_password && formik.errors.confirm_password && formik.errors.confirm_password}
                  </FormHelperText>
                </FormControl>

                {/* <InputText 
                  id="confirm_password"
                  name="confirm_password"
                  label="Confirme a Senha"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirm_password}
                  fullWidth
                  required
                  error={formik.touched.confirm_password && formik.errors.confirm_password ? true : false}
                  helperText={formik.touched.confirm_password && formik.errors.confirm_password && formik.errors.confirm_password}
                /> */}
              </GridItem>

              <GridItem item xs={12}>
                <ButtonAction
                  type="submit"
                  variant="contained"
                  fullWidth 
                >
                  Cadastrar
                </ButtonAction>
              </GridItem>
            </GridContainer>
            </FormSubmit>
          </WrapperRegister>
        </ContainerCenter>
      </Content>

    </Container>
  )
}