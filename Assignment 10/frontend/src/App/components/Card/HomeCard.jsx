import React from 'react';
import rightImage from '../../../assets/background.png';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, Button, Box } from '@mui/material';

export default function HomeCard() {

  const rightSideStyles = {
    flex: 1,
    backgroundImage: `url(${rightImage})`,
    backgroundPosition: 'right center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
  };

  return (
    <Container style={{ display: 'flex', minHeight: '100vh', alignItems: 'center' }}>
      <Card variant='outlined' sx={{ margin: 'auto', maxWidth: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ 
                          flex: 1, 
                          padding: '40px', 
                          display: 'flex', 
                          flexDirection: 'column', 
                          justifyContent: 'space-between', 
                          background: `url(${rightImage}) right center no-repeat fixed`,
                          backgroundSize: 'cover' 
                        }}
        >
      <Card sx={{ backgroundColor: 'rgba(225,225,225,0.8)', height: '50%' , overflowX: 'auto', overflowY: 'auto' }}>
          <div>
            <Typography variant='h2' gutterBottom align="center" sx={{ fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem', xl: '5rem' } }}>Jobify Your Application!</Typography>
            <Typography variant='body1' align="center" paragraph>
              <strong>Welcome to Your Next Career Move!</strong> Discover exciting job opportunities tailored to your skills and aspirations.
            </Typography>
            <Typography variant='body1' paragraph align="center">
              <strong>Featured Jobs</strong> Explore our featured jobs and take a step towards a fulfilling career:
            </Typography>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li><Typography variant='body1'><strong>Software Engineer:</strong> Join a dynamic team working on cutting-edge technologies.</Typography></li>
              <li><Typography variant='body1'><strong>Marketing Specialist:</strong> Drive marketing strategies for innovative products.</Typography></li>
              <li><Typography variant='body1'><strong>UX/UI Designer:</strong> Shape user experiences and create visually stunning designs.</Typography></li>
            </ul>
          </div>
          <div>
            <Typography variant='body1' paragraph align="center">
              More questions? <a href="/contact">Contact us</a>
            </Typography>
            <Typography variant='h6' align="center">
              <strong>How It Works</strong>
            </Typography>
            <ol style={{ paddingLeft: 20 }}>
              <li><Typography variant='body1'><strong>Browse Jobs:</strong> Explore a variety of opportunities from different industries and locations.</Typography></li>
              <li><Typography variant='body1'><strong>Apply Online:</strong> Submit your application and resume directly through our user-friendly platform.</Typography></li>
              <li><Typography variant='body1'><strong>Get Hired:</strong> Connect with employers, attend interviews, and secure your dream job.</Typography></li>
            </ol>
            <Typography variant='h5' align="center">Your future starts here. Begin your job search now!</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Button href="/jobPosts" variant="contained" color="primary" size="large">
                Search Jobs
              </Button>
              <br/>
            </Box>
          </div>
          </Card>
        </CardContent>
      </Card>
      <div style={rightSideStyles}></div>
    </Container>
  );
}
