import React, { Suspense, useState } from "react";
import classnames from 'classnames';
import {
  Button,
  Card,
  CardBody,
  Row,
  Collapse,
  FormGroup,
  Label,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import AlertError from "../../../components/AlertError";
import { FormikReactSelect } from "../../../containers/form-validations/FormikFields";
import { Field, Form, Formik } from "formik";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const MainCollapse = () => {
  const [open, setOpen] = useState(false);

  const mainToggle = () => {
    setOpen(!open)
  };

  const [initialValues, setInitialValues] = React.useState({
    // confirm: [],
    land_type: [],
    transaction: [],
    metas: {
      land_type: [],
      transaction: [],
    },
    status: '',
    Document: '',
    Condition: '',
    date: '',
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const [serverError, setServerError] = React.useState({});

  const [property, setProperty] = useState([
    { name: 'آپارتمان', value: 44, fields: [{ type: 'checkbox', label: "نوع ساخت" }, { type: 'text', label: " 2نوع ساخت" }] },
    { name: 'تجاری', value: 45 },
    { name: 'حیاط', value: 46 },
    { name: 'باغ و ویلا', value: 47 },
    { name: 'سوله', value: 48 }
  ]);

  const [advertising, setAdvertising] = useState([
    { name: ' فروش', value: 49, fields: [{ type: 'checkbox', label: "آگهی" }, { type: 'text', label: "آگهی2" }] },
    { name: ' رهن و اجاره', value: 50 },
    { name: ' پیش فروش', value: 51 },
    { name: '  مشارکت ', value: 52 }
  ]);

  const [features, setFeatures] = useState([
    { name: ' آسانسور', value: 72 },
    { name: ' پارکینگ', value: 73 },
    { name: ' فوری', value: 74 },
    { name: ' قابل معاوضه ', value: 75 },
    { name: ' لوکس', value: 76 },
    { name: ' انباری', value: 77 }
  ]);

  const [possibilities, setPossibilities] = useState([
    { name: 'وای فای ', value: 80 },
    { name: ' استخر', value: 81 },
    { name: ' تراس', value: 82 },
    { name: 'امکانات بدنسازی', value: 83 },
    { name: '  سالن اجتماعات ', value: 84 }
  ]);

  const [showFirstDiv, setShowFirstDiv] = useState(false);

  const isShow = () => {
    setShowFirstDiv(!showFirstDiv);
  };

  const [showSeccondDiv, setShowSeccondDiv] = useState(false);

  const isShowon = () => {
    setShowSeccondDiv(!showSeccondDiv);
  };

  const [activeTab, setActiveTab] = useState('1');

  const TabToggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <>
      <Suspense fallback={<div className={'loading'} />}>
        <div className="col-md-12 maincollapse Bold" onClick={mainToggle}>فیلتر کردن نتایج{!open ? <i class="fa fa-angle-down"></i> : <i class="fa fa-angle-up"></i>}</div>
        <Collapse id="diffrentCollapse" isOpen={open}>
          <Colxx xss={12} className="diffrentColxx">
            <Card className="diffrentCard">
              <CardBody>
                <AlertError errors={serverError} />
                <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
                  {({ errors, touched, setFieldValue, setFieldTouched, values }) => (
                    <Form className="av-tooltip tooltip-label-right">
                      <Row>
                        <Colxx md={12}>
                          <Row>
                            <Colxx md={6}>
                              <Label>وضعیت تأیید آگهی</Label>
                              <FormGroup>
                                <FormGroup check inline>
                                  <Field name="confirm.0" type="checkbox" className="mr-1" value="1" />
                                  <Label check>رد شده</Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Field name="confirm.1" type="checkbox" className="mr-1" value="2" />
                                  <Label check>تأیید شده </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Field name="confirm.2" type="checkbox" className="mr-1" value="3" />
                                  <Label check> در انتظار تأیید</Label>
                                </FormGroup>
                              </FormGroup>
                            </Colxx>
                            <Colxx md={4}>
                              <Label>وضعیت انتشار آگهی</Label>
                              <FormGroup>
                                <FormGroup check inline>
                                  <Field name="main.status[]" type="checkbox" className="mr-1" defaultValues={1} />
                                  <Label check> پیش نویس</Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Field name="main.status[]" type="checkbox" className="mr-1" defaultValues={2} />
                                  <Label check>منتشر شده </Label>
                                </FormGroup>
                              </FormGroup>
                            </Colxx>
                            <Colxx md={2}>
                              <Label>نوع آگهی</Label>
                              <FormGroup check inline>
                                <Field name="metas.special[]" type="checkbox" className="mr-1" />
                                <Label check> آگهی های ویژه </Label>
                              </FormGroup>
                            </Colxx>
                          </Row>
                          <Separator className="mb-5" />
                        </Colxx>
                        <Colxx md={12}>
                          <Row>
                            <Colxx md={6}>
                              <Label>
                                نویسنده آگهی
                              </Label>
                              <FormGroup>
                                <FormikReactSelect onChange={setFieldValue} onBlur={setFieldTouched} name={'status'} value={values.status} options={[
                                  {
                                    label: 'پدرام',
                                    value: '0'
                                  },
                                  {
                                    label: 'پدرام',
                                    value: '1'
                                  }
                                ]} />
                              </FormGroup>
                            </Colxx>
                            <Colxx md={6}>
                              <Label>
                                کد آگهی
                              </Label>
                              <FormGroup>
                                <Field className="form-control" type="text" name="pl" />
                              </FormGroup>
                            </Colxx>
                          </Row>
                          <Separator className="mb-5" />
                        </Colxx>
                        <Colxx md={12}>
                          <Row>
                            <Colxx md={3}>
                              <Label>استان</Label>
                              <FormGroup>
                                <FormikReactSelect name="metas[region][ostan]" onChange={setFieldValue} onBlur={setFieldTouched} name={'State'} value={values.State} options={[
                                  {
                                    label: 'آذربایجان شرقی',
                                    value: '0'
                                  },
                                  {
                                    label: 'آذربایجان غربی',
                                    value: '1'
                                  },
                                  {
                                    label: 'اردبیل',
                                    value: '2'
                                  },
                                  {
                                    label: 'اصفهان',
                                    value: '3'
                                  },
                                  {
                                    label: 'ایلام',
                                    value: '4'
                                  },
                                  {
                                    label: 'سیستان و بلوچستان',
                                    value: '5'
                                  }
                                ]} />
                              </FormGroup>
                            </Colxx>
                            <Colxx md={3}>
                              <Label>شهر</Label>
                              <FormGroup>
                                <FormikReactSelect name="metas[region][shahrestan]" onChange={setFieldValue} onBlur={setFieldTouched} name={'city'} value={values.city} options={[
                                  {
                                    label: 'آذربایجان شرقی',
                                    value: '0'
                                  },
                                  {
                                    label: 'آذربایجان غربی',
                                    value: '1'
                                  },
                                  {
                                    label: 'اردبیل',
                                    value: '2'
                                  },
                                  {
                                    label: 'اصفهان',
                                    value: '3'
                                  },
                                  {
                                    label: 'ایلام',
                                    value: '4'
                                  },
                                  {
                                    label: 'سیستان و بلوچستان',
                                    value: '5'
                                  }
                                ]} />
                              </FormGroup>
                            </Colxx>
                            <Colxx md={3}>
                              <Label>منطقه</Label>
                              <FormGroup>
                                <FormikReactSelect name="metas[region][mantaghe]" onChange={setFieldValue} onBlur={setFieldTouched} name={'city'} value={values.city} options={[
                                  {
                                    label: 'آذربایجان شرقی',
                                    value: '0'
                                  },
                                  {
                                    label: 'آذربایجان غربی',
                                    value: '1'
                                  },
                                  {
                                    label: 'اردبیل',
                                    value: '2'
                                  },
                                  {
                                    label: 'اصفهان',
                                    value: '3'
                                  },
                                  {
                                    label: 'ایلام',
                                    value: '4'
                                  },
                                  {
                                    label: 'سیستان و بلوچستان',
                                    value: '5'
                                  }
                                ]} />
                              </FormGroup>
                            </Colxx>
                            <Colxx md={3}>
                              <Label>بخش</Label>
                              <FormGroup>
                                <FormikReactSelect name="metas[region][bakhsh]" onChange={setFieldValue} onBlur={setFieldTouched} name={'city'} value={values.city} options={[
                                  {
                                    label: 'آذربایجان شرقی',
                                    value: '0'
                                  },
                                  {
                                    label: 'آذربایجان غربی',
                                    value: '1'
                                  },
                                  {
                                    label: 'اردبیل',
                                    value: '2'
                                  },
                                  {
                                    label: 'اصفهان',
                                    value: '3'
                                  },
                                  {
                                    label: 'ایلام',
                                    value: '4'
                                  },
                                  {
                                    label: 'سیستان و بلوچستان',
                                    value: '5'
                                  }
                                ]} />
                              </FormGroup>
                            </Colxx>
                          </Row>
                          <Separator className="mb-5" />
                        </Colxx>
                        <Colxx md={12}>
                          <Row>
                            <Colxx md={4}>
                              <Label>
                                وضعیت سند
                              </Label>
                              <FormGroup>
                                <FormikReactSelect onChange={setFieldValue} onBlur={setFieldTouched} name={'Document'} value={values.Document} options={[
                                  {
                                    label: 'سند شش دانگ',
                                    value: '0'
                                  },
                                  {
                                    label: 'قراردادی',
                                    value: '1'
                                  }
                                ]} />
                              </FormGroup>
                            </Colxx>
                            <Colxx md={4}>
                              <Label>
                                موقعیت
                              </Label>
                              <FormGroup>
                                <FormikReactSelect onChange={setFieldValue} onBlur={setFieldTouched} name={'Condition'} value={values.Condition} options={[
                                  {
                                    label: 'شمالی',
                                    value: '0'
                                  },
                                  {
                                    label: 'جنوبی',
                                    value: '1'
                                  }
                                ]} />
                              </FormGroup>
                            </Colxx>
                            <Colxx md={4}>
                              <Label>
                                سال ساخت
                              </Label>
                              <FormGroup>
                                <FormikReactSelect onChange={setFieldValue} onBlur={setFieldTouched} name={'date'} value={values.date} options={[
                                  {
                                    label: '1370',
                                    value: '0'
                                  },
                                  {
                                    label: '1380',
                                    value: '1'
                                  }
                                ]} />
                              </FormGroup>
                            </Colxx>
                          </Row>
                          <Separator className="mb-5" />
                        </Colxx>
                        <Colxx md={12}>
                          <Label className="mb-3">نوع ملک</Label>
                          <Row>
                            <Colxx md={8}>
                              <FormGroup>
                                {property && property.map((item, key) => (
                                  <div className="form-check form-check-inline">
                                    <Label>
                                      <Field type="checkbox" name="metas.land_type" className="mr-2" value={item.value + ""} />
                                      {item.name}
                                    </Label>
                                  </div>
                                ))
                                }
                              </FormGroup>
                            </Colxx>
                            <Colxx md={4} id="col">
                              <Button className="btn mb-3" onClick={isShow}>جستجوی پیشرفته</Button>
                            </Colxx>
                          </Row>
                          <Row>
                            {showFirstDiv &&
                              <Colxx md={6}>
                                <div>
                                  <Nav tabs>
                                    {property && property.map((item, key) => (
                                      <>
                                        <NavItem>
                                          <NavLink disabled={!values.metas.land_type.includes(item.value + "")}
                                            className={classnames({ active: (activeTab === item.value && values.metas.land_type.includes(item.value + "")) })}
                                            onClick={() => { TabToggle(item.value + ""); }}
                                          >
                                            {item.name}
                                          </NavLink>
                                        </NavItem>
                                      </>
                                    ))
                                    }
                                  </Nav>
                                  <TabContent className="TabContent" activeTab={activeTab}>
                                    {property && property.map((item, key) => (
                                      <TabPane tabId={item.value + ""}>
                                        <Row>
                                          {item.fields && item.fields.length > 0 && item.fields.map((field) => {
                                            return (<Colxx md={12}>
                                              <Label>
                                                <Field name="jh" type={field.type} className="mr-2" />{field.label}
                                              </Label>
                                            </Colxx>)
                                          })}
                                        </Row>
                                      </TabPane>
                                    ))}
                                  </TabContent>
                                </div>
                              </Colxx>
                            }
                          </Row>
                          <Separator className="mb-5" />
                        </Colxx>
                        <Colxx md={12}>
                          <Label className="mb-3">نوع آگهی</Label>
                          <Row>
                            <Colxx md={8}>
                              <FormGroup>
                                {advertising && advertising.map((item, key) => (
                                  <div className="form-check form-check-inline">
                                    <Label><Field name="metas.transaction" value={item.value + ""} type="checkbox" className="mr-2" />{item.name}</Label>
                                  </div>
                                ))
                                }
                              </FormGroup>
                            </Colxx>
                            <Colxx md={4} id="col">
                              <Button className="btn mb-3" onClick={isShowon}>جستجوی پیشرفته</Button>
                            </Colxx>
                          </Row>
                          <Row>
                            {showSeccondDiv &&
                              <Colxx md={6}>
                                <div>
                                  <Nav tabs>
                                    {advertising && advertising.map((item, key) => (
                                      <NavItem>
                                        <NavLink disabled={!values.metas.transaction.includes(item.value + "")}
                                          className={classnames({ active: activeTab === item.value + "" && values.metas.transaction.includes(item.value + "") })}
                                          onClick={() => { TabToggle(item.value + ""); }}
                                        >
                                          {item.name}
                                        </NavLink>
                                      </NavItem>
                                    ))
                                    }
                                  </Nav>
                                  <TabContent className="TabContent" activeTab={activeTab}>
                                    {advertising && advertising.map((item, key) => (
                                      <TabPane tabId={item.value + ""}>
                                        <Row>
                                          {item.fields && item.fields.length > 0 && item.fields.map((field) => {
                                            return (<Colxx md={12}>
                                              <Label>
                                                <Field name="oo" type={field.type} className="mr-2" />{field.label}
                                              </Label>
                                            </Colxx>
                                            );
                                          })
                                          }
                                        </Row>
                                      </TabPane>
                                    ))}
                                  </TabContent>
                                </div>
                              </Colxx>
                            }
                          </Row>
                          <Separator className="mb-5" />
                        </Colxx>
                        <Colxx md={12}>
                          <Label className="mb-3">ویژگی های ملک</Label>
                          <FormGroup>
                            {features && features.map((item, key) => (
                              <div className="form-check form-check-inline">
                                <Label><Field name="p" type="checkbox" className="mr-2"  value={item.value + ""}/>{item.name}</Label>
                              </div>
                            ))
                            }
                          </FormGroup>
                          <Separator className="mb-5" />
                        </Colxx>
                        <Colxx md={12}>
                          <Label className="mb-3">امکانات رفاهی</Label>
                          <FormGroup>
                            {possibilities && possibilities.map((item, key) => (
                              <div className="form-check form-check-inline">
                                <Label><Field name="u" type="checkbox" className="mr-2" value={item.value + ""} />{item.name}</Label>
                              </div>
                            ))
                            }
                          </FormGroup>
                          <Separator className="mb-5" />
                        </Colxx>
                        <Colxx md={12}>
                          <Row>
                            <Colxx className="md-6">
                              <Label>تاریخ انتشار</Label>
                              <FormGroup>
                                <DatePicker placeholder="از"
                                  calendar={persian}
                                  locale={persian_fa}
                                  calendarPosition="bottom-right"
                                  className="form-control"
                                  id="specialData"
                                />
                                <DatePicker placeholder="تا"
                                  calendar={persian}
                                  locale={persian_fa}
                                  calendarPosition="bottom-right"
                                  className="form-control"
                                  id="specialData"
                                />
                              </FormGroup>
                            </Colxx>
                            <Colxx className="md-6">
                              <Label>آخرین بروز رسانی</Label>
                              <FormGroup>
                                <DatePicker placeholder="از"
                                  calendar={persian}
                                  locale={persian_fa}
                                  calendarPosition="bottom-right"
                                  className="form-control"
                                  id="specialData"
                                />
                                <DatePicker placeholder="تا"
                                  calendar={persian}
                                  locale={persian_fa}
                                  calendarPosition="bottom-right"
                                  className="form-control"
                                  id="specialData"
                                />
                              </FormGroup>
                            </Colxx>
                          </Row>
                          <Separator className="mb-5" />
                        </Colxx>
                        <Colxx md={12}>
                          <Button className="btn" type="submit">جستجو</Button>
                        </Colxx>
                      </Row>
                    </Form>
                  )}
                </Formik>
              </CardBody>
            </Card>
          </Colxx>
        </Collapse>
      </Suspense>
    </>
  );
};
export default MainCollapse;
