import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Outlet } from 'react-router'
import DrawerCustom from '../../components/DrawerCustom/DrawerCustom';
import Navbar from '../../components/Navbar/Navbar';

const useStyles = makeStyles((theme) => ({
    content: {
        boxSizing: 'border-box',
        marginTop: 60
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
            <Grid container item xs={9} className={classes.content}>
                <Outlet />
            </Grid>
        </Grid>
    )
}


export default MainLayout
