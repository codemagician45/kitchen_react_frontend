import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from 'containers/Pages/Standalone/NotFoundDedicated';
import Auth from './Auth';
import Application from './Application';
import LandingCorporate from './Landing';
import LandingCreative from './LandingCreative';
import ArticleNews from './ArticleNews';
import Users from './Users';
import Companies from './Companies';
import UserNewOffer from './../Pages/UserNewOffer'

import ThemeWrapper, { AppContext } from './ThemeWrapper';
import Admin from './Admin';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

class App extends React.Component {
  render() {
    return (
      <ThemeWrapper>
        <AppContext.Consumer>
          {(changeMode) => (
            <Switch>
              <Route path="/" exact component={LandingCorporate} />
              <Route
                path="/landing-creative"
                exact
                component={LandingCreative}
              />
              <Route
                path="/app"
                render={(props) => <Application {...props} changeMode={changeMode} />}
              />
              <Route
                path="/blog"
                render={(props) => (
                  <ArticleNews {...props} changeMode={changeMode} />
                )}
              />

              <Route
                path="/users"
                render={(props) => <Users {...props} changeMode={changeMode} />}
              />

              <Route
                path="/admin"
                render={props => <Admin {...props} changeMode={changeMode} />}
              />

              <Route
                path="/companies"
                render={props => <Companies {...props} />}
              />
              <Route 
              path="/widget/newoffer"
              component={UserNewOffer}/>

              <Route component={Auth} />
              <Route component={NotFound} />
            </Switch>
          )}
        </AppContext.Consumer>
      </ThemeWrapper>
    );
  }
}

export default App;
