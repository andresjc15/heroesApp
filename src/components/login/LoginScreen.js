import React from 'react';

import Button from '@material-ui/core/Button';

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        history.push('/');
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
