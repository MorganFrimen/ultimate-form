import{ Typography }from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Form } from './components/Form/Form';
import { Input } from './components/Form/input/input';
import { MainContainer } from "./components/MainContainer";
import * as yup from "yup";


export const Step2 = () => {
    const history = useHistory
    const { register, handleSubmit, errors, watch} = useForm({
        mode: "onBlur"
    })

    const onSubmit = (data) => {
        history.push('./step3')
    }
    return<MainContainer>
        <Typography component="h2" variant="h5">
            Step2
         </Typography>
            <Form>
                <Input id='email' type="email" label="Email" name="email" required>
                
                </Input>
            </Form>
    </MainContainer>
}