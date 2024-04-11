import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import hiring from '../../../assets/hiring.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function AboutCard({ personInfo }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ marginTop: '30px' }}>
        <Grid item xs={12} md={8}>
          <Typography variant='h4' sx={{ textAlign: 'left' }}>
            <strong>
              Learn more about Jobify. The fastest and most affordable solution for posting your
              jobs to hundreds of job boards.
            </strong>
          </Typography>
          <Typography variant='body1' sx={{ textAlign: 'left', fontSize: 20 }} paragraph>
            
              Betterteam was founded in February 2016 and publicly launched in July 2016. Since then
              our clients have posted over 1 million jobs, received over 40 million candidates, and
              made millions of new hires.

          </Typography>
          <Typography variant='body1' sx={{ textAlign: 'left', fontSize: 20 }} paragraph>  

              We have now grown to 79 employees located in 12 different countries. The Betterteam
              website receives over 30 million unique visitors per year making it one of the top HR
              sites globally.
          
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src={hiring} height='auto' width='100%' alt='We are hiring' />
        </Grid>
        <Grid item xs={12}>
          <strong><Typography variant='h5' sx={{ textAlign: 'left' }}>MEET OUR TEAM</Typography></strong>
          <p />
        </Grid>
      </Grid>
      <Box>
        <ImageList sx={{ width: '100%', height: 300,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          '& > li': {
            width: { xs: '45%', sm: '30%', md: '22%', lg: '15%', xl: '12%' },
            marginBottom: 16,
          },
       }} gap={4}
       >
          {personInfo.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                height='100px'
              />
              <ImageListItemBar
                title={item.name}
                subtitle={item.description}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}
