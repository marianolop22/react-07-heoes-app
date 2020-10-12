import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import { HeroCard } from '../heros/HeroCard';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { getHerosByName } from '../../selectors/getHerosByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q=''} = queryString.parse(location.search);
    const [{searchText}, handleInputChange] = useForm ( {searchText:q} );
    
    const herosFiltered = useMemo(()=>getHerosByName(q), [q]) ;
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    };

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your Hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="btn mt-1 btn-block btn-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                    {
                        (q==='') && 
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                    }
                    {
                        (q!=='' && herosFiltered.length === 0 ) && 
                            <div className="alert alert-danger">
                                No heros with {q}
                            </div>
                    }
                    

                    {
                        herosFiltered.map( hero => {
                            return (
                                <HeroCard className="pb-2"
                                    key={hero.superhero}
                                    {...hero}
                                />
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}
