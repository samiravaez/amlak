import React, { Suspense, useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  Row,
  Col,
  CardBody,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { Field, Form, Formik } from "formik";
import AlertError from "../../../components/AlertError";
import { FormikReactSelect } from "../../../containers/form-validations/FormikFields";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

const AddCustomer = ({match}) => {

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

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
    phone: '',
    name: '',
    gender: '',
    Landline: '',
    mobile: '',
    job: '',
    web: '',
    NationalCode: '',
    UserName: 123456,
    NumberOfChildren: '',
    married: '',
    email: '',
    Fund: '',
    Income: '',
    Presence: 0,
    payment: 0,
    Consulting: 0,
    customer: 0,
    address: '',
    Location: '',
    submit: '',
    componyName: '',
    Agent: '',
    Place: '',
    Class: '',
    fax: '',
    NationalId: '',
    date: '',
    NumberOfStaff: '',
    code: '',
    kind: 0,
    mycustomer: '',
    Company: '',
    has: '',
    time: '',
  });

  const onSubmit = () => {

  };

  const [value, setValue] = useState('');

  const change = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setValue(e.target.value)
    }
  };

  return (
    <>
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
        </Row>
      </Suspense>
      <Card>
        <CardBody>
          <div>
            <Nav tabs>
              <NavItem className="Bold">
                <NavLink
                  className={({ active: activeTab === '1' })}
                  onClick={() => { toggle('1'); }}
                >
                  حقیقی
                </NavLink>
              </NavItem>
              <NavItem className="Bold">
                <NavLink
                  className={({ active: activeTab === '2' })}
                  onClick={() => { toggle('2'); }}
                >
                  حقوقی
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane className="mt-3" tabId="1">
                <AlertError errors={serverError} />
                <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
                  {({ errors, touched, setFieldValue, setFieldTouched, values }) => (
                    <Form>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label><span id="redspan">*</span>&nbsp;تلفن :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"phone"} />
                            {errors.phone && touched.phone && (
                              <div className="invalid-feedback d-block">
                                {errors.phone}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label><span id="redspan">*</span>&nbsp;کد ملی  :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"NationalCode"} />
                            {errors.NationalCode && touched.NationalCode && (
                              <div className="invalid-feedback d-block">
                                {errors.NationalCode}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label><span id="redspan">*</span>&nbsp;نام و نام خانوادگی :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"name"} />
                            {errors.name && touched.name && (
                              <div className="invalid-feedback d-block">
                                {errors.name}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label><span id="redspan">*</span>&nbsp;نام کاربری  :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"UserName"} />
                            {errors.UserName && touched.UserName && (
                              <div className="invalid-feedback d-block">
                                {errors.UserName}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label><span id="redspan">*</span>&nbsp;تعداد فرزند  :</Label>
                            <Field id="shadow" type="text" className="form-control" name={"NumberOfChildren"} />
                            {errors.NumberOfChildren && touched.NumberOfChildren && (
                              <div className="invalid-feedback d-block">
                                {errors.NumberOfChildren}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label><span id="redspan">*</span>&nbsp;وبسایت  :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"web"} placeholder="www.tabtarh.com" />
                            {errors.web && touched.web && (
                              <div className="invalid-feedback d-block">
                                {errors.web}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label>درآمد ماهیانه  :</Label>
                            <Field id="shadow" className="form-control" name={"Income"} placeholder="به تومان" />
                            {errors.Income && touched.Income && (
                              <div className="invalid-feedback d-block">
                                {errors.Income}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label>تلفن ثابت :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"Landline"} />
                            {errors.Landline && touched.Landline && (
                              <div className="invalid-feedback d-block">
                                {errors.Landline}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label>تلفن همراه :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"mobile"} />
                            {errors.mobile && touched.mobile && (
                              <div className="invalid-feedback d-block">
                                {errors.mobile}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label>ایمیل :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"email"} placeholder="example@gmail.com" />
                            {errors.email && touched.email && (
                              <div className="invalid-feedback d-block">
                                {errors.email}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label>شغل  :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"job"} placeholder="آزاد" />
                            {errors.job && touched.job && (
                              <div className="invalid-feedback d-block">
                                {errors.job}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label>سرمایه تقریبی  :</Label>
                            <Field id="shadow" className="form-control" name={"Fund"} placeholder="به تومان" />
                            {errors.Fund && touched.Fund && (
                              <div className="invalid-feedback d-block">
                                {errors.Fund}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label>نوع  مشتری :</Label>
                            <FormikReactSelect name="customer" onChange={setFieldValue} onBlur={setFieldTouched} value={values.customer} options={[
                              {
                                label: 'حضوری',
                                value: '0'
                              },
                              {
                                label: 'تلفنی',
                                value: '1'
                              }
                            ]} />
                            {errors.customer && touched.customer && (
                              <div className="invalid-feedback d-block">
                                {errors.customer}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label>نحوه پرداخت  :</Label>
                            <FormikReactSelect name="payment" onChange={setFieldValue} onBlur={setFieldTouched} value={values.payment} options={[
                              {
                                label: 'نقدی',
                                value: '0'
                              },
                              {
                                label: 'معاوضه',
                                value: '1'
                              },
                              {
                                label: 'وام',
                                value: '2'
                              },
                              {
                                label: 'فروش ملک های دیگر',
                                value: '3'
                              }
                            ]} />
                            {errors.payment && touched.payment && (
                              <div className="invalid-feedback d-block">
                                {errors.payment}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label>حضور با  :</Label>
                            <FormikReactSelect name="Presence" onChange={setFieldValue} onBlur={setFieldTouched} value={values.Presence} options={[
                              {
                                label: 'همه',
                                value: '0'
                              },
                              {
                                label: 'همکار',
                                value: '1'
                              },
                              {
                                label: 'غیره',
                                value: '2'
                              }
                            ]} />
                            {errors.Presence && touched.Presence && (
                              <div className="invalid-feedback d-block">
                                {errors.Presence}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label>نوع مشاوره اولیه  :</Label>
                            <FormikReactSelect name="Consulting" onChange={setFieldValue} onBlur={setFieldTouched} value={values.Consulting} options={[
                              {
                                label: 'جدی-آنی',
                                value: '0'
                              },
                              {
                                label: 'درحال جست و جو',
                                value: '1'
                              },
                              {
                                label: 'گذری',
                                value: '2'
                              },
                              {
                                label: 'مبتدی',
                                value: '3'
                              },
                              {
                                label: 'مشتری سرمایه گذار',
                                value: '4'
                              },
                              {
                                label: 'واسطه',
                                value: '5'
                              }
                            ]} />
                            {errors.Consulting && touched.Consulting && (
                              <div className="invalid-feedback d-block">
                                {errors.Consulting}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md={6}>
                          <FormGroup tag="fieldset">
                            <Label>جنسیت :</Label>
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="gender" />{' '}
                                <span className="ml-3">زن</span>
                              </Label>
                              <Label className="ml-3" check>
                                <Input type="radio" name="gender" />{' '}
                                <span className="ml-3">مرد</span>
                              </Label>
                            </FormGroup>
                            {errors.gender && touched.gender && (
                              <div className="invalid-feedback d-block">
                                {errors.gender}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup tag="fieldset">
                            <Label>وضعیت تأهل :</Label>
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="married" />{' '}
                                <span className="ml-3">مجرد</span>
                              </Label>
                              <Label className="ml-3" check>
                                <Input type="radio" name="married" />{' '}
                                <span className="ml-3">متأهل</span>
                              </Label>
                            </FormGroup>
                            {errors.married && touched.married && (
                              <div className="invalid-feedback d-block">
                                {errors.married}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md={12}>
                          <FormGroup>
                            <Label>آدرس محل کار  :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"address"} />
                            {errors.address && touched.address && (
                              <div className="invalid-feedback d-block">
                                {errors.address}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={12}>
                          <FormGroup>
                            <Label><span id="redspan">*</span>&nbsp;آدرس محل زندگی  :</Label>
                            <Field id="shadow" className="form-control" name={"Location"} />
                            {errors.Location && touched.Location && (
                              <div className="invalid-feedback d-block">
                                {errors.Location}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={3}>
                          <FormGroup>
                            <Button className="form-control" id="sub" type="submit">سابقه ذخیره شود</Button>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  )}
                </Formik>
              </TabPane>
              <TabPane className="mt-3" tabId="2">
                <AlertError errors={serverError} />
                <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
                  {({ errors, touched, setFieldValue, setFieldTouched, values }) => (
                    <Form>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label>تلفن :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"phone"} />
                            {errors.phone && touched.phone && (
                              <div className="invalid-feedback d-block">
                                {errors.phone}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label><span id="redspan">*</span>&nbsp;شناسه ملی  :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"NationalId"} />
                            {errors.NationalId && touched.NationalId && (
                              <div className="invalid-feedback d-block">
                                {errors.NationalId}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label><span id="redspan">*</span>&nbsp;نام شرکت :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"componyName"} />
                            {errors.componyName && touched.componyName && (
                              <div className="invalid-feedback d-block">
                                {errors.componyName}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label>نام نماینده :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"Agent"} />
                            {errors.Agent && touched.Agent && (
                              <div className="invalid-feedback d-block">
                                {errors.Agent}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label>سمت :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"Place"} />
                            {errors.Place && touched.Place && (
                              <div className="invalid-feedback d-block">
                                {errors.Place}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label><span id="redspan">*</span>&nbsp;تعداد پرسنل  :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"NumberOfStaff"} />
                            {errors.NumberOfStaff && touched.NumberOfStaff && (
                              <div className="invalid-feedback d-block">
                                {errors.NumberOfStaff}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label>صنف شرکت :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"Class"} />
                            {errors.Class && touched.Class && (
                              <div className="invalid-feedback d-block">
                                {errors.Class}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label>ارباب رجوع  :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"mycustomer"} />
                            {errors.mycustomer && touched.mycustomer && (
                              <div className="invalid-feedback d-block">
                                {errors.mycustomer}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label>کد اقتصادی  :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"code"} />
                            {errors.code && touched.code && (
                              <div className="invalid-feedback d-block">
                                {errors.code}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label>شماره ثبتی  :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"num"} />
                            {errors.num && touched.num && (
                              <div className="invalid-feedback d-block">
                                {errors.num}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label>تلفن ثابت :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"Landline"} />
                            {errors.Landline && touched.Landline && (
                              <div className="invalid-feedback d-block">
                                {errors.Landline}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label><span id="redspan">*</span>&nbsp;تلفن همراه :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"mobile"} />
                            {errors.mobile && touched.mobile && (
                              <div className="invalid-feedback d-block">
                                {errors.mobile}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label>نوع مشاوره اولیه :</Label>
                            <FormikReactSelect id="shadow" name="Consulting" onChange={setFieldValue} onBlur={setFieldTouched} value={values.Consulting} options={[
                              {
                                label: 'جدی-آنی',
                                value: '0'
                              },
                              {
                                label: 'درحال جست و جو',
                                value: '1'
                              },
                              {
                                label: 'گذری',
                                value: '2'
                              },
                              {
                                label: 'مبتدی',
                                value: '3'
                              },
                              {
                                label: 'مشتری سرمایه گذار',
                                value: '4'
                              },
                              {
                                label: 'واسطه',
                                value: '5'
                              }
                            ]} />
                            {errors.Consulting && touched.Consulting && (
                              <div className="invalid-feedback d-block">
                                {errors.Consulting}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label><span id="redspan">*</span>&nbsp;نوع  مشتری  :</Label>
                            <FormikReactSelect id="shadow" name="customer" onChange={setFieldValue} onBlur={setFieldTouched} value={values.customer} options={[
                              {
                                label: 'حضوری',
                                value: '0'
                              },
                              {
                                label: 'تلفنی',
                                value: '1'
                              }
                            ]} />
                            {errors.customer && touched.customer && (
                              <div className="invalid-feedback d-block">
                                {errors.customer}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label>نوع شرکت  :</Label>
                            <FormikReactSelect id="shadow" name="kind" onChange={setFieldValue} onBlur={setFieldTouched} value={values.kind} options={[
                              {
                                label: 'سهامی عام',
                                value: '0'
                              },
                              {
                                label: 'مسئولیت محدود',
                                value: '1'
                              }
                            ]} />
                            {errors.kind && touched.kind && (
                              <div className="invalid-feedback d-block">
                                {errors.kind}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label>نحوه پرداخت :</Label>
                            <FormikReactSelect id="shadow" name="payment" onChange={setFieldValue} onBlur={setFieldTouched} value={values.payment} options={[
                              {
                                label: 'نقدی',
                                value: '0'
                              },
                              {
                                label: 'معاوضه',
                                value: '1'
                              },
                              {
                                label: 'وام',
                                value: '2'
                              },
                              {
                                label: 'فروش ملک های دیگر',
                                value: '3'
                              }
                            ]} />
                            {errors.payment && touched.payment && (
                              <div className="invalid-feedback d-block">
                                {errors.payment}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label>تاریخ تأسیس :</Label>
                            <div style={{ direction: "rtl" }}>
                              <DatePicker
                                id="shadow"
                                className="form-control"
                                calendar={persian}
                                name="date"
                                locale={persian_fa}
                                id="name"
                                calendarPosition="bottom-right"
                              />
                            </div>
                            {errors.date && touched.date && (
                              <div className="invalid-feedback d-block">
                                {errors.date}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label>ساعت کاری :</Label>
                            <Input
                              id="shadow"
                              type="time"
                              name="time"
                              id="exampleTime"
                              placeholder="time placeholder"
                            />
                            {errors.time && touched.time && (
                              <div className="invalid-feedback d-block">
                                {errors.time}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md={6}>
                          <FormGroup tag="fieldset">
                            <Label>جنسیت :</Label>
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="gender" />{' '}
                                <span className="ml-3">زن</span>
                              </Label>
                              <Label className="ml-3" check>
                                <Input type="radio" name="gender" />{' '}
                                <span className="ml-3">مرد</span>
                              </Label>
                            </FormGroup>
                            {errors.gender && touched.gender && (
                              <div className="invalid-feedback d-block">
                                {errors.gender}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup tag="fieldset">
                            <Label><span id="redspan">*</span>&nbsp;آیا شرکت نمایندگی دارد :</Label>
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="has" />{' '}
                                <span className="ml-3">بله</span>
                              </Label>
                              <Label className="ml-3" check>
                                <Input type="radio" name="has" />{' '}
                                <span className="ml-3">خیر</span>
                              </Label>
                            </FormGroup>
                            {errors.has && touched.has && (
                              <div className="invalid-feedback d-block">
                                {errors.has}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label> فکس  :</Label>
                            <Field id="shadow" className="form-control" type="text" name={"fax"} />
                            {errors.fax && touched.fax && (
                              <div className="invalid-feedback d-block">
                                {errors.fax}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md={12}>
                          <FormGroup>
                            <Label>آدرس کنونی شرکت  :</Label>
                            <Field id="shadow" className="form-control" name={"Company"} />
                            {errors.Company && touched.Company && (
                              <div className="invalid-feedback d-block">
                                {errors.Company}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={3}>
                          <FormGroup>
                            <Button className="form-control" id="sub" type="submit">سابقه ذخیره شود</Button>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  )}
                </Formik>
              </TabPane>
            </TabContent>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
export default AddCustomer;
