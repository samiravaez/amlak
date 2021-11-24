import React, {Suspense} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

const SheetList = React.lazy(() => import(/* webpackChunkName: "Sheetlist" */ "./Sheet-list"))
const Sheet = React.lazy(() => import(/* webpackChunkName: "Sheet" */ "./Sheet"))
const Addresses = React.lazy(() => import(/* webpackChunkName: "addresses" */ "./addresses"))

const Sheets = ({match}) => {
  return (
    <Suspense fallback={<div className="loading"/>}>
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/list`}/>
        <Route path={`${match.url}/list`} render={(props) => <SheetList {...props}/>}/>
        <Route path={`${match.url}/create`} render={(props) => <Sheet {...props}/>}/>
        <Route path={`${match.url}/edit/:id`} render={(props) => <Sheet edit {...props}/>}/>
        <Route path={`${match.url}/address/:id`} render={(props) => <Addresses {...props}/>}/>
      </Switch>
    </Suspense>
  )
}

export default Sheets;
