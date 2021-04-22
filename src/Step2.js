import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Form } from "./components/Form/Form";
import { Input } from "./components/Form/input/input";
import { MainContainer } from "./components/MainContainer";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";
import { PrimaryButton } from "./components/Button/PrimaryButton";
import parsePhoneNumberFromString from "libphonenumber-js";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email shold have corect format")
    .required("Email is a requerd field"),
});

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }

  return phoneNumber.formatInternational();
};
export const Step2 = () => {
  const history = useHistory();

  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const hasPhone = watch("hasPhone");

  const onSubmit = (data) => {
    history.push("./step3");
  };
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="email"
          type="email"
          label="Email"
          name="email"
          required
          error={!!errors.email}
          helperText={errors?.email?.message}
        ></Input>
        <FormControlLabel
          control={
            <Checkbox name="hasPhone" inputRef={register} color="primary" />
          }
          label="Do you have a phone control"
        />
        {hasPhone && (
          <Input
            ref={register}
            id="phoneNumber"
            label="Phone number"
            type="telephone"
            name="phoneNumber"
            onChenge={(event) => {
              event.target.value = normalizePhoneNumber(event.target.value);
            }}
          />
        )}
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
