import React, { Suspense } from 'react';
import { Button, Card, CardBody, CardTitle, FormGroup, Label, Row  } from "reactstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import ReactQuill from 'react-quill';
import { Field, Form, Formik } from "formik";
import AlertError from "../../../components/AlertError";
import { FormikReactSelect } from "../../../containers/form-validations/FormikFields";

const Blog = ({ match }) => {

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
    name: '',
    slug: '',
    description: '',
    metas: {
      meta_description: ''
    },
    status: '0',
    terms: [],
  });

  const onSubmit = () => {

  };

  return (
    <>
      <Suspense fallback={<div className={'loading'} />}>
        <Row>
          <Colxx xss="12">
            <Breadcrumb heading={"menu.blogs"} match={match} />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Colxx xss={12}>
          <Card className="mb-4">
            <CardBody>
              <CardTitle className="CardHeader mb-5">افزودن نوشته ها</CardTitle>
              <AlertError errors={serverError} />
              <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
                {({ errors, touched, setFieldValue, setFieldTouched, values }) => (
                  <Form className="av-tooltip tooltip-label-right">
                    <Row>
                      <Colxx md={8}>
                        <Row>
                          <Colxx md={6}>
                            <FormGroup>
                              <Label>عنوان</Label>
                              <Field name={"name"} className={'form-control'} placeholder="عنوان نوشته" required />
                              {errors.name && touched.name && (
                                <div className="invalid-feedback d-block">
                                  {errors.name}
                                </div>
                              )}
                            </FormGroup>
                          </Colxx>
                          <Colxx md={6}>
                            <FormGroup>
                              <Label>نامک</Label>
                              <Field name={"slug"} className={'form-control'} placeholder="نامک" required />
                              {errors.slug && touched.slug && (
                                <div className="invalid-feedback d-block">
                                  {errors.slug}
                                </div>
                              )}
                            </FormGroup>
                          </Colxx>
                          <Colxx md={12}>
                            <FormGroup>
                              <Label>توضیحات متن</Label>
                              <ReactQuill
                                theme="snow"
                                value={values.description}
                                onChange={(val) => setFieldValue('description', val)}
                                modules={quillModules}
                                formats={quillFormats}
                              />
                              {errors.description && touched.description && (
                                <div className="invalid-feedback d-block">
                                  {errors.description}
                                </div>
                              )}
                            </FormGroup>
                          </Colxx>
                          <CardTitle>سئو</CardTitle>
                          <Colxx md={12}>
                            <FormGroup>
                              <Label>توضیحات متا</Label>
                              <ReactQuill
                                theme="snow"
                                value={values.metas.meta_description}
                                onChange={(val) => setFieldValue('metas.meta_description', val)}
                                modules={quillModules}
                                formats={quillFormats}
                              />
                            </FormGroup>
                          </Colxx>
                        </Row>
                      </Colxx>
                      <Colxx md={4}>
                        <Colxx md={12}>
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
                        </Colxx>
                        <Colxx md={12}>
                          <Button color={'primary'} className="mt-4">
                            بروزرسانی اطلاعات
                          </Button>
                        </Colxx>
                        <Colxx md={12} className="mt-4">
                          <FormGroup>
                            <Label>برچسب نوشته</Label>
                            <FormikReactSelect isMulti onChange={setFieldValue} onBlur={setFieldTouched} name={'terms'} value={values.terms} options={[
                              {
                                label: 'داخلی',
                                value: '0'
                              },
                              {
                                label: 'محبوب',
                                value: '1'
                              },
                              {
                                label: 'کالای ایرانی',
                                value: '2'
                              },
                              {
                                label: 'مشتریان',
                                value: '3'
                              },
                            ]} />
                            {errors.terms && touched.terms && (
                              <div className="invalid-feedback d-block">
                                {errors.terms}
                              </div>
                            )}
                          </FormGroup>
                        </Colxx>
                      </Colxx>
                    </Row>
                  </Form>
                )}
              </Formik>
            </CardBody>
          </Card>
        </Colxx>
      </Suspense>
    </>
  );
}
export default Blog;
