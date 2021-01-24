import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export const ResponsiveFooter = () => {

    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        
        setValue(newValue);
        
    };

    return (
        <footer className="footer">
            <BottomNavigation value={value} onChange={handleChange}>
                <BottomNavigationAction value="marvel" icon={<img className="navbar-img" src="/assets/marvel.png" alt="marvel" />} component={Link} to="/marvel" />
                <BottomNavigationAction value="search" icon={<div><Search /></div>} component={Link} to="/search" />
                <BottomNavigationAction value="dc" icon={<img className="navbar-img" src="/assets/dc.png" alt="dc"/>} component={Link} to="/dc"  />
            </BottomNavigation>
        </footer>
        
    )
}
