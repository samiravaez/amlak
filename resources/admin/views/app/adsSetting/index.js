import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const TypesOfTransactions = React.lazy(() =>
  import(/* webpackChunkName: "typesOfTransactions" */ './typesOfTransactions')
);

const TypesOfProperty = React.lazy(() =>
  import(/* webpackChunkName: "typesOfProperty" */ './typesOfProperty')
);

const Welfare = React.lazy(() =>
  import(/* webpackChunkName: "welfare" */ './welfare')
);

const ImportantCenters = React.lazy(() =>
  import(/* webpackChunkName: "importantCenters" */ './importantCenters')
);

const AdsSetting = ({ match }) => {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        <Route
          path={`${match.url}/typeTransaction`}
          render={(props) => <TypesOfTransactions {...props} />}
        />
        <Route
          path={`${match.url}/typeProperty`}
          render={(props) => <TypesOfProperty {...props} />}
        />
        <Route
          path={`${match.url}/welfare`}
          render={(props) => <Welfare {...props} />}
        />
        <Route
          path={`${match.url}/important`}
          render={(props) => <ImportantCenters {...props} />}
        />
      </Switch>
    </Suspense>
  )
}
export default AdsSetting;
