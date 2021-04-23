import { Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { PrimaryButton } from './components/Button/PrimaryButton';
import { FileInput } from './components/fileInput/fileInput';
import { Form } from './components/Form/Form';
import { MainContainer } from './components/MainContainer';

export const Step3 = () => {
  const history = useHistory();
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    history.push('./result');
  };
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        step3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
