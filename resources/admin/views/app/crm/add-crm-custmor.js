import React, { Suspense, useState } from "react";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import axios from "axios";
import { adminPathApi } from "../../../constants/defaultValues";
import { Field, Form, Formik } from "formik";
import AlertError from "../../../components/AlertError";
import Customer from './customer';
import {
  FormGroup,
  Row,
  Label,
  Button,
  CardBody,
  Card,
  CardTitle,
} from "reactstrap";

const AddCrmCustmor = ({ match }) => {
  const [loading, setLoading] = React.useState(false);

  const [pageCount, setPageCount] = React.useState(0);

  const [notApproveModal, setNotApproveModal] = React.useState(false);

  const [selectId, setSelectedId] = React.useState(null);

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

  const [serverError, setServerError] = React.useState({})

  const [initialValues, setInitialValues] = React.useState({
    phone: "",
  });

  const onSubmit = () => {

  };

  const [firstField, setFirstField] = useState(true);

  const [seccondField, setSeccondField] = useState(false);

  const fieldsHandler = () => {
    setTimeout(
      function () {
        setFirstField(!firstField);
        setSeccondField(!seccondField);
      },
      1000
    );
  };

  return (
    <>
      <Suspense fallback={<div className={'loading'} />}>
        <Row>
          <Colxx xss="12">
            <Breadcrumb heading={""} match={match} />
            <div className="search-sm d-inline-block mr-1 mb-3 align-top float-right">
              <input
                type="text"
                name="keyword"
                id="search"
                placeholder={'جستجو'}
                onKeyPress={(e) => onSearchKey(e)}
              />
            </div>
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <AlertError errors={serverError} />
        <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
          {({ errors, touched, setFieldValue, setFieldTouched, values }) => (
            <Form>
              <Row>
                <Colxx md={12}>
                  {firstField &&
                    <Card>
                      <CardTitle className="MyTitle">مشخصات مشتری</CardTitle>
                      <CardBody>
                        <FormGroup>
                          <Label>شماره تماس</Label>
                          <Field name={"phone"} className={'form-control col-md-6'} placeholder="شماره تلفن" required />
                          {errors.phone && touched.phone && (
                            <div className="invalid-feedback d-block">
                              {errors.phone}
                            </div>
                          )}
                          <Button type="submit" className="mt-2" onClick={fieldsHandler}>بررسی اطلاعات</Button>
                        </FormGroup>
                      </CardBody>
                    </Card>
                  }
                  {seccondField &&
                    <Customer />
                  }
                </Colxx>
              </Row>
            </Form>
          )}
        </Formik>
      </Suspense>
    </>
  );
}
export default AddCrmCustmor;
