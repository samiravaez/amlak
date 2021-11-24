import React, {useEffect, useState} from 'react';
import {Button, Card, CardTitle, FormGroup, Label, Row} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import {Field, Form, Formik} from 'formik';
import {NotificationManager} from '../../components/common/react-notifications';

import {checkLoginUser, loginUser} from '../../redux/actions';
import {Colxx} from '../../components/common/CustomBootstrap';
import IntlMessages from '../../helpers/IntlMessages';
import {adminRoot} from "../../constants/defaultValues";

const validatePassword = (value) => {
  let error;
  if (!value) {
    error = 'لطفا رمز خود را وارد کنید';
  } else if (value.length < 4) {
    error = 'رمز حداقل باید بیشتر از 3 کاراکتر باشد';
  }
  return error;
};

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'لطفا ایمیل خود را وارد کنید';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'ایمیل نا معتبر';
  }
  return error;
};

const Login = ({history, loading, error, loginUserAction, currentUser, checkUser}) => {
  const [email] = useState('');
  const [password] = useState('');

  useEffect(() => {
    if (!currentUser) {
      checkUser(history)
    }else{
      history.push(adminRoot);
    }
  },[currentUser]);

  useEffect(() => {
    if (error && error !== 401) {
      NotificationManager.warning(error, 'ورود ناموفق', 3000, null, null, 'filled');
    }
  }, [error]);

  const onUserLogin = (values) => {
    if (!loading) {
      if (values.email !== '' && values.password !== '') {
        loginUserAction(values, history);
      }
    }
  };

  const initialValues = {email, password};

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
            <p className="white mb-0">
              Please use your credentials to login.
              <br/>
              If you are not a member, please{' '}
              <NavLink to="/tbt-login/register" className="white">
                register
              </NavLink>
              .
            </p>
          </div>
          <div className="form-side">
            <NavLink to="/" className="white">
              <span className="logo-single"/>
            </NavLink>
            <CardTitle className="mb-4">
              <IntlMessages id="user.login-title"/>
            </CardTitle>

            <Formik initialValues={initialValues} onSubmit={onUserLogin}>
              {({errors, touched}) => (
                <Form className="av-tooltip tooltip-label-bottom">
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      <IntlMessages id="user.email"/>
                    </Label>
                    <Field
                      className="form-control"
                      name="email"
                      validate={validateEmail}
                    />
                    {errors.email && touched.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )}
                  </FormGroup>
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      <IntlMessages id="user.password"/>
                    </Label>
                    <Field
                      className="form-control"
                      type="password"
                      name="password"
                      validate={validatePassword}
                    />
                    {errors.password && touched.password && (
                      <div className="invalid-feedback d-block">
                        {errors.password}
                      </div>
                    )}
                  </FormGroup>
                  <div className="d-flex justify-content-between align-items-center">
                    <NavLink to="/user/forgot-password">
                      <IntlMessages id="user.forgot-password-question"/>
                    </NavLink>
                    <Button
                      color="primary"
                      className={`btn-shadow btn-multiple-state ${
                        loading ? 'show-spinner' : ''
                      }`}
                      size="lg"
                    >
                      <span className="spinner d-inline-block">
                        <span className="bounce1"/>
                        <span className="bounce2"/>
                        <span className="bounce3"/>
                      </span>
                      <span className="label">
                        <IntlMessages id="user.login-button"/>
                      </span>
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};
const mapStateToProps = ({authUser}) => {
  const {loading, error, currentUser} = authUser;
  return {loading, error, currentUser};
};

export default connect(mapStateToProps, {
  loginUserAction: loginUser,
  checkUser: checkLoginUser
})(Login);
