import React, { Suspense, useState } from "react";
import {
  CardBody,
  CardTitle,
  Row,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Button,
  CardHeader,
  UncontrolledButtonDropdown,
  CardFooter,
  CardText,
  Card,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Collapse,
} from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import TableAjax from "../../../components/TableAjax";
import axios from "axios";
import { adminPathApi } from "../../../constants/defaultValues";
import { useHistory } from "react-router-dom";
import AlertError from "../../../components/AlertError";
import { Field, Form, Formik, FieldArray, ErrorMessage } from "formik";
import ReactQuill from 'react-quill';
import { FormikReactSelect } from "../../../containers/form-validations/FormikFields";

const AddRoles = ({ match }) => {

  const [serverError, setServerError] = React.useState({})

  const id = match.params.id ? match.params.id : null;

  const [initialValues, setInitialValues] = React.useState({
    name: '',
    Title: '',
  });

  const onSubmit = () => {

  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(true)
  };

  let history = useHistory();

  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const [notApproveModal, setNotApproveModal] = React.useState(false);
  const [selectId, setSelectedId] = React.useState(null);

  const Actions = ({ id }) => {
    return (
      <UncontrolledButtonDropdown tag={'a'}>
        <DropdownToggle color="secondary" outline>
          <i className={'simple-icon-options-vertical'} />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            حذف کاربر
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    );
  };

  const handleModalNotApproveSubmit = async (values) => {
    await axios.post(`${adminPathApi}/shop/changeStatus/${selectId}`, values)
      .then(({ data }) => {
        console.log(data);
      })
      .catch(error => console.log(error));
  };

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

  const [roles, setRoles] = useState([
    {
      name: 'مدیریت کاربران',
      value: 0,
    },
    {
      name: 'مدیریت آگهی ها',
      value: 1,
    },
    {
      name: 'ثبت آگهی',
      value: 2,
    },
    {
      name: 'مدیریت نواحی',
      value: 3,
    }
  ])

  return (
    <Suspense fallback={<div className="loading" />}>
      <Row>
        <Colxx xss="12">
          <Breadcrumb heading={"alluse"} match={match} />
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
        <Colxx md={12}>
          <Card>
            <CardHeader className="Bold" className="mt-3">افزودن نقش کاربری</CardHeader>
            <CardBody>
              <AlertError errors={serverError} />
              <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
                {({ errors, touched, setFieldValue, setFieldTouched, values }) => (
                  <Form className="av-tooltip tooltip-label-right">
                    <Row>
                      <Colxx md={6}>
                        <FormGroup>
                          <Label>نام</Label>
                          <Field name={"name"} className={'form-control'} required />
                          {errors.name && touched.name && (
                            <div className="invalid-feedback d-block">
                              {errors.name}
                            </div>
                          )}
                        </FormGroup>
                      </Colxx>
                      <Colxx md={6}>
                        <FormGroup>
                          <Label>عنوان عمومی</Label>
                          <Field name={"Title"} className={'form-control'} required />
                          {errors.Title && touched.Title && (
                            <div className="invalid-feedback d-block">
                              {errors.Title}
                            </div>
                          )}
                        </FormGroup>
                      </Colxx>
                      <Colxx md={12}>
                        <Row>
                          <FormGroup className="flexForm">
                            {roles && roles.map((item, key) => (
                              <CustomInput
                                type="checkbox"
                                id={`exampleCustomCheckbox${key}`}
                                label={item.name}
                                value={item.value}
                                onChange={(e) => setFieldValue(`roles.${key}`, e.target.checked)}
                              />
                            ))
                            }
                          </FormGroup>
                        </Row>
                      </Colxx>
                    </Row>
                  </Form>
                )}
              </Formik>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </Suspense>
  );
}
export default AddRoles;
