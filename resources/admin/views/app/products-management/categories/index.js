import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const CategoryList = React.lazy(() =>
  import(/* webpackChunkName: "category-list" */ './category-list')
);
const Category = React.lazy(() =>
  import(/* webpackChunkName: "category" */ './category')
);
const CategoryForm = React.lazy(() =>
  import(/* webpackChunkName: "add-form" */ './add-form')
);
const CategoryAds = React.lazy(() =>
    import(/* webpackChunkName: "add-form" */ '../products/shop-product-list')
);

const Categories = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/list`} />
      <Route
        path={`${match.url}/list`}
        render={(props) => <CategoryList {...props} />}
      />
      <Route
        path={`${match.url}/create`}
        render={(props) => <Category {...props} />}
      />
      <Route
        path={`${match.url}/edit/:id`}
        render={(props) => <Category edit {...props} />}
      />
      <Route
          path={`${match.url}/addForm/:id`}
          render={(props) => <CategoryForm {...props} />}
      />
      <Route
          path={`${match.url}/showAds/:id`}
          render={(props) => <CategoryAds {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Categories;
