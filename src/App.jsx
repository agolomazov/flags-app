import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { HomePage } from "./pages/HomePage";
import { DetailsPage } from "./pages/DetailsPage";
import { NotFound } from "./pages/NotFound";

export function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <HomePage countries={countries} setCountries={setCountries} />
            )}
          />
          <Route path="/country/:country" component={DetailsPage} />
          <Route path="/404" exact component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Main>
    </>
  );
}
