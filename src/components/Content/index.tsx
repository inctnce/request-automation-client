import React from "react";
import { Route, Switch } from "react-router-dom";
import Account from "./Account";
import Bag from "./Bag";
import Catalog from "./Catalog";

const Content = () => {
  return (
    <>
      <Switch>
        <Route path="/account" component={() => <Account />} />
        <Route path="/bag" component={() => <Bag />} />
        <Route path="/" component={() => <Catalog />} />
      </Switch>
    </>
  );
};

export default Content;