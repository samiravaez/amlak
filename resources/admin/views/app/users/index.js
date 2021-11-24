import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const AllUsers = React.lazy(() =>
  import(/* webpackChunkName: "allusers" */ './all-users')
);

const RoleManagement = React.lazy(() =>
  import(/* webpackChunkName: "rolemanagement" */ './role-management')
);

const AddRoles = React.lazy(() =>
  import(/* webpackChunkName: "addRoles" */ './add-roles')
);

const AccessLevel = React.lazy(() =>
  import(/* webpackChunkName: "accessLevel" */ './access-level')
);

const AddAccessLevel = React.lazy(() =>
  import(/* webpackChunkName: "addAccessLevel" */ './add-access-level')
);

const AddCustomer = React.lazy(() =>
  import(/* webpackChunkName: "addCustomer" */ './add-customers')
);

const Users = ({ match }) => {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        <Route
          path={`${match.url}/all`}
          render={(props) => <AllUsers {...props} />}
        />
        <Route
          path={`${match.url}/rolemanagement`}
          render={(props) => <RoleManagement {...props} />}
        />
        <Route
          path={`${match.url}/addrole`}
          render={(props) => <AddRoles {...props} />}
        />
        <Route
          path={`${match.url}/access`}
          render={(props) => <AccessLevel {...props} />}
        />
        <Route
          path={`${match.url}/addaccess`}
          render={(props) => <AddAccessLevel {...props} />}
        />
        <Route
          path={`${match.url}/addcustomer`}
          render={(props) => <AddCustomer {...props} />}
        />
      </Switch>
    </Suspense>
  );
}

export default Users;
