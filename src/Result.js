import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  Typography,
  TableBody,
  TableRow,
  TableCell,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import { InsertDriveFile } from '@material-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PrimaryButton } from './components/Button/PrimaryButton';
import { MainContainer } from './components/MainContainer';
import { useData } from './DataContext';

const useStyle = makeStyles({
  root: {
    marginBottom: 30,
  },
  table: {
    marginBottom: 30,
  },
});
export const Result = () => {
  const [success, setSuccess]=useState(false)
  const style = useStyle();
  const { data } = useData();
  const entries = Object.entries(data).filter((entry) => entry[0] !== 'files');
  const { files } = data;


  const onSubmit = async () => {
    
    const formData = new FormData();
    if (data.files) {
      data.files.forEach((file) => {
        formData.append('files', file, file.name);
      });
    }
    entries.forEach((entry) => {
      formData.append(entry[0], entry[1]);
    });
    const res = await fetch('http://localhost:1337/registers/', {
      method: 'POST',
      body: formData
    });
    const response = await res.json()
    if(response.status===200){
      Swal.fire("Greate jod", "success")
      setSuccess(true)
    }
    console.log(success)
  };
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Form Values Result
      </Typography>
      <TableContainer className={style.root} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell align="right">value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry[0]}>
                <TableCell>{entry[0]}</TableCell>
                <TableCell align="right">{entry[1].toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {files && (
        <>
          <Typography component="h2" variant="h5">
            Files
          </Typography>
          <List>
            {files.map((f, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={f.name} secondary={f.size} />
              </ListItem>
            ))}
          </List>
        </>
      )}
      <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
      <Link to="/"> Start over </Link>
    </MainContainer>
  );
};
