import { AppBar, Avatar, Button, IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import leafs from '../../assets/leaf/leafs.png'
import Lifetwig from '../../assets/logo/Lifetwig.png'
import simon from '../../assets/simon.png'
const useStyles = makeStyles((theme) => ({
    root: {
        height: 60,
        background: `transparent url(${leafs}) no-repeat padding-box`,
        backgroundSize: '100% 100%,cover',
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '13px 75px',
        position: 'fixed',
    },
    logo: {
    },
    tabs: {
    },
    tabButton: {
        color: '#1C2025',
        font: 'normal normal 600 15px/23px Poppins',
    },
    profileTab: {
        background: 'transparent linear-gradient(180deg, #4F7D0D 0%, #88B235 100%) 0% 0% no-repeat padding-box'
    }
}))

const navTabs = [{
    label: 'Home Feed'
},
{
    label: 'Map'
}, {
    label: 'FamilyTree'
},
{
    label: 'Friends'
}]

function Navbar() {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <div className={classes.logo}>
                <img src={Lifetwig} alt="lifewig" />
            </div>
            <div className={classes.tabs}>
                {
                    navTabs.map((navTab) => {
                        return (
                            <Button className={classes.tabButton}>{navTab.label}</Button>
                        )
                    })
                }
            </div>
            <div className={classes.profileTabs}>
                <IconButton>
                    <Avatar alt="Remy Sharp" src={simon} />
                </IconButton>
                <Button className={classes.tabButton}>Simon Bradley</Button>
                <IconButton>
                    <Avatar className={classes.profileTab}>S</Avatar>
                </IconButton>
                <IconButton>
                    <Avatar className={classes.profileTab}>B</Avatar>
                </IconButton>
                <IconButton>
                    <Avatar className={classes.profileTab}>B</Avatar>
                </IconButton>
            </div>
        </AppBar>
    )
}

export default Navbar
