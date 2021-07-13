import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SearchPage, BooksPage } from "src/frontend";

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <SearchPage />
      <Switch>
        <Route path="/:query">
          <BooksPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
