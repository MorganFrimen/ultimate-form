import { Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from './src/components/Form/Form';
import { Input } from './src/components/Form/input/input';
import { MainContainer } from './src/components/MainContainer';

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
      </Form>
    </MainContainer>
  );
};
