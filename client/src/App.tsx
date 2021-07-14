import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SearchPage, BooksPage } from "src/frontend";
import { createGlobalStyle } from "styled-components";
import { Container } from "src/ui";

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body{
  background-color: #e1dcc5;
  font-family: Open-Sans, Helvetica, Sans-Serif;
  box-sizing:border-box;
}

`;

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <GlobalStyle />
      <Container>
        <SearchPage />
        <Switch>
          <Route path="/:query">
            <BooksPage />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
