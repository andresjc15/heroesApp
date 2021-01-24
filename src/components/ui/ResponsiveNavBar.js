import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons';
import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { useStyles } from '../../helpers/styles';
import { types } from '../../types/types';

export const ResponsiveNavBar = () => {

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
        <div>
            <AppBar position="fixed">
                <Toolbar className={classes.title}>
                    <div className="mx-auto">
                        <Typography variant="h5">
                            <NavLink 
                                to="/" 
                                className={`${classes.navText} active`}
                            >
                                HeroesApp
                            </NavLink>
                            
                        </Typography>
                    </div>
                    <Button
                        className={classes.navText}
                        onClick={ handleLogout }
                    >
                        <IconButton color="inherit" aria-label="menu">
                            <AccountCircle />
                        </IconButton>
                    </Button>
                </Toolbar>

                
            </AppBar>
        </div>
    )
}
