import React, {useEffect, Suspense} from 'react';
import {Formik, Field, FieldArray, ErrorMessage} from 'formik';
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



// const CategorySchema = Yup.object().shape({
//     name: Yup.string()
//         .min(3, 'Too Short!')
//         .required('Please enter category name'),
//     slug: Yup.string()
//         .min(2, 'Too Short!')
//         .required('Please enter category slug'),
// });

const schema = {
    title: "افزودن دسته",
    type: "object",
    required: ["title", "slug"],
    properties: {
        title: {type: "string", title: "نام دسته"},
        slug: {type: "string", title: "نامک"},
        description: {type: "string", title: "توضیحات"},
        parent_id: {enum: [], enumNames: [], type: "string", title: "دسته ی والد"},
    }
};



//Form-Builder
const customFormInputs = {
    shortAnswer: {
        displayName: "Email",
        matchIf: [
            {
                types: ["string"],
                widget: "email"
            },
        ],
        defaultDataSchema: {},
        defaultUiSchema: {
            "ui:widget": "password"
        },
        type: "string",
        cardBody: (parameters, onChange) => <div>
            <h5>Default email</h5>
            <input
                value={parameters.default}
                placeholder="Default"
                type="text"
                onChange={(ev) =>
                    onChange({ ...parameters, default: ev.target.value })
                }
            />
        </div>,
        modalBody: (parameters, onChange) => <div>
            Extra editing options in modal appear hear
        </div>,
    },
};



const Category = ({match, edit = false}) => {
    const [formSchema, setFormSchema] = React.useState(schema);
    const id = match.params.id ? match.params.id : null;
    const history = useHistory();
    const [loading, setLoading] = React.useState(false);
    const [errors, setErrors] = React.useState(false);
    const [show_content, setShowContent] = React.useState(true);
    const [formData, setFormData] = React.useState({});
    const [validationErrors, setValidationErrors] = React.useState({});

    React.useEffect(() => {
        fetchCategories();
        if (edit){
            fetchCategory()
        }
    }, []);

    const fetchCategory = async () => {
        axios.get(`${adminPathApi}/category/edit/${id}`)
            .then((response) => {
                setFormData(response.data);
                // data.properties.title.default = response.data.title;
                // data.properties.slug.default = response.data.slug;
                // data.properties.description.default = response.data.description;
                // data.properties.parent_id.default = response.data.parent_id;
                setFormSchema(data);
                // setShowContent(false);
            })
            .catch(function (error) {
            })

    };

    const fetchCategories = async () => {
        axios.get(`${adminPathApi}/category/index`)
            .then((response) => {
                let data = {...formSchema};
                data.properties.parent_id.enum = response.data.cat_ids;
                data.properties.parent_id.enumNames = response.data.cat_names;
                setFormSchema(data);
                setShowContent(false);
            })
            .catch(function (error) {
            })

    };
    const onSubmit = async (values) => {
        if (edit) {
            await axios.post(`${adminPathApi}/category/update/${id}`, values)
                .then((response) => {
                    if (response.data.status == true) {
                        history.push("/tbt-panel/products-management/categories/list");
                        NotificationManager.success(response.data.message);
                    } else {
                        history.push("/tbt-panel/products-management/categories/list");
                        // NotificationManager.error(response.data.message);

                    }
                })
                .catch(function (error) {
                    setErrors(error.response.data.errors)
                });
        } else {
            await axios.post(`${adminPathApi}/category/store`, values)
                .then((response) => {
                    if (response.data.status == true) {
                        history.push("/tbt-panel/products-management/categories/create");
                        NotificationManager.success(response.data.message);
                    } else {
                        history.push("/tbt-panel/products-management/categories/create");
                        // NotificationManager.error(response.data.message);

                    }
                })
                .catch(function (error) {
                    setErrors(error.response.data.errors)
                });
        }



    };

    if (show_content) {
        return (<div className="loading"/>);
    }

    return (
        <Suspense fallback={<div className="loading"/>}>
            <Row>
                <Colxx xss="12">
                    <Breadcrumb heading={edit ? "menu.categories.edit" : 'menu.categories.create'} match={match}/>
                    <Separator className="mb-5"/>
                </Colxx>
            </Row>
            <Row className="mb-4">
                <Colxx xxs="12">
                    <Card>
                        <CardBody>
                            <AlertError errors={errors} />
                            <Form schema={formSchema}
                                  onSubmit={onSubmit}
                                  formData={formData}
                                  onError={(e) => console.log(e)}/>
                        </CardBody>
                    </Card>
                </Colxx>
            </Row>
        </Suspense>
    )
}


export default Category;
