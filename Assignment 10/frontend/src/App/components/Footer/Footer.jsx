import { Box, Grid, Typography } from '@mui/material';

export default () => {
    return (
        <Box 
            className="fixed-bottom"
            sx={{
                bgcolor:  '#57c7cb',
                width: 'auto',
                color: 'aliceblue',
            }}
        >
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Typography align="center" variant="body1">
                        © 2024 Jobify All Rights Reserved
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}