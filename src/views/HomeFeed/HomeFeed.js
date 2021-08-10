import { Avatar, Button, Container, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles, TextField } from '@material-ui/core'
import React from 'react'
import simon from '../../assets/simon.png'
import cover from '../../assets/cover.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    root1: {
        gridGap: 20,
    },
    newFeed: {
        backgroundColor: 'white',
        marginTop: 20,
        boxSizing: 'border-box',
        padding: '12px 12px'
    },
    root2: {
        boxSizing: 'border-box',
        background: 'rgba(40, 44, 52, 0.03) 0% 0% no-repeat padding-box',
    },
    tabButton: {
        color: '#1C2025',
        font: 'normal normal 600 15px/23px Poppins',
    },
    listTabButton: {
        color: '#1C2025',
        font: 'normal normal 400 10px/15px Poppins',
    }
}))

function HomeFeed() {
    const classes = useStyles()
    return (
        <Grid container item className={classes.root} xs={12}>
            <Grid item xs={8} className={classes.root1}>
                <Grid item xs={12} className={classes.newFeed} >
                    <IconButton>
                        <Avatar alt="Remy Sharp" src={simon} />
                    </IconButton>
                    <Button className={classes.tabButton}>Simon Bradley</Button>
                    <TextField
                        disabled
                        id="filled-disabled"
                        defaultValue="Type Here"
                        variant="filled"
                        margin="dense"
                    />
                </Grid>
                <Grid item xs={12} className={classes.newFeed} >
                    <IconButton>
                        <Avatar alt="Remy Sharp" src={simon} />
                    </IconButton>
                    <Button className={classes.tabButton}>Simon Bradley</Button>
                    <Container maxWidth="sm">
                        <img src={cover} alt="imgpost" style={{ width: '100%', height: 300 }} />
                    </Container>
                </Grid>
            </Grid>
            <Grid item xs={4} className={classes.root2}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Friends Online
                        </ListSubheader>
                    }
                >
                    <ListItem button>
                        <IconButton>
                            <Avatar alt="Remy Sharp" src={simon} />
                        </IconButton>
                        <Button className={classes.tabButton}>Simon Bradley</Button>
                    </ListItem>
                    <ListItem button>
                        <IconButton>
                            <Avatar alt="Remy Sharp" src={simon} />
                        </IconButton>
                        <Button className={classes.tabButton}>Simon Bradley</Button>
                    </ListItem>
                    <ListItem button>
                        <IconButton>
                            <Avatar alt="Remy Sharp" src={simon} />
                        </IconButton>
                        <Button className={classes.tabButton}>Simon Bradley</Button>
                    </ListItem>
                </List>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Family Online
                        </ListSubheader>
                    }
                >
                    <ListItem button>
                        <IconButton>
                            <Avatar alt="Remy Sharp" src={simon} />
                        </IconButton>
                        <Button className={classes.tabButton}>Simon Bradley</Button>
                    </ListItem>
                    <ListItem button>
                        <IconButton>
                            <Avatar alt="Remy Sharp" src={simon} />
                        </IconButton>
                        <Button className={classes.tabButton}>Simon Bradley</Button>
                    </ListItem>
                    <ListItem button>
                        <IconButton>
                            <Avatar alt="Remy Sharp" src={simon} />
                        </IconButton>
                        <Button className={classes.tabButton}>Simon Bradley</Button>
                    </ListItem>
                </List>

            </Grid>
        </Grid>
    )
}

export default HomeFeed
