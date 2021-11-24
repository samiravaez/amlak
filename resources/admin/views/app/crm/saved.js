import React, { Suspense, useState } from "react";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import AlertError from "../../../components/AlertError";
import { FormikReactSelect } from "../../../containers/form-validations/FormikFields";
import { Field, Form, Formik } from "formik";
import classnames from 'classnames';
import {
  CardBody,
  Row,
  FormGroup,
  Label,
  Card,
  Button,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Table,
} from "reactstrap";

const Saved = ({ match }) => {

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
    customerTable: '',
    selectArena: '0',
    selectCity: '0',
    selectAlley: '0',
    metas: {
      land_type: [],
      land_branches: [],
      transaction: [],
    },
    Document: '',
    Condition: '',
    date: '',
    fbuild: '',
    sbuild: '',
    fArea: '',
    sArea: '',
  });

  const onSubmit = () => {

  };

  const [property, setProperty] = useState([
    { name: 'آپارتمان', value: 44, fields: [{ type: 'checkbox', label: "نوع ساخت" }, { type: 'text', label: " 2نوع ساخت" }] },
    { name: 'تجاری', value: 45 },
    { name: 'حیاط', value: 46 },
    { name: 'باغ و ویلا', value: 47 },
    { name: 'سوله', value: 48 }
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

  const [advertising, setAdvertising] = useState([
    { name: ' فروش', value: 49, fields: [{ type: 'checkbox', label: "آگهی" }, { type: 'text', label: "آگهی2" }] },
    { name: ' رهن و اجاره', value: 50 },
    { name: ' پیش فروش', value: 51 },
    { name: '  مشارکت ', value: 52 }
  ]);

  const [type, setType] = useState([
    { name: 'آسانسور', value: 50 },
    { name: 'فوري', value: 51 },
    { name: 'لوكس', value: 52 },
    { name: 'قابل معاوضه', value: 53 },
    { name: 'انباري', value: 54 }
  ])

  const [branches, setBranches] = useState([
    { name: 'آب', value: 60 },
    { name: 'گاز', value: 61 },
    { name: 'برق', value: 62 }
  ]);

  const [welfare, setWelfare] = useState([
    { name: 'وای فای', value: 70 },
    { name: 'استخر', value: 71 },
    { name: 'تراس', value: 72 },
    { name: 'امکانات بدنسازی', value: 73 },
    { name: 'سالن اجتماعات', value: 74 }
  ])
  return (
    <>
      <Suspense fallback={<div className={'loading'} />}>
        <AlertError errors={serverError} />
        <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
          {({ errors, touched, setFieldValue, setFieldTouched, values }) => (
            <Form>
              <Row>
                <Colxx md={12}>
                  <Card>
                    <CardBody>
                      <FormGroup>
                        <Label>مشخصات مشتري</Label>
                        <Table id="white" name={"customerTable"}>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>نام و نام خانوادگی</th>
                              <th>شماره تماس</th>
                              <th>ايميل</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td id="mainColor">پدرام پرتو</td>
                              <td id="mainColor">09333366999</td>
                              <td id="mainColor">pedram@gmail.com</td>
                            </tr>
                          </tbody>
                        </Table>
                        {errors.customerTable && touched.customerTable && (
                          <div className="invalid-feedback d-block">
                            {errors.customerTable}
                          </div>
                        )}
                      </FormGroup>
                      <FormGroup className="secGroup">
                        <Row>
                          <Col md={4}>
                            <Label>انتخاب ناحيه</Label>
                            <FormikReactSelect name={"selectArena"} onChange={setFieldValue} onBlur={setFieldTouched} options={[
                              {
                                label: 'انتخاب همه',
                                value: '0'
                              },
                              {
                                label: 'آذربایجان شرقی',
                                value: '1'
                              },
                              {
                                label: 'آذربایجان غربی',
                                value: '2'
                              },
                              {
                                label: 'اردبیل',
                                value: '3'
                              },
                              {
                                label: 'اصفهان',
                                value: '4'
                              },
                              {
                                label: 'ایلام',
                                value: '5'
                              },
                              {
                                label: 'بوشهر',
                                value: '6'
                              },
                              {
                                label: 'تهران',
                                value: '7'
                              },
                              {
                                label: 'چهارمحال و بختیاری',
                                value: '8'
                              }
                            ]}>
                            </FormikReactSelect>
                          </Col>
                          <Col md={4}>
                            <Label>انتخاب شهر</Label>
                            <FormikReactSelect name={"selectCity"} onChange={setFieldValue} onBlur={setFieldTouched} options={[
                              {
                                label: 'انتخاب همه',
                                value: '0'
                              },
                              {
                                label: 'آذرشهر',
                                value: '1'
                              },
                              {
                                label: 'اسكو',
                                value: '2'
                              },
                              {
                                label: 'اهر',
                                value: '3'
                              },
                              {
                                label: 'بستان آباد',
                                value: '4'
                              },
                              {
                                label: 'بناب',
                                value: '5'
                              },
                              {
                                label: 'تبريز',
                                value: '6'
                              },
                              {
                                label: 'جلفا',
                                value: '7'
                              },
                              {
                                label: 'سراب',
                                value: '8'
                              }
                            ]}>
                            </FormikReactSelect>
                          </Col>
                          <Col md={4}>
                            <Label>انتخاب منطقه</Label>
                            <FormikReactSelect name={"selectAlley"} onChange={setFieldValue} onBlur={setFieldTouched} options={[
                              {
                                label: 'انتخاب همه',
                                value: '0'
                              },
                              {
                                label: 'آبرسان',
                                value: '1'
                              },
                              {
                                label: 'ياغچيان',
                                value: '2'
                              },
                              {
                                label: 'باغچه بان',
                                value: '3'
                              },
                              {
                                label: 'آخوني',
                                value: '4'
                              },
                              {
                                label: 'زعفرانيه',
                                value: '5'
                              },
                              {
                                label: 'آرپادرسي',
                                value: '6'
                              },
                              {
                                label: 'گلكار',
                                value: '7'
                              },
                              {
                                label: 'استانداري',
                                value: '8'
                              },
                            ]}>
                            </FormikReactSelect>
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup className="thirdGroup">
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
                          <Colxx md={4} id="flexbutton">
                            <Button className="btn" onClick={isShow}>جستجوی پیشرفته</Button>
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
                                            <Label className="Bold">
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
                      </FormGroup>
                      <Separator className="mb-5" />
                      <FormGroup>
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
                          <Colxx md={4} id="flexbutton">
                            <Button className="btn" onClick={isShowon}>جستجوی پیشرفته</Button>
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
                                            <Label className="Bold">
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
                      </FormGroup>
                      <Separator className="mb-5" />
                      <Row md={12} id="rows">
                        <Colxx md={12}>
                          <Label id="labels">ويژگي هاي ملك</Label>
                          <FormGroup>
                            {type && type.map((item, key) => (
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
                        <Colxx md={12}>
                          <Label id="labels">انشعابات</Label>
                          <FormGroup>
                            {branches && branches.map((item, key) => (
                              <div className="form-check form-check-inline">
                                <Label>
                                  <Field type="checkbox" name="metas.land_branches" className="mr-2" value={item.value + ""} />
                                  {item.name}
                                </Label>
                              </div>
                            ))
                            }
                          </FormGroup>
                        </Colxx>
                        <Colxx md={12}>
                          <Label id="labels">امکانات رفاهی</Label>
                          <FormGroup>
                            {welfare && welfare.map((item, key) => (
                              <div className="form-check form-check-inline">
                                <Label>
                                  <Field type="checkbox" name="metas.land_branches" className="mr-2" value={item.value + ""} />
                                  {item.name}
                                </Label>
                              </div>
                            ))
                            }
                          </FormGroup>
                        </Colxx>
                      </Row>
                      <Separator className="mb-5" />
                      <Row>
                        <Colxx md={6}>
                          <FormGroup>
                            <Label>وضعیت سند</Label>
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
                        <Colxx md={6}>
                          <FormGroup>
                            <Label>موقعیت</Label>
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
                      </Row>
                      <Row>
                        <Colxx md={6}>
                          <Label>سال ساخت</Label>
                          <Field className="form-control" type="text" placeholder="از" name={'fbuild'} value={values.fbuild} />
                          <Field className="form-control mt-2" type="text" placeholder="تا" name={'sbuild'} value={values.sbuild} />
                        </Colxx>
                        <Colxx md={6}>
                          <Label>متراژ</Label>
                          <Field className="form-control" type="text" placeholder="از" name={'fArea'} value={values.fArea} />
                          <Field className="form-control mt-2" type="text" placeholder="تا" name={'sArea'} value={values.sArea} />
                        </Colxx>
                      </Row>
                    </CardBody>
                  </Card>
                </Colxx>
              </Row>
            </Form>
          )}
        </Formik>
      </Suspense>
    </>
  );
}
export default Saved;
