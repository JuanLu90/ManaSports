// DEPENDENCES
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// COMPONENTS
import PlayerLayout from "../components/Layout";

// PUBLIC ROUTES
import Main from "../components/Main";
import Management from "../components/Management/Management";
import TournamentInfo from "../components/Management/TournamentInfo/TournamentInfo";

const PlayerRoutes = () => {

    return (
        <PlayerLayout>
            <Switch>
                {/* PUBLIC ROUTES */}
                <Route exact path="/" component={Main} />
                <Route exact path="/management" component={Management} />
                <Route exact path="/management/TournamentInfo/:userId/:tournamentId" component={TournamentInfo} />
                <Redirect to="/" />
            </Switch>
        </PlayerLayout>
    );
};

export default PlayerRoutes;
