import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default ({ employees }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container justifyContent="center">
        <div style={{ overflowX: 'auto' }}>
          <TableContainer component={Paper} sx={{ backgroundColor: '#F3FFFF' }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees && employees.map((employee) => (
                  <TableRow
                    key={employee._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" style={{ maxWidth: isSmallScreen ? '100px' : (isTablet ? 150 : 'auto'), height: isTablet ? '100px' : 'auto', width: isTablet ? '300px' : 'auto', overflow: 'auto', fontSize: isTablet ? '1.2rem' : 'auto' }}>
                      {employee.fullname}
                    </TableCell>
                    <TableCell align="right" style={{ maxWidth: isSmallScreen ? '100px' : (isTablet ? '400px' : 'auto'), height: isTablet ? '100px' : 'auto', width: isTablet ? '300px' : 'auto', overflow: 'auto', fontSize: isTablet ? '1.2rem' : 'auto' }}>
                      {employee.email}
                    </TableCell>
                    <TableCell align="right" style={{ maxWidth: isSmallScreen ? '100px' : (isTablet ? '400px' : 'auto'), height: isTablet ? '100px' : 'auto', width: isTablet ? '300px' : 'auto', overflow: 'auto', fontSize: isTablet ? '1.2rem' : 'auto' }}>
                      {employee.type}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    </Grid>
  );
}
