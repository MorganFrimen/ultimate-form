import { Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { PrimaryButton } from './components/Button/PrimaryButton';
import { Form } from './components/Form/Form';
import { Input } from './components/Form/input/input';
import { MainContainer } from './components/MainContainer';

export const Step1 = () => {
  const { register, handleSubmit, erros } = useForm({
    mode: 'onBlur',
  });
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step1
      </Typography>
      <Form>
        <Input ref={register} id="firstName" type="text" name="firstName" label="First Name" />
        <Input ref={register} id="lastName" type="text" name="lastName" label="Last Name" />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
