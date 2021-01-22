import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Button, TextField } from '@material-ui/core';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroByName';


export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [ formValues, handleInputChange ] = useForm({
        searchValue: q
    });

    const { searchValue } = formValues;

    const heroesFiltered = useMemo( () => getHeroesByName( q ), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchValue }`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <TextField 
                            label="Find your hero" 
                            variant="outlined" 
                            size="small"
                            type="text"
                            autoComplete="off"
                            className="mb-3 w-100"
                            name="searchValue"
                            value={ searchValue }
                            onChange={ handleInputChange }
                        />
                        <br />

                        <Button 
                            variant="contained" 
                            color="primary" 
                            disableElevation
                            type="submit"
                            className="w-100"
                        >
                            Search
                        </Button>
                    </form>
                </div>

                <div className="col-7">
                    <h4> Results </h4>
                    <hr />

                    {
                        ( q === '' ) &&
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                    }

                    {
                        ( q !== '' && heroesFiltered.length === 0 ) &&
                            <div className="alert alert-danger">
                                There isn't a hero with { q }
                            </div>
                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }

                </div>
                
            </div>
        </div>
    )
}
