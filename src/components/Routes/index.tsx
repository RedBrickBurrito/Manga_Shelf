import {Switch, Route } from "react-router-dom";
import DetailedReview from "../../containers/DetailedReview";
import Home from '../../containers/HomeReviews';
import MangasList from "../../containers/MangasList";

/**
 * Routes
 * @returns Routes 
 */
 const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail" component={DetailedReview}/>
            <Route path="/to-read-list" component={MangasList}/>
        </Switch>
    );
};

export default Routes;