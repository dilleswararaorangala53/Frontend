import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'; // Import Axios for making HTTP requests
import { Label } from '@mui/icons-material';
import { Link } from "react-router-dom";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const defaultTheme = createTheme();

export default function Updateform() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const requestData = {
      title: formData.get('title'),
      date: formData.get('date'), // Retrieve date from form data
      file: formData.get('document'), // Assuming you added a name attribute to the file input as 'document'
    };
  
    try {
      console.log(requestData);
      const response = await axios.post('http://localhost:8888/api/updates/add-event', requestData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            NSS files Upload for Notifications
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title" 
              autoComplete="title"
              autoFocus
            />
            <br></br>
            <br></br>
            <Typography component='h5' variant='h5'>
  Date : &nbsp;&nbsp;
  <input type="date" id='date' name="date"></input>
</Typography>

            <br></br>
            <Typography component="h5" variant="h5">
              Upload Document :&nbsp;&nbsp;
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <VisuallyHiddenInput type="file" name="document" /> {/* Make sure the name matches the key in FormData */}
              </Button>
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SUBMIT
            </Button>
            <Button variant="contained">
          <Link
            to="/deleteupdates"
            style={{ textDecoration: "none", color: "white" }}
          >
            To Delete Files
          </Link>
        </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
