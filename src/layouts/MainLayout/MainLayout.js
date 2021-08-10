import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Outlet } from 'react-router'
import DrawerCustom from '../../components/DrawerCustom/DrawerCustom';
import Navbar from '../../components/Navbar/Navbar';

const useStyles = makeStyles((theme) => ({
    content: {
        minHeight: 500
    }
}))

function MainLayout() {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
                <Navbar />
            </Grid>
            <Grid item xs={3}>
                <DrawerCustom />
            </Grid>
            <Grid item xs={9}>
                <Outlet />
            </Grid>
        </Grid>
    )
}


export default MainLayout
