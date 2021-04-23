import { List, ListItemIcon, ListItemText, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CloudUpload, InsertDriveFile } from '@material-ui/icons';
import { ListItem } from 'material-ui';
import React from 'react';
import Dropzone from 'react-dropzone';
import { Controller } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#eee',
    textAlign: 'center',
    cursor: 'pointer',
    color: '#333',
    padding: 10,
    marginTop: 20,
  },
  icon: {
    marginTop: 20,
    color: '#888',
    fontSize: 22,
  },
}));
export const FileInput = ({ control, name }) => {
  const styles = useStyles();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ onChange, onBlur, value }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper className={styles.root} variant="outlined" {...getRootProps()}>
                <CloudUpload className={styles.icon} />
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p> Drag 'n' drop files here, or click select files </p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {value.map((f, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFile />
                  <ListItemText primary={f.name} secondary={f.size} />
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </>
      )}
    />
  );
};
