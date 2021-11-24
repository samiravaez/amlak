import React, { Suspense } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';
import AxiosInterceptor from "../../helpers/AxiosInterceptor";
// import { ProtectedRoute, UserRole } from '../../helpers/authHelper';

const Dashboards = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dashboards')
);
const Pages = React.lazy(() =>
  import(/* webpackChunkName: "pages" */ './pages')
);
/*const Applications = React.lazy(() =>
  import(/!* webpackChunkName: "applications" *!/ './applications')
);*/
// const ProductsManagement = React.lazy(() =>
//   import(/* webpackChunkName: "ProductsMangement" */ './products-management')
// );
const Ui = React.lazy(() => import(/* webpackChunkName: "ui" */ './ui'));
const Menu = React.lazy(() => import(/* webpackChunkName: "menu" */ './menu'));
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './blank-page')
);
const Crms = React.lazy(() => import(/* webpackChunkName: "crms" */'./crm'));
const Ads = React.lazy(() => import(/* webpackChunkName: "ads" */'./ads'));
const Sheets = React.lazy(() => import(/* webpackChunkName: "sheets" */'./sheets'));
const Blogs = React.lazy(() => import(/* webpackChunkName: "Blogs" */'./blogs'));
const Settings = React.lazy(() => import(/* webpackChunkName: "settings" */'./settings'));
const Inventories = React.lazy(() => import(/* webpackChunkName: "inventories" */'./inventories'));
const AdsSetting = React.lazy(() => import(/* webpackChunkName: "adsSetting" */'./adsSetting'));
const Users = React.lazy(() => import(/* webpackChunkName: "users" */'./users'));

const App = ({ match }) => {
  return (
    <AxiosInterceptor>
      <AppLayout>
        <div className="dashboard-wrapper">
          <Suspense fallback={<div className="loading" />}>
            <Switch>
              <Redirect
                exact
                from={`${match.url}/`}
                to={`${match.url}/dashboards`}
              />
              <Route
                path={`${match.url}/dashboards`}
                render={(props) => <Dashboards {...props} />}
              />
              <Route
                path={`${match.url}/ads`}
                render={(props) => <Ads {...props} />}
              />
              <Route
                path={`${match.url}/sheet`}
                render={(props) => <Sheets {...props} />}
              />
              <Route
                path={`${match.url}/blogs`}
                render={(props) => <Blogs {...props} />}
              />
              <Route
                path={`${match.url}/settings`}
                render={(props) => <Settings {...props} />}
              />
              <Route
                path={`${match.url}/inventory`}
                render={(props) => <Inventories {...props} />}
              />
              <Route
                path={`${match.url}/crms`}
                render={(props) => <Crms {...props} />}
              />
              <Route
                path={`${match.url}/adsSetting`}
                render={(props) => <AdsSetting {...props} />}
              />
              {/* <Route
                  path={`${match.url}/products-management`}
                  render={(props) => <ProductsManagement {...props} />}
                /> */}
              {/*<Route
              path={`${match.url}/applications`}
              render={(props) => <Applications {...props} />}
            />
            <Route
              path={`${match.url}/operators`}
              render={(props) => <Operators {...props}/>}
            />
            {/* <ProtectedRoute
                    path={`${match.url}/applications`}
                    component={Applications}
                    roles={[UserRole.Admin]}
            /> */}
              <Route
                path={`${match.url}/pages`}
                render={(props) => <Pages {...props} />}
              />


              <Route
                path={`${match.url}/ui`}
                render={(props) => <Ui {...props} />}
              />
              <Route
                path={`${match.url}/menu`}
                render={(props) => <Menu {...props} />}
              />
              <Route
                path={`${match.url}/users`}
                render={(props) => <Users {...props} />}
              />
              <Redirect to="/error" />
            </Switch>
          </Suspense>
        </div>
      </AppLayout>
    </AxiosInterceptor>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
