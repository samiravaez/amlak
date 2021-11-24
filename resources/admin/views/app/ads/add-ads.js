import React, { Suspense, useState } from "react";
import {
  CardBody,
  CardTitle,
  Row,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardText
} from "reactstrap";
import ReactQuill from 'react-quill';
import { Field, Form, Formik } from "formik";
import AlertError from "../../../components/AlertError";
import { FormikReactSelect } from "../../../containers/form-validations/FormikFields";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import { useHistory } from "react-router-dom";

const Addads = ({ match }) => {
  let history = useHistory();

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

  const [initialValues, setInitialValues] = React.useState({
    status: '',
  });

  const onSubmit = () => {

  };

  const [options, setOptions] = useState([
    { name: 'وای فای', id: 1 },
    { name: ' استخر', id: 2 },
    { name: 'تراس', id: 3 },
    { name: ' امکانات بدنسازی', id: 4 },
    { name: 'سالن اجتماعات ', id: 5 }
  ]);

  const [Branches, setBranches] = useState([
    { name: 'آب', id: 6 },
    { name: 'برق', id: 7 },
    { name: 'گاز', id: 8 }
  ])

  return (
    <>
      <Suspense fallback={<div className={'loading'} />}>
        <Row>
          <Colxx xss="12">
            <Breadcrumb heading={"myadd.list"} match={match} />
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
        <Colxx xss={12}>
          <Card className="mb-4">
            <CardBody>
              <CardTitle className="CardHeader mb-5">افزودن آگهی</CardTitle>
              <AlertError errors={serverError} />
              <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
                {({ errors, touched, setFieldValue, setFieldTouched, values }) => (
                  <Form className="av-tooltip tooltip-label-right">
                    <Colxx md={12}>
                      <Row>
                        <Colxx md={6}>
                          <FormGroup>
                            <Label>توضیحات</Label>
                            <ReactQuill
                              theme="snow"
                              value=""
                              onChange={(val) => setFieldValue('', val)}
                              modules={quillModules}
                              formats={quillFormats}
                            />
                          </FormGroup>
                        </Colxx>
                        <Colxx md={6}>
                          <FormGroup>
                            <Label>وضعیت نوشته</Label>
                            <FormikReactSelect onChange={setFieldValue} onBlur={setFieldTouched} name={'status'} value={values.status} options={[
                              {
                                label: 'پیش نویس',
                                value: '0'
                              },
                              {
                                label: 'انتشار',
                                value: '1'
                              }
                            ]} />
                            {errors.status && touched.status && (
                              <div className="invalid-feedback d-block">
                                {errors.status}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label=" آگهی ویژه "
                            />
                          </FormGroup>
                        </Colxx>
                      </Row>
                    </Colxx>
                    <Separator className="mb-5 mt-3" />
                    <Colxx md={12}>
                      <Row>
                        <Colxx md={4}>
                          <Label className="Bold">استان</Label>
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
                        <Colxx md={4}>
                          <Label className="Bold">شهر</Label>
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
                        <Colxx md={4}>
                          <Label className="Bold">منطقه</Label>
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
                      </Row>
                      <Row>
                        <Label className="Bold">
                          آدرس دقیق ملک
                        </Label>
                        <Input type="text" placeholder="برای مثال : خیابان . کوچه . محل"></Input>
                      </Row>
                      <button className="btn btn-primary mt-3">انتخاب روی نقشه</button>
                    </Colxx>
                    <Separator className="mb-5 mt-3" />
                    <Colxx md={12}>
                      <Row>
                        <Colxx md={6}>
                          <Card className="Cardinfo">
                            <CardHeader className="myHeader Bold">مشخصات تماس</CardHeader>
                            <CardBody className="myBody">
                              <FormGroup className="md-6">
                                <Label>شماره صاحب ملک</Label>
                                <Input type="text"></Input>
                              </FormGroup>
                              <FormGroup className="md-6">
                                <Label>کمیسیون</Label>
                                <Input type="text"></Input>
                              </FormGroup>
                            </CardBody>
                          </Card>
                          <Card className="Cardinfo">
                            <CardHeader className="myHeader Bold">ویژگی های ملک</CardHeader>
                            <CardBody className="myBody">
                              <Row>
                                <FormGroup className="mainInput ml-1" md="3">
                                  <CustomInput
                                    type="checkbox"
                                    id="j"
                                    label=" آسانسور "
                                  />
                                  <CustomInput
                                    type="checkbox"
                                    id="h"
                                    label=" فوری "
                                  />
                                  <CustomInput
                                    type="checkbox"
                                    id="g"
                                    label=" لوکس "
                                  />
                                </FormGroup>
                                <FormGroup className="seccondmainInput ml-3" md="3">
                                  <CustomInput
                                    type="checkbox"
                                    id="e"
                                    label=" قابل معاوضعه "
                                  />
                                  <CustomInput
                                    type="checkbox"
                                    id="d"
                                    label=" انباری "
                                  />
                                  <CustomInput
                                    type="checkbox"
                                    id="c"
                                    label=" پارکینگ "
                                  />
                                </FormGroup>
                              </Row>
                            </CardBody>
                          </Card>
                          <Card className="Cardinfo">
                            <CardHeader className="myHeader Bold">گالری تصاویر</CardHeader>
                            <CardBody className="myBody">
                              <FormGroup md={6}>
                                <Label>لینک ویدیو</Label>
                                <Input type="text"></Input>
                                <small>اگر می خواهید ویدویی نشان داده شود لینک ویدیو را وارد کنید</small>
                              </FormGroup>
                            </CardBody>
                          </Card>
                          <Card className="Cardinfo">
                            <CardHeader className="myHeader Bold">امکانات رفاهی</CardHeader>
                            <CardBody className="myBody">
                              <FormGroup id="myForm" md={6}>
                                {options && options.map((item, key) => (
                                  <CustomInput
                                    type="checkbox"
                                    id={item.id}
                                    label={item.name}
                                  />
                                ))
                                }
                              </FormGroup>
                            </CardBody>
                          </Card>
                          <Card className="Cardinfo">
                            <CardHeader className="myHeader Bold">انشعابات</CardHeader>
                            <CardBody className="myBody">
                              <FormGroup id="myForm" md={6}>
                                {Branches && Branches.map((item, key) => (
                                  <CustomInput
                                    type="checkbox"
                                    id={item.id}
                                    label={item.name}
                                  />
                                ))
                                }
                              </FormGroup>
                            </CardBody>
                          </Card>
                        </Colxx>
                        <Colxx md={6}>
                          <Card className="Cardinfo">
                            <CardHeader className="myHeader Bold">لیست دلخواه خود را ایجاد کنید</CardHeader>
                            <CardBody className="myBody">
                              <FormGroup md={6}>
                                <Label>
                                  انتخاب مرکز
                                </Label>
                                <FormikReactSelect name="meta" onChange={setFieldValue} onBlur={setFieldTouched} name={'meta'} value={values.meta} options={[
                                  {
                                    label: 'راه آهن',
                                    value: '0'
                                  },
                                  {
                                    label: 'بانک',
                                    value: '1'
                                  },
                                  {
                                    label: 'دانشگاه',
                                    value: '2'
                                  },
                                  {
                                    label: 'پمپ بنزین',
                                    value: '3'
                                  },
                                  {
                                    label: 'ایستگاه اتوبوس',
                                    value: '4'
                                  },
                                  {
                                    label: 'فرودگاه',
                                    value: '5'
                                  }
                                ]} />
                              </FormGroup>
                              <FormGroup md={6}>
                                <Label>
                                  فاصله تا مرکز
                                </Label>
                                <Input type="text"></Input>
                              </FormGroup>
                            </CardBody>
                          </Card>
                          <Card className="Cardinfo">
                            <CardHeader className="myHeader Bold">مشخصات ساختمان</CardHeader>
                            <CardBody className="myBody">
                              <FormGroup md={6}>
                                <Label>
                                  نوع معامله
                                </Label>
                                <FormikReactSelect name="meta" onChange={setFieldValue} onBlur={setFieldTouched} name={'meta'} value={values.meta} options={[
                                  {
                                    label: 'فروش',
                                    value: '0'
                                  },
                                  {
                                    label: 'رهن و اجاره',
                                    value: '1'
                                  },
                                  {
                                    label: 'پیش فروش',
                                    value: '2'
                                  },
                                  {
                                    label: 'مشارکت',
                                    value: '3'
                                  }
                                ]} />
                              </FormGroup>
                            </CardBody>
                          </Card>
                          <Card className="Cardinfo">
                            <CardHeader className="myHeader Bold">وضعیت ملک</CardHeader>
                            <CardBody className="myBody">
                              <FormGroup md={6}>
                                <Label>
                                  وضعیت سند
                                </Label>
                                <FormikReactSelect name="meta" onChange={setFieldValue} onBlur={setFieldTouched} name={'meta'} value={values.meta} options={[
                                  {
                                    label: 'سند شش دانگ',
                                    value: '0'
                                  },
                                  {
                                    label: 'قراردادی',
                                    value: '1'
                                  },
                                  {
                                    label: 'قولنامه ای',
                                    value: '2'
                                  },
                                  {
                                    label: 'در دست اقدام',
                                    value: '3'
                                  }
                                ]} />
                              </FormGroup>
                              <FormGroup md={6}>
                                <Label>
                                  موقعیت
                                </Label>
                                <FormikReactSelect name="meta" onChange={setFieldValue} onBlur={setFieldTouched} name={'meta'} value={values.meta} options={[
                                  {
                                    label: 'شمالی',
                                    value: '0'
                                  },
                                  {
                                    label: 'جنوبی',
                                    value: '1'
                                  },
                                  {
                                    label: 'شرقی',
                                    value: '2'
                                  },
                                  {
                                    label: 'غربی',
                                    value: '3'
                                  }
                                ]} />
                              </FormGroup>
                              <FormGroup md={6}>
                                <Label>
                                  سال ساخت
                                </Label>
                                <FormikReactSelect name="meta" onChange={setFieldValue} onBlur={setFieldTouched} name={'meta'} value={values.meta} options={[
                                  {
                                    label: '1375',
                                    value: '0'
                                  },
                                  {
                                    label: '1385',
                                    value: '1'
                                  },
                                  {
                                    label: '1395',
                                    value: '2'
                                  },
                                  {
                                    label: '1405',
                                    value: '3'
                                  }
                                ]} />
                              </FormGroup>
                              <FormGroup md={6}>
                                <Label>
                                  متراژ
                                </Label>
                                <Input type="text"></Input>
                              </FormGroup>
                            </CardBody>
                          </Card>
                          <Colxx md={12} className="mt-4">
                            <Button type="submit">تایید</Button>
                          </Colxx>
                        </Colxx>
                      </Row>
                    </Colxx>
                  </Form>
                )}
              </Formik>
            </CardBody>
          </ Card>
        </Colxx>
      </Suspense>
    </>
  );
}
export default Addads;
