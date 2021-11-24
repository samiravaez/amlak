import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import Crm from "./crm";
import CrmList from "./crm-list";
import MyCustomers from "./my-customers";
import Inquiry from './inquiry';
import AddCustomer from './add-customer';

const Crms = ({ match }) => {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Route
        path={`${match.url}/list`}
        render={(props) => <CrmList {...props} />}
      />
      <Route
        path={`${match.url}/my`}
        render={(props) => <MyCustomers {...props} />}
      />
      <Route
        path={`${match.url}/create`}
        render={(props) => <Crm {...props} />}
      />
      <Route
        path={`${match.url}/edit/:id`}
        render={(props) => <Crm edit {...props} />}
      />
      <Route
        path={`${match.url}/inquiry`}
        render={(props) => <Inquiry {...props} />}
      />
        <Route
            path={`${match.url}/add-customer`}
            render={(props) => <AddCustomer {...props} />}
        />
    </Suspense>
  )
}

export default Crms;
