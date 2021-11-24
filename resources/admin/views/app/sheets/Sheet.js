import React, { Suspense } from 'react';
import { Button, Card, CardBody, CardTitle, FormGroup, Label, Row } from "reactstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import ReactQuill from 'react-quill';
import { Field, Form, Formik } from "formik";
import AlertError from "../../../components/AlertError";
import { FormikReactSelect } from "../../../containers/form-validations/FormikFields";

const Sheet = ({ match, edit = false }) => {
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
    slugs: '',
    descriptions: '',
    statuses: '0',
  });

  const onSubmit = () => {

  };

  return (
    <>
      <Suspense fallback={<div className={'loading'} />}>
        <Row>
          <Colxx xss="12">
            <Breadcrumb heading={"menu.customers.add.list"} match={match} />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Colxx xss={12}>
          <Card className="mb-4">
            <CardBody>
              <CardTitle className="CardHeader mb-5">افزودن برگه</CardTitle>
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
                              <Field name={"names"} className={'form-control'} placeholder="عنوان نوشته" required />
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
                              <Field name={"slugs"} className={'form-control'} placeholder="نامک" required />
                              {errors.slugs && touched.slugs && (
                                <div className="invalid-feedback d-block">
                                  {errors.slugs}
                                </div>
                              )}
                            </FormGroup>
                          </Colxx>
                          <Colxx md={12}>
                            <FormGroup>
                              <ReactQuill
                                theme="snow"
                                value={values.descriptions}
                                onChange={(val) => setFieldValue('descriptions', val)}
                                modules={quillModules}
                                formats={quillFormats}
                              />
                              {errors.descriptions && touched.descriptions && (
                                <div className="invalid-feedback d-block">
                                  {errors.descriptions}
                                </div>
                              )}
                            </FormGroup>
                          </Colxx>
                        </Row>
                      </Colxx>
                      <Colxx md={4}>
                        <Colxx md={12}>
                          <FormGroup>
                            <Label>وضعیت نوشته</Label>
                            <FormikReactSelect onChange={setFieldValue} onBlur={setFieldTouched} name={'statuses'} value={values.statuses} options={[
                              {
                                label: 'پیش نویس',
                                value: '0'
                              },
                              {
                                label: 'انتشار',
                                value: '1'
                              }
                            ]} />
                            {errors.statuses && touched.statuses && (
                              <div className="invalid-feedback d-block">
                                {errors.statuses}
                              </div>
                            )}
                          </FormGroup>
                        </Colxx>
                        <Colxx md={12}>
                          <Button color={'primary'} className="mt-4">
                            بروزرسانی اطلاعات
                          </Button>
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
export default Sheet;
