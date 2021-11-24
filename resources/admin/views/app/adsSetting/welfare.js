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

const welfare = ({ match }) => {

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
    names: '',
    lnames: '',
    statuses: '0',
    descriptions: '',
    id: '',
    title: '',
    field: '',
    json: '',
    crm: '',
    choose: '0',
    Price: '',
    Search: '',
    lists: [
      {
        name: '',
        icon: '',
      },
    ],
  });

  const onSubmit = () => {

  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(true)
  };

  let history = useHistory();

  const [data, setData] = React.useState([
    {
      id: 800,
      name: 'پیش فروش',
      lname: 'پیش فروش',
    },
    {
      id: 801,
      name: 'رهن و اجاره',
      lname: 'رهن و اجاره',
    },
    {
      id: 802,
      name: 'فروش',
      lname: 'فروش',
    }
  ]);

  const cols = React.useMemo(
    () => [
      {
        Header: 'شناسه',
        accessor: 'id',
        cellClass: 'list-item-heading',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'نام',
        accessor: 'name',
        cellClass: 'list-item-heading',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'نامک',
        accessor: 'lname',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: '	توضیحات',
        accessor: 'Customer',
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
          <DropdownItem onClick={() => history.push(`edit/${id}`)}>
            ویرایش مشتری
          </DropdownItem>
          <DropdownItem onClick={() => {
          }}>
            لیست آگهی ها
          </DropdownItem>
          <DropdownItem onClick={() => {
            setSelectedId(id);
            setNotApproveModal(true);
          }}>
            مشاهده
          </DropdownItem>
          <DropdownItem>
            حذف مشتری
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

  const [isShow, setIsShow] = useState(false);

  const secToggle = () => setIsShow(!isShow);

  const [price, setPrice] = useState([
    {
      name: 'بله',
      value: 1
    },
    {
      name: 'خیر',
      value: 2
    },
  ]);

  const [search, setSearch] = useState([
    {
      name: 'بله',
      value: 3
    },
    {
      name: 'خیر',
      value: 4
    }
  ]);

  return (
    <Suspense fallback={<div className="loading" />}>
      <Row>
        <Colxx xss="12">
          <Breadcrumb heading={"mywelfare"} match={match} />
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
          <Card className="mb-4">
            <CardBody>
              <TableAjax columns={cols} data={data} fetchData={fetchData} loading={loading} pageCount={pageCount} />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx md={12}>
          <Card>
            <CardHeader id="mainhead" onClick={secToggle} className="Bold">افزودن امکانات رفاهی<i className='simple-icon-arrow-down ml-3 Bold'></i></CardHeader>
            <Separator />
            <CardBody id="mainbody">
              <Collapse id="setCollapse" isOpen={isShow}>
                <AlertError errors={serverError} />
                <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
                  {({ errors, touched, setFieldValue, setFieldTouched, values }) => (
                    <Form className="av-tooltip tooltip-label-right">
                      <Row>
                        <Colxx md={6}>
                          <FormGroup>
                            <Label>نام</Label>
                            <Field name={"names"} className={'form-control'} required />
                            {errors.names && touched.names && (
                              <div className="invalid-feedback d-block">
                                {errors.names}
                              </div>
                            )}
                          </FormGroup>
                        </Colxx>
                        <Colxx md={6}>
                          <FormGroup>
                            <Label>نامک</Label>
                            <Field name={"lnames"} className={'form-control'} required />
                            {errors.lnames && touched.lnames && (
                              <div className="invalid-feedback d-block">
                                {errors.lnames}
                              </div>
                            )}
                          </FormGroup>
                        </Colxx>
                      </Row>
                      <Row>
                        <Colxx md={6}>
                          <FormGroup>
                            <Label>ترتیب</Label>
                            <Field name={"Arrangement"} className={'form-control'} required />
                            {errors.Arrangement && touched.Arrangement && (
                              <div className="invalid-feedback d-block">
                                {errors.Arrangement}
                              </div>
                            )}
                          </FormGroup>
                        </Colxx>
                        <Colxx md={6}>
                          <FormGroup>
                            <Label>انواع ملک</Label>
                            <FormikReactSelect onChange={setFieldValue} onBlur={setFieldTouched} name={'statuses'} value={values.statuses} options={[
                              {
                                label: 'آپارتمان',
                                value: '0'
                              },
                              {
                                label: 'تجاری',
                                value: '1'
                              },
                              {
                                label: 'باغ و ویلا',
                                value: '2'
                              },
                              {
                                label: 'کارخانه',
                                value: '3'
                              },
                              {
                                label: 'سوله',
                                value: '4'
                              },
                              {
                                label: 'زمین',
                                value: '5'
                              }
                            ]} />
                            {errors.statuses && touched.statuses && (
                              <div className="invalid-feedback d-block">
                                {errors.statuses}
                              </div>
                            )}
                          </FormGroup>
                        </Colxx>
                      </Row>
                      <Row>
                        <Colxx md={6}>
                          <FormGroup>
                            <Label>توضیحات</Label>
                            <ReactQuill
                              theme="snow"
                              value={values.descriptions}
                              onChange={(val) => setFieldValue('descriptions', val)}
                              modules={quillModules}
                              formats={quillFormats}
                              id="mainQuill"
                            />
                            {errors.descriptions && touched.descriptions && (
                              <div className="invalid-feedback d-block">
                                {errors.descriptions}
                              </div>
                            )}
                          </FormGroup>
                        </Colxx>
                        <Colxx md={6}>
                          <FormGroup>
                            <Label>انتخاب آیکون</Label>
                            <Card id="borderCard">
                              <CardHeader id="borderheader">آیکون این نوع معامله را انتخاب کنید<i className="iconsminds-upload ml-2 Bold"></i></CardHeader>
                              <CardBody></CardBody>
                            </Card>
                          </FormGroup>
                        </Colxx>
                      </Row>
                      <Row>
                        <Colxx md={12}>
                          <FormGroup>
                            <Label>ویژگی های وابسته</Label>
                            <Card id="borderCard">
                              <CardHeader className="mt-2">لیست دلخواه خود را ایجاد کنید<i className="iconsminds-add ml-2 Bold"></i></CardHeader>
                              <Separator />
                              <CardBody>
                                <Row>
                                  <FieldArray name="lists">
                                    {({ insert, remove, push }) => (
                                      <>
                                        {values.lists.length > 0 && values.lists.map((item, index) => (
                                          <Colxx md={6}>
                                            <FormGroup id="borderForm" key={index}>
                                              <Card>
                                                <CardHeader id="optionheader"><button className="btn btn-primary" onClick={() => push({ name: '', icon: '' })}>ایجاد برگه جدید</button><i className='simple-icon-close' onClick={() => remove(index)}></i></CardHeader>
                                                <CardBody>
                                                  <Row>
                                                    <Colxx md={6}>
                                                      <FormGroup>
                                                        <Label>شناسه</Label>
                                                        <Field name={`lists.${index}.id`} className={'form-control'} required />
                                                        {errors.lists && errors.lists[index].id && touched.lists[index].id && (
                                                          <div className="invalid-feedback d-block">
                                                            {errors.lists[index].id}
                                                          </div>
                                                        )}
                                                      </FormGroup>
                                                    </Colxx>
                                                    <Colxx md={6}>
                                                      <FormGroup>
                                                        <Label>عنوان</Label>
                                                        <Field name={`lists.${index}.title`} className={'form-control'} required />
                                                        {errors.lists && errors.lists[index].title && touched.lists[index].title && (
                                                          <div className="invalid-feedback d-block">
                                                            {errors.lists[index].title}
                                                          </div>
                                                        )}
                                                      </FormGroup>
                                                    </Colxx>
                                                  </Row>
                                                  <Row>
                                                    <Colxx md={6}>
                                                      <FormGroup>
                                                        <Label>نوع فیلد </Label>
                                                        <Field name={`lists.${index}.field`} className={'form-control'} required />
                                                        {errors.lists && errors.lists[index].field && touched.lists[index].field && (
                                                          <div className="invalid-feedback d-block">
                                                            {errors.lists[index].field}
                                                          </div>
                                                        )}
                                                      </FormGroup>
                                                    </Colxx>
                                                    <Colxx md={6}>
                                                      <FormGroup>
                                                        <Label> حالت های ممکنjson</Label>
                                                        <Field name={`lists.${index}.json`} className={'form-control'} required />
                                                        {errors.lists && errors.lists[index].json && touched.lists[index].json && (
                                                          <div className="invalid-feedback d-block">
                                                            {errors.lists[index].json}
                                                          </div>
                                                        )}
                                                      </FormGroup>
                                                    </Colxx>
                                                  </Row>
                                                  <Row>
                                                    <Colxx md={6}>
                                                      <FormGroup>
                                                        <Label>اطلاعات crm  </Label>
                                                        <Field name={`lists.${index}.crm`} className={'form-control'} required />
                                                        {errors.lists && errors.lists[index].crm && touched.lists[index].crm && (
                                                          <div className="invalid-feedback d-block">
                                                            {errors.lists[index].crm}
                                                          </div>
                                                        )}
                                                      </FormGroup>
                                                    </Colxx>
                                                    <Colxx md={6}>
                                                      <FormGroup>
                                                        <Label>انتخاب کمیت </Label>
                                                        <FormikReactSelect onChange={setFieldValue} onBlur={setFieldTouched} name={`lists.${index}.choose`} value={values.choose} options={[
                                                          {
                                                            label: 'هیچکدام',
                                                            value: '0'
                                                          },
                                                          {
                                                            label: 'قیمت',
                                                            value: '1'
                                                          },
                                                          {
                                                            label: 'مساحت',
                                                            value: '2'
                                                          },
                                                          {
                                                            label: 'طول',
                                                            value: '3'
                                                          }
                                                        ]} />
                                                      </FormGroup>
                                                    </Colxx>
                                                  </Row>
                                                  <Row>
                                                    <Colxx md={6}>
                                                      <Label className="mb-3">قیمت آگهی نشان داده شود :</Label>
                                                      <FormGroup>
                                                        {price && price.map((item, key) => (
                                                          <div className="form-check form-check-inline">
                                                            <Label><Field name={`lists.${index}.Price`} type="radio" className="mr-2" value={item.value + ""} />{item.name}</Label>
                                                          </div>
                                                        ))
                                                        }
                                                      </FormGroup>
                                                    </Colxx>
                                                    <Colxx md={6}>
                                                      <Label className="mb-3">فیلتر جستجو نشان داده شود :</Label>
                                                      <FormGroup>
                                                        {search && search.map((item, key) => (
                                                          <div className="form-check form-check-inline">
                                                            <Label><Field name={`lists.${index}.Search`} type="radio" className="mr-2" value={item.value + ""} />{item.name}</Label>
                                                          </div>
                                                        ))
                                                        }
                                                      </FormGroup>
                                                    </Colxx>
                                                  </Row>
                                                </CardBody>
                                              </Card>
                                            </FormGroup>
                                          </Colxx>
                                        ))
                                        }
                                      </>
                                    )}
                                  </FieldArray>
                                </Row>
                              </CardBody>
                            </Card>
                          </FormGroup>
                        </Colxx>
                      </Row>
                      <Row>
                        <Colxx id="mainRow" md={12}>
                          <Button type="submit" className="btn btn-primary">افزودن نوع معامله</Button>
                        </Colxx>
                      </Row>
                    </Form>
                  )}
                </Formik>
              </Collapse>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </Suspense >
  );

}
export default welfare;
