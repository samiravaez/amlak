import React, {Suspense} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

const BlogsList = React.lazy(() => import(/* webpackChunkName: "blogsList" */ "./blogsList"))
const Blog = React.lazy(() => import(/* webpackChunkName: "Blog" */ "./Blog"))
const CategoryList = React.lazy(() => import(/* webpackChunkName: "CategoryList" */ "./CategoryList"))
const Tags = React.lazy(() => import(/* webpackChunkName: "Tags" */ "./Tags"))

const Blogs = ({match}) => {
  return (
    <Suspense fallback={<div className="loading"/>}>
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/list`} />
        <Route path={`${match.url}/list`} render={(props) => <BlogsList {...props}/>}/>
        <Route path={`${match.url}/create`} render={(props) => <Blog {...props}/>}/>
        <Route path={`${match.url}/edit/:id`} render={(props) => <Blog edit {...props}/>}/>
        <Route path={`${match.url}/category/list`} render={(props) => <CategoryList edit {...props}/>}/>
        <Route path={`${match.url}/tags/list`} render={(props) => <Tags edit {...props}/>}/>
      </Switch>
    </Suspense>
  );
};

export default Blogs;
