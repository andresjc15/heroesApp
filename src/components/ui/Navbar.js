import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useStyles } from '../../helpers/styles';



export const Navbar = () => {

    const classes = useStyles();

    return (
        <>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                <div className={classes.title}>
                <Typography variant="h5">
                    <NavLink 
                        to="/" 
                        className={`${classes.navText} active`}
                    >
                        Asociaciones
                    </NavLink>
                </Typography>
                <Typography variant="h6" >
                    <NavLink 
                        activeClassName="active"
                        exact
                        to="/marvel" 
                        className={classes.navText}
                    >
                        Marvel
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        exact
                        to="/dc" 
                        className={classes.navText}
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        exact
                        to="/search" 
                        className={classes.navText}
                    >
                        Search
                    </NavLink>
                </Typography>
                </div>
                 
                <NavLink 
                        activeClassName="active"
                        className={classes.navText}
                        exact
                        to="/login"
                >
                    <Button color="inherit">Logout</Button>
                </NavLink>
                </Toolbar>
            </AppBar>
        
        </>
    )
}