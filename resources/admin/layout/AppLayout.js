import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import TopNav from '../containers/navs/Topnav';
import Sidebar from '../containers/navs/Sidebar';
import Footer from '../containers/navs/Footer';

const AppLayout = ({containerClassnames, children, history, step}) => {
    return (
        <div id="app-container" className={containerClassnames}>
            <TopNav history={history}/>
            <Sidebar/>
            <main>
                <div className="container-fluid">{children}</div>
            </main>
            <Footer/>
        </div>
    );
};
const mapStateToProps = ({menu, authUser: {step}}) => {
    const {containerClassnames} = menu;
    return {containerClassnames, step};
};
const mapActionToProps = {};

export default withRouter(
    connect(mapStateToProps, mapActionToProps)(AppLayout)
);
