import React, { useMemo } from 'react';
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from './HeroCard';

export const HeroList = ( {publisher} ) => {

    // const heroes = getHeroesByPublisher(publisher);

    const heroes = useMemo(()=> getHeroesByPublisher(publisher), [publisher]); //esto es para que si cambia el publisher la página se recarga

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard key={hero.id} {...hero}/>
                ))
            }
        </div>
    )
}
