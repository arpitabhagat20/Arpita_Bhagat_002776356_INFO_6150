import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, ListItemAvatar, Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import { Box } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import axios from 'axios';

export default ({jobPosts}) => {

    const deleteJob = async (companyName, jobTitle) => {
        
        console.log("console stuff",companyName, jobTitle);
        const response = await axios.delete('http://localhost:3000/delete/jobs', {data :{companyname: companyName, jobtitle: jobTitle}})
        console.log(response);
    }

    return (
        <div>
        {console.log(jobPosts)}
            <List sx={{
                marginTop: '50px',
            }}>
                {
                    jobPosts && jobPosts.map((job) => (
                        <Box sx={{  flexGrow: 1, maxWidth: 752, backgroundColor:'#F3FFFF' }}>
                        <ListItem alignItems='flex-start' key={job._id}>
                            <ListItemAvatar>
                                <Avatar>
                                    <WorkIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Typography variant='h4' gutterBottom>{job.companyname}</Typography>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography variant='body1' gutterBottom>Job Title: {job.jobtitle}</Typography>
                                        <Typography variant='body1' gutterBottom>Description: {job.description}</Typography>
                                        <Typography variant='body1' gutterBottom>Salary: {job.salary}</Typography>
                                        <Typography variant='caption' gutterBottom>{job.lastUpdated}</Typography>
                                    </React.Fragment>
                                }
                            />
                            <ListItemAvatar onClick={() => deleteJob(job.companyname, job.jobtitle)}>
                                <Avatar>
                                    <DeleteOutlinedIcon />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItem>
                        </Box>
                    ))
                }
            </List>
        </div>
    );
}