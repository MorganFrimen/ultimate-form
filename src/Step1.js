import { Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers';
import { useForm } from 'react-hook-form';
import { PrimaryButton } from './components/Button/PrimaryButton';
import { Form } from './components/Form/Form';
import { Input } from './components/Form/input/input';
import { MainContainer } from './components/MainContainer';
import * as yup from 'yup';
import { useData } from './DataContext';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
    .required('First name is a required field'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    .required('Last name is a required field'),
});

export const Step1 = () => {
  const history = useHistory();
  const { data, setValues } = useData();
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
  });
  const onSubmit = (data) => {
    history.push('./step2');
    setValues(data);
  };
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="firstName"
          type="text"
          name="firstName"
          label="First Name"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          ref={register}
          id="lastName"
          type="text"
          name="lastName"
          label="Last Name"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
