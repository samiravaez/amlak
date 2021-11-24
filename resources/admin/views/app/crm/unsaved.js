import React, { Suspense, useState } from "react";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import AlertError from "../../../components/AlertError";
import { Field, Form, Formik } from "formik";
import {
  CardBody,
  CardTitle,
  Row,
  FormGroup,
  Label,
  Card,
  Button,
} from "reactstrap";

const UnSaved = ({ match }) => {

  const [selectId, setSelectedId] = useState(null);

  const handleModalNotApproveSubmit = async (values) => {
    await axios.post(`${adminPathApi}/shop/changeStatus/${selectId}`, values)
      .then(({ data }) => {
        console.log(data);
      })
      .catch(error => console.log(error));
  };

  //const tableInstance = useTable({ columns, data })
  const fetchData = React.useCallback(async ({ pageSize, pageIndex }) => {
    await axios.get(`${adminPathApi}/shop?page=${pageIndex + 1}&per_page=${pageSize}`)
      .then((res) => {
        setData(res.data.data)
        setPageCount(res.data.last_page)
        return res
      })
      .catch((error) => error)
  }
    , []);

  const [serverError, setServerError] = React.useState({});

  const [initialValues, setInitialValues] = React.useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const onSubmit = () => {

  };

  return (
    <>
      <Suspense fallback={<div className={'loading'} />}>
        <AlertError errors={serverError} />
        <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
          {({ errors, touched, setFieldValue, setFieldTouched, values }) => (
            <Form>
              <Card>
                <CardTitle className="ml-4 mt-2">مشخصات مشتری</CardTitle>
                <CardBody>
                  <Row>
                    <Colxx md={6}>
                      <FormGroup>
                        <Label><span id="redspan">*</span>&nbsp;نام و نام خانوادگی :</Label>
                        <Field id="shadow" className="form-control" type="text" name={"name"} />
                        {errors.name && touched.name && (
                          <div className="invalid-feedback d-block">
                            {errors.name}
                          </div>
                        )}
                      </FormGroup>
                    </Colxx>
                    <Colxx md={6}>
                      <FormGroup>
                        <Label><span id="redspan">*</span>&nbsp;ایمیل :</Label>
                        <Field id="shadow" className="form-control" type="text" name={"email"} />
                        {errors.email && touched.email && (
                          <div className="invalid-feedback d-block">
                            {errors.email}
                          </div>
                        )}
                      </FormGroup>
                    </Colxx>
                  </Row>
                  <Row>
                    <Colxx md={6}>
                      <FormGroup>
                        <Label><span id="redspan">*</span>&nbsp;شماره تماس :</Label>
                        <Field id="shadow" className="form-control" type="text" name={"phone"} />
                        {errors.phone && touched.phone && (
                          <div className="invalid-feedback d-block">
                            {errors.phone}
                          </div>
                        )}
                      </FormGroup>
                    </Colxx>
                    <Colxx md={6}>
                      <FormGroup>
                        <Label><span id="redspan">*</span>&nbsp;رمز عبور :</Label>
                        <Field id="shadow" className="form-control" type="text" name={"password"} />
                        {errors.password && touched.password && (
                          <div className="invalid-feedback d-block">
                            {errors.password}
                          </div>
                        )}
                      </FormGroup>
                    </Colxx>
                  </Row>
                </CardBody>
              </Card>
            </Form>
          )}
        </Formik>
      </Suspense>
    </>
  );
}
export default UnSaved;
