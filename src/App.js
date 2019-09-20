import React from 'react';
import AccountProfile from "./components/AccountProfile";
import Navbar from "./components/Navbar";
import { Container, } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";

const App = () => (
    <>
      <Navbar />
        <Container>
          <Switch>
            <Route exact path="/" render={ () => <div>HOME</div> } />
            <Route exact path="/account/profile" render={ () => <AccountProfile/>} />
          </Switch>
        </Container>
   </>
  );

export default App;
