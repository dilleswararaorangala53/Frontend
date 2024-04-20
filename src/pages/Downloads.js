import React, { useState, useEffect } from 'react';
import Button from "@mui/material/Button";
import Mobilefooter from '../components/Mobilefooter';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';

const Downloads = () => {
  const [downloads, setDownloads] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    fetch('http://localhost:8888/api/downloads/get-downloads')
      .then(response => response.json())
      .then(data => {
        const correctedData = data.map(item => ({
          title: item.title,
          file_path: `http://localhost:8888/downloads/${item.file_path}`
        }));
        setDownloads(correctedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const downloadFile = (fileUrl) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.split('/').pop();
    link.click();
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div style={{marginLeft:"50px",marginRight:"50px",marginTop:"20px"}}>
      <h3><center>DOWNLOADS</center></h3>
      <br/>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
                ? downloads.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : downloads
              ).map((download, index) => (
              <TableRow key={index}>
                <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                <TableCell>{download.title}</TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => downloadFile(download.file_path)}>
                    <i className="fa fa-download" aria-hidden="true"></i> DOWNLOAD
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={downloads.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Mobilefooter/>
    </div>
  );
};

export default Downloads;