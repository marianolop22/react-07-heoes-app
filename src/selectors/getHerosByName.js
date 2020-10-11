import { heroes } from "../data/heroes";

export const getHerosByName = (name = '') => {

    if ( name==='' ) {
        return [];
    }
    return heroes.filter( hero => hero.superhero.toLowerCase().includes(name.toLowerCase()));
};