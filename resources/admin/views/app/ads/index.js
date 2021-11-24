import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';


const Add = React.lazy(() =>
  import(/* webpackChunkName: "add-ads" */ './add-ads')
);
const All = React.lazy(() =>
  import(/* webpackChunkName: "all-ads" */ './all-ads')
);
const Archive = React.lazy(() =>
  import(/* webpackChunkName: "archive" */ './archive')
);
const MyAdd = React.lazy(() =>
  import(/* webpackChunkName: "my-ads" */ './my-ads')
);
const Trash = React.lazy(() =>
  import(/* webpackChunkName: "trash" */ './trash')
);
const Waiting = React.lazy(() =>
  import(/* webpackChunkName: "unapproved-ads" */ './unapproved-ads')
);

const Ads = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/list`} />
      <Route
        path={`${match.url}/add`}
        render={(props) => <Add {...props} />}
      />
      <Route
        path={`${match.url}/all`}
        render={(props) => <All {...props} />}
        isExact
      />
      <Route
        path={`${match.url}/archive`}
        render={(props) => <Archive {...props} />}
        isExact
      />
      <Route
        path={`${match.url}/myAdd`}
        render={(props) => <MyAdd {...props} />}
      />
      <Route
        path={`${match.url}/trash`}
        render={(props) => <Trash {...props} />}
      />
      <Route
        path={`${match.url}/waiting`}
        render={(props) => <Waiting {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Ads;
