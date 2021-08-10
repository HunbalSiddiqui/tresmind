import { AppBar, Avatar, Box, Button, Divider, IconButton, List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import simon from '../../assets/simon.png'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        marginTop: 60,
        backgroundColor: '#F0F2F5',
        boxSizing: 'border-box',
        padding: '16px 16px',
    },
    tabButton: {
        color: '#1C2025',
        font: 'normal normal 600 15px/23px Poppins',
    },
    drawerTab: {
        font: 'normal normal medium 15px/23px Poppins',
        color: '#1C2025',
        textAlign: 'left'
    }
}))

function DrawerCustom() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                anchor="left"
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Box component="div" style={{ backgroundColor: 'white', borderRadius: '8px' }}>
                    <IconButton>
                        <Avatar alt="Remy Sharp" src={simon} />
                    </IconButton>
                    <Button className={classes.tabButton}>Simon Bradley</Button>
                </Box>
                <List>
                    {['Home Feed', 'Personal Info', 'Photo', 'Feed', 'Chat', 'Settings'].map((text, index) => (
                        <ListItem button key={index}>
                            <ListItemText disableTypography primary={<Typography type="body2" className={classes.drawerTab}>{text}</Typography>} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    )
}

export default DrawerCustom
