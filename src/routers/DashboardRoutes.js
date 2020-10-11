import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/NavBar'
import { HeroScreen } from "../components/heros/HeroScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { SearchScreen } from '../components/search/SearchScreen';


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className="container mt-3">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/hero/:heroeId" component={HeroScreen}/>
                    <Route exact path="/dc" component={DcScreen}/>
                    <Route exact path="/search" component={SearchScreen}/>

                    <Redirect to="/marvel"/>

                </Switch>
            </div>
        </>
    )
}
