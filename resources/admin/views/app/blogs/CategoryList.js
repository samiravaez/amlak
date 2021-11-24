import React, { useState, Suspense } from 'react';
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import { FormikReactSelect } from "../../../containers/form-validations/FormikFields";
import ReactQuill from 'react-quill';
import { Field, Form, Formik } from "formik";
import AlertError from "../../../components/AlertError";
import { adminPathApi } from "../../../constants/defaultValues";
import {
  Card,
  CardBody,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledButtonDropdown,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Collapse,
} from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import TableAjax from "../../../components/TableAjax";
import IntlMessages from '../../../helpers/IntlMessages';

const CategoryList = ({ match, history }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglee = () => setIsOpen(!isOpen);

  const cols = React.useMemo(
    () => [
      {
        Header: 'نام',
        accessor: 'f_name',
        cellClass: 'list-item-heading',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'نامک',
        accessor: 'l_name',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'توضیحات',
        accessor: 'Description',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'گزینه ها',
        accessor: 'options',
        cellClass: 'text-muted text-center',
        Cell: (props) => (<Actions id={props.value} />),
      },
    ],
    []
  );

  const [data, setData] = React.useState([{ id: 1, first_name: 'test' }]);
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);

  const Actions = ({ id }) => {
    return (
      <UncontrolledButtonDropdown tag={'a'}>
        <DropdownToggle color="secondary" outline>
          <i className={'simple-icon-options-vertical'} />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => history.push(`edit/${id}`)}>
            ویرایش
          </DropdownItem>
          <DropdownItem onClick={() => history.push(`permission/${id}`)}>
            حذف
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    );
  };

  const fetchData = React.useCallback(async ({ pageSize, pageIndex }) => {
    await axios.get(`${adminPathApi}/operator?page=${pageIndex + 1}&per_page=${pageSize}`)
      .then((res) => {
        setData(res.data.data)
        setPageCount(res.data.last_page)
        return res
      })
      .catch((error) => error)
  }
    , []);

  const onSearchKey = (e) => {

  }

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const quillModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  const [serverError, setServerError] = React.useState({})

  const id = match.params.id ? match.params.id : null;

  const [initialValues, setInitialValues] = React.useState({
    term_name: '',
    term_slug: '',
    term_order: '',
    parent: '0',
    term_description: '',
  });

  const onSubmit = () => {

  };

  return (
    <>
      <Suspense fallback={<div className={'loading'} />}>
        <Row>
          <Colxx xss="12">
            <Breadcrumb heading={"menu.blog.category.list"} match={match} />
            <div className="text-zero d-sm-none d-md-block top-right-button-container">
              <div className="search-sm d-inline-block mr-1 mb-1 align-top">
                <input
                  type="text"
                  name="keyword"
                  id="search"
                  placeholder={'جستجو'}
                  onKeyPress={(e) => onSearchKey(e)}
                />
              </div>
              <Button to="create" onClick={toggle}
                className="top-right-button btn btn-lg btn-primary"
              >
                <IntlMessages id="list.add" />
              </Button>
            </div>
            <Button className="MyDropDown d-md-none" color="secondary" onClick={togglee} style={{ marginBottom: '1rem' }}>نمایش جزئیات</Button>
            <Collapse className="d-md-none" isOpen={isOpen}>
              <Card className="d-md-none">
                <CardBody>
                  <div className="search-sm d-inline-block mr-1 mb-1 align-top">
                    <input
                      type="text"
                      name="keyword"
                      id="search"
                      placeholder={'جستجو'}
                      onKeyPress={(e) => onSearchKey(e)}
                    />
                  </div>
                  <Button onClick={toggle}
                    className="top-right-button btn btn-lg btn-primary mr-9"
                  >
                    <IntlMessages id="tag.add" />
                  </Button>
                </CardBody>
              </Card>
            </Collapse>
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Colxx>
          <Card className="mb-4">
            <CardBody>
              <TableAjax columns={cols} data={data} fetchData={fetchData} loading={loading} pageCount={pageCount} />
            </CardBody>
          </Card>
        </Colxx>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>افزودن دسته</ModalHeader>
          <AlertError errors={serverError} />
          <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
            {({ errors, touched, setFieldValue, setFieldTouched, values }) => (
              <Form>
                <ModalBody>
                  <Row>
                    <Colxx md={12}>
                      <FormGroup>
                        <Label>نام</Label>
                        <Field name={"term_name"} className={'form-control'} placeholder="نام" required />
                        {errors.term_name && touched.term_name && (
                          <div className="invalid-feedback d-block">
                            {errors.term_name}
                          </div>
                        )}
                      </FormGroup>
                    </Colxx>
                    <Colxx md={12}>
                      <FormGroup>
                        <Label>نامک</Label>
                        <Field name={"term_slug"} className={'form-control'} placeholder="نامک" required />
                        {errors.term_slug && touched.term_slug && (
                          <div className="invalid-feedback d-block">
                            {errors.term_slug}
                          </div>
                        )}
                      </FormGroup>
                    </Colxx>
                    <Colxx md={12}>
                      <FormGroup>
                        <Label>ترتیب</Label>
                        <Field name={"term_order"} className={'form-control'} placeholder="ترتیب" required />
                        {errors.term_order && touched.term_order && (
                          <div className="invalid-feedback d-block">
                            {errors.term_order}
                          </div>
                        )}
                      </FormGroup>
                    </Colxx>
                    <Colxx md={12}>
                      <FormGroup>
                        <Label>دسته مادر</Label>
                        <FormikReactSelect onChange={setFieldValue} onBlur={setFieldTouched} name={'parent'} value={values.parent} options={[
                          {
                            label: 'دسته مادر',
                            value: '0'
                          },
                          {
                            label: 'لوازم خانگی',
                            value: '1'
                          },
                          {
                            label: 'یخچال',
                            value: '2'
                          },
                          {
                            label: 'اجاق گاز',
                            value: '3'
                          },
                          {
                            label: 'لوازم بدکی خودرو',
                            value: '4'
                          },
                          {
                            label: ' لوازم خانگی',
                            value: '5'
                          },
                          {
                            label: 'لوازم خانگی ایرانی',
                            value: '6'
                          },
                          {
                            label: 'موبایل',
                            value: '7'
                          },
                          {
                            label: 'هواوی',
                            value: '8'
                          },
                          {
                            label: 'بهینه سازی دسته ها',
                            value: '9'
                          },
                          {
                            label: 'زیر دسته',
                            value: '10'
                          },
                          {
                            label: 'سامسونگ',
                            value: '11'
                          },
                          {
                            label: 'A20',
                            value: '12'
                          },
                        ]} />
                        {errors.parent && touched.parent && (
                          <div className="invalid-feedback d-block">
                            {errors.parent}
                          </div>
                        )}
                      </FormGroup>
                    </Colxx>
                    <Colxx md={12}>
                      <FormGroup>
                        <Label>توضیحات</Label>
                        <ReactQuill
                          theme="snow"
                          value={values.term_description}
                          onChange={(val) => setFieldValue('term_description', val)}
                          modules={quillModules}
                          formats={quillFormats}
                        />
                      </FormGroup>
                    </Colxx>
                  </Row>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" type="submit" onClick={toggle}>افزودن دسته</Button>{' '}
                  <Button color="primary" onClick={toggle}>لغو</Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </Modal>
      </Suspense>
    </>
  );
}
export default CategoryList;
