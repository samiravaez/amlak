import React, {Component, Suspense} from 'react';

import {FormBuilder} from '@ginkgo-bioworks/react-json-schema-form-builder';
import axios from "axios";
import {adminPathApi} from "../../../../constants/defaultValues";
import Select from 'react-select'
import {Card, CardBody, Row} from "reactstrap";
import Breadcrumb from "../../../../containers/navs/Breadcrumb";
import {Colxx, Separator} from "../../../../components/common/CustomBootstrap";
import AlertError from "../../../../components/AlertError";
import Form from "@rjsf/core";
import {useHistory, withRouter} from 'react-router-dom';
import {NotificationManager} from "../../../../components/common/react-notifications";
import {injectIntl} from "react-intl";




const EditAd = ({match, edit = false}) => {
    const [formSchema, setFormSchema] = React.useState('{}');
    const [formUi, setFormUi] = React.useState('{}');
    const [selectOptions, setSelectOptions] = React.useState({});
    const [catIds, setCatIds] = React.useState({});
    const [catNames, setCatNames] = React.useState({});
    const id = match.params.id ? match.params.id : null;
    const history = useHistory();
    const [loading, setLoading] = React.useState(false);
    const [errors, setErrors] = React.useState(false);
    const [show_content, setShowContent] = React.useState(true);
    const [formData, setFormData] = React.useState({});
    const [validationErrors, setValidationErrors] = React.useState({});

    React.useEffect(() => {

        fetchAd();
        getOptions();

    }, []);


    const getOptions = async() => {
        axios.get(`${adminPathApi}/category/list/`)
            .then((response) => {
                const data = response.data;
                const options = data.map(d => ({
                    'value': d._id,
                    'label': d.title,

                }));

                setSelectOptions(options);
            })
            .catch(function (error) {
            })

    };


    const handleChange = (e) =>
    {
        this.setState({catId: e.value});

        // return (<p>{JSON.stringify(this.state.formsData.title)}</p>);
    };


    const fetchAd = async () => {
        axios.get(`${adminPathApi}/advertisement/edit/${id}`)
            .then((response) => {
                setFormData(response.data);
                // setShowContent(false);
                setFormSchema(response.data.category.jsonSchema);
                setFormUi(response.data.category.uiSchema);
                // console.log(formSchema)

            })
            .catch(function (error) {
            })

    };


    const onSubmit = async (values) => {

        axios.post(`${adminPathApi}/advertisement/update/${id}`, values)
            .then((response) => {
                if (response.data.status == true) {
                    history.push("/tbt-panel/products-management/products/list");
                    NotificationManager.success(response.data.message);
                } else {
                    history.push("/tbt-panel/products-management/products/list");
                    // NotificationManager.error(response.data.message);

                }
            })
            .catch(function (error) {
                setErrors(error.response.data.errors)
            });




    };
    //
    // if (show_content) {
    //     return (<div className="loading"/>);
    // }

    return (
        <Suspense fallback={<div className="loading"/>}>


            <Row>
                <Colxx xss="12">
                    <Breadcrumb heading={edit ? "menu.products.edit" : 'menu.products.create'} match={match}/>
                    <Separator className="mb-5"/>
                </Colxx>
            </Row>
            <Row className="mb-4">
                <Colxx xxs="12">
                    <Card>
                        <CardBody>
                            {/*<AlertError errors={errors} />*/}

                            <Form schema={JSON.parse(formSchema)}
                                  uiSchema={JSON.parse(formUi)}
                                  onSubmit={onSubmit}
                                  formData={formData}
                                  // onError={(e) => console.log(e)}
                            />
                        </CardBody>
                    </Card>
                </Colxx>
            </Row>
        </Suspense>
    )
}




export default EditAd ;