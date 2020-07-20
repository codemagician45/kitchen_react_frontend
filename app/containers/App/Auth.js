/* eslint-disable quotes */
import React from "react";
import { Switch, Route } from "react-router-dom";
import Outer from "../Templates/Outer";
import {
  LoginV2,
  RegisterV2,
  ResetPassword,
  NotFound,Thanks
} from "../pageListAsync";

class Auth extends React.Component {
  render() {
    return (
      <Outer>
        <Switch>
          <Route path="/login" component={LoginV2} />
          <Route path="/register" component={RegisterV2} />
          <Route path="/thanks" component={Thanks} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route component={NotFound} />
        </Switch>
      </Outer>
    );
  }
}

export default Auth;
