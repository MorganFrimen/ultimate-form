import React, { forwardRef } from 'react';
import { TextField } from '@material-ui/core';

export const Input = forwardRef((props, ref) => {
  return <TextField variant="outlined" margin="normal" innerRef={ref} {...props} fullWidth />;
});