import React from 'react';
import Grid from '@mui/material/Grid';
import Sidebar from '../Sidebar/Sidebar';
import Appbar from './../Appbar/Appbar';
import PageContent from '../PageContent/PageContent';
import Box from '@mui/material/Box';

import './Home.css'
const Home = () => {
    return (
        <Box className='background'>


            <Appbar style={{ width: '90%' }} />
            <Grid container spacing={2}>
                <Grid sx={{ my: 3, ml: 5 }} style={{ backgroundColor: '#fff', borderRadius: '10px', width: '50%', height: '90%' }} md={3} xs={12}>
                    <Sidebar />
                </Grid>
                <Grid sx={{ my: 3, ml: 3 }} style={{ backgroundColor: '#fff', borderRadius: '10px', width: '50%', height: '90%' }} md={8} xs={12}>
                    <PageContent />
                </Grid>

            </Grid>
        </Box >

    );
};

export default Home;


{/* <Box className='background'>
    <Appbar style={{ width: '90%' }} />
    <Grid container spacing={2}>
        <Grid sx={{ my: 3, ml: 5 }} style={{ backgroundColor: '#fff', borderRadius: '10px', width: '50%', height: '90%' }} md={3} xs={12}>
            <Sidebar />
        </Grid>
        <Grid sx={{ my: 3, ml: 3 }} style={{ backgroundColor: '#fff', borderRadius: '10px', width: '50%', height: '90%' }} md={8} xs={12}>
            <PageContent />
        </Grid>

    </Grid>
</Box > */}



// <div className="container">
//     <div sx={{ my: 3, ml: 5 }} style={{ backgroundColor: '#fff', borderRadius: '10px', width: '50%', height: '90%', flexGrow: '4' }} md={3} xs={12}>  <Sidebar /></div>
//     <div sx={{ my: 3, ml: 3 }} style={{ backgroundColor: '#fff', borderRadius: '10px', width: '50%', height: '90%', flexGrow: '8' }} md={8} xs={12}><PageContent /></div>
// </div>