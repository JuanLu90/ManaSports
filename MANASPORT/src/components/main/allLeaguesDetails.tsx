import React from "react";
import { Tab, Nav } from "react-bootstrap";
import AllLeaguesDetailsGeneral from "./allLeaguesDetailsGeneral";
import AllLeaguesDetailsTeams from "./allLeaguesTeamsList";
import AllLeaguesDetailsPlayers from "./allLeaguesPlayersList";
import { ITournament } from "../../interfaces";
import { createBrowserHistory } from "history";
import { IGlobalState } from "../../reducers/reducers";
import { connect } from "react-redux";
import styled from "styled-components";


const Span = styled.span`
  font-family: "Source Sans Pro", sans-serif;
`
const Wrapper = styled.div`
  margin: 100px 40px;
`



interface IProps {
  leagues: ITournament[];
}

const AllLeaguesDetails: React.FC<IProps> = props => {

  const history = createBrowserHistory({});
  const path: any = history.location.pathname;
  let pathTournamentId = path.split(["/"]).slice(-1)[0];

  const currentLeague = props.leagues.find(
    u => u.TournamentId === +pathTournamentId
  );

  // if (!currentLeague) {
  //   return null;
  // }

  return (
    <Wrapper>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Nav variant="tabs" className="flex-fill justify-content-between">
          <Nav.Item>
            <Nav.Link eventKey="first" className="pt-0 pb-0 bg-secondary border border-dark">
              <Span className="text-light">General</Span>
            </Nav.Link>
          </Nav.Item>
          {/* <SpanNameLeague className="text-light">{currentLeague.name}</SpanNameLeague> */}
          <div>
          <Nav.Item>
            <Nav.Link eventKey="second" className="pt-0 pb-1 d-inline bg-secondary border border-dark">
              <Span className="text-light">Equipos</Span>
            </Nav.Link>
            <Nav.Link eventKey="third" className="pt-0 pb-1 d-inline bg-secondary border border-dark">
              <Span className="text-light">Jugadores</Span>
            </Nav.Link>
          </Nav.Item>
          </div>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <AllLeaguesDetailsGeneral />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <AllLeaguesDetailsTeams />
          </Tab.Pane>
          <Tab.Pane eventKey="third">
            <AllLeaguesDetailsPlayers />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Wrapper>
  );
};


const mapStateToProps = (state: IGlobalState) => ({
  leagues: state.leagues
});


export default connect(mapStateToProps)(AllLeaguesDetails);