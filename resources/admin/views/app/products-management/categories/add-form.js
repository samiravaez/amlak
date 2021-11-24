import React, {useEffect, Suspense} from 'react';
import {Formik, Field, FieldArray, ErrorMessage} from 'formik';
import {Link, useParams, withRouter} from 'react-router-dom';
import Form from "@rjsf/core";

import {Row, Card, CardBody, FormGroup, Label, Button, CardSubtitle, InputGroupAddon, InputGroup} from 'reactstrap';
import {Colxx, Separator} from '../../../../components/common/CustomBootstrap';
import {adminPathApi} from "../../../../constants/defaultValues";
import axios from "axios";
import {NotificationManager} from "../../../../components/common/react-notifications";
import {FormikReactSelect, FormikSwitch} from "../../../../containers/form-validations/FormikFields";
import Breadcrumb from "../../../../containers/navs/Breadcrumb";
import FormikValidationSchema from '../../../../containers/form-validations/FormikValidationSchema';
import * as Yup from "yup";
import AlertError from "../../../../components/AlertError";
import SearchSelect from "../../../../components/SearchSelect";
import {useHistory} from 'react-router-dom';
import SearchMultiSelect from "../../../../components/SearchMultiSelect";

import useAttributesList from '../../../../hooks/search_attribute';
import { Component } from 'react';

import {FormBuilder} from '@ginkgo-bioworks/react-json-schema-form-builder';
import Example from './form-builder';



// const onSubmit = async () => {
//         const values = {schema:this.st}
//         await axios.post(`${adminPathApi}/catForm/update`, values)
//             .then((response) => {
//                 if (response.data.status == true) {
//                     history.push("/tbt-panel");
//                     NotificationManager.success(response.data.message);
//                 } else {
//                     history.push("/tbt-panel/products-management/categories/create");
//                     // NotificationManager.error(response.data.message);
//
//                 }
//             })
//             .catch(function (error) {
//                 // setErrors(error.response.data.errors)
//             });
//
//
// };




// async onSubmit ({values,match}) {
//     const id = match.params.id ? match.params.id : null;
//     axios.post(`${adminPathApi}/catForm/update/${id}`, values)
//         .then((response) => {
//             if (response.data.status == true) {
//                 history.push("/tbt-panel");
//                 NotificationManager.success(response.data.message);
//             } else {
//                 history.push("/tbt-panel/products-management/categories/create");
//                 // NotificationManager.error(response.data.message);
//
//             }
//         })
//         .catch(function (error) {
//             setErrors(error.response.data.errors)
//         });
//
// };
//





const AddForm = ({match, ...props}) => {
    let history = useHistory();
    // const [formSchema, setFormSchema] = React.useState(schema);
    const id = match.params.id ? match.params.id : null;
    const [loading, setLoading] = React.useState(false);
    const [errors, setErrors] = React.useState(false);
    const [show_content, setShowContent] = React.useState(true);
    const [formData, setFormData] = React.useState({});
    const [validationErrors, setValidationErrors] = React.useState({});
    // const id = addForm ? match.params.id : false;

    // React.useEffect(() => {
    //     fetchCategories();
    //     if (edit){
    //         fetchCategory()
    //     }
    // }, []);
    //
    // const fetchCategory = async () => {
    //     axios.get(`${adminPathApi}/category/edit/${id}`)
    //         .then((response) => {
    //             setFormData(response.data);
    //             // data.properties.title.default = response.data.title;
    //             // data.properties.slug.default = response.data.slug;
    //             // data.properties.description.default = response.data.description;
    //             // data.properties.parent_id.default = response.data.parent_id;
    //             setFormSchema(data);
    //             // setShowContent(false);
    //         })
    //         .catch(function (error) {
    //         })
    //
    // };

    // const fetchCategories = async () => {
    //     axios.get(`${adminPathApi}/category/index`)
    //         .then((response) => {
    //             let data = {...formSchema};
    //             data.properties.parent_id.enum = response.data.cat_ids;
    //             data.properties.parent_id.enumNames = response.data.cat_names;
    //             setFormSchema(data);
    //             setShowContent(false);
    //         })
    //         .catch(function (error) {
    //         })
    //
    // };


    // if (show_content) {
    //     return (<div className="loading"/>);
    // }


    return (
        <Suspense fallback={<div className="loading"/>}>


            <Row>
                <Colxx xss="12">
                    <Breadcrumb heading={"menu.categories.list"} match={match}/>
                    <Separator className="mb-5"/>
                </Colxx>
            </Row>

            <Row className="mb-4">
                <Colxx xxs="12">
                    <Card>
                        <CardBody>
                            {/*<AlertError errors={errors} />*/}
                            {/*<Form schema={formSchema}*/}
                            {/*      onSubmit={onSubmit}*/}
                            {/*      formData={formData}*/}
                            {/*      onError={(e) => console.log(e)}/>*/}

                            <Example match={match}/>
                        </CardBody>
                        {/*{this.state.form}*/}
                    </Card>
                </Colxx>
            </Row>
        </Suspense>
    );


};


export default AddForm;
