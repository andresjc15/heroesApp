import React, { useContext } from 'react';

import Button from '@material-ui/core/Button';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';
        
         dispatch({
             type: types.login,
             payload: {
                 name:'Andres'
             }
         });

         history.replace(lastPath);
         
    }

    return (
        <div className="container mt-5">
            <h2>Login Screen</h2>
            <hr />

            <Button 
                variant="contained" 
                color="primary"
                disableElevation
                onClick={ handleLogin }
            >
                Ingresar
            </Button>
        </div>
    )
}
