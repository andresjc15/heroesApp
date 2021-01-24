import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { useStyles } from '../../helpers/styles';
import '../../helpers/material/icons';
import { Search } from '@material-ui/icons';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const classes = useStyles();

    const { user, dispatch } = useContext(AuthContext);

    const history = useHistory();

    const handleLogout = () => {
        history.replace('/login');
        dispatch({
            type: types.logout
        });
    }

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                <div className={classes.title}>
                <Typography variant="h5">
                    <NavLink 
                        to="/" 
                        className={`${classes.navText} active`}
                    >
                        HeroesApp
                    </NavLink>
                </Typography>
                <Typography variant="h6" >
                    <NavLink 
                        activeClassName="active"
                        exact
                        to="/marvel" 
                        className={classes.navText}
                    >
                        <img className="navbar-img" src="/assets/marvel.png" alt="marvel"/>
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        exact
                        to="/dc" 
                        className={classes.navText}
                    >
                        <img className="navbar-img" src="/assets/dc.png" alt="dc" />
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        exact
                        to="/search" 
                        className={classes.navText}
                    >
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Search />
                        </IconButton>
                    </NavLink>
                </Typography>
                
                </div>
                <div>
                    <span>
                        { user.name }
                    </span>
                </div>
                
                <Button
                        className={classes.navText}
                        onClick={ handleLogout }
                >
                    Logout
                </Button>
                </Toolbar>
            </AppBar>
        
        </>
    )
}