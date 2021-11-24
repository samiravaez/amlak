import React, {useEffect, Suspense} from 'react';
import {Formik, Field, FieldArray, ErrorMessage} from 'formik/dist/index';
import {Link, useParams, withRouter} from 'react-router-dom';
import Form from "@rjsf/core";
import { Button} from 'reactstrap/es/index';
import {adminPathApi} from "../../../../constants/defaultValues";
import axios from "axios/index";
import {NotificationManager} from "../../../../components/common/react-notifications";
import { Component } from 'react';
import {FormBuilder} from '@ginkgo-bioworks/react-json-schema-form-builder';


class Example extends Component {

    constructor(props) {
        super(props);
        this.state = {
            schema: '{}',
            uischema: '{}',
            formData: {},



        };
        this.onSubmit = this.onSubmit.bind(this);
        this.getAdForms = this.getAdForms.bind(this);
    }


    async getAdForms() {
        const id = this.props.match.params.id ? this.props.match.params.id : null;
        axios.get(`${adminPathApi}/category/jsSchema/${id}`)
            .then((response) => {
                const formData = response.data;
                this.setState({formsData: formData});
                // this.setState({title: formData.title})
                this.setState({schema: formData.jsonSchema});
                this.setState({uischema: formData.uiSchema});

            })
            .catch(function (error) {
            })

    };



    async onSubmit () {
        // const {id} = useParams();
        const values = {schemaa:this.state.schema,uischema:this.state.uischema};
        const id = this.props.match.params.id ? this.props.match.params.id : null;

        axios.post(`${adminPathApi}/catForm/update/${id}`, values)
            .then((response) => {
                if (response.data.status == true) {
                    this.props.history.push("/tbt-panel/products-management/categories/list");
                    NotificationManager.success(response.data.message);
                } else {
                    this.props.history.push("/tbt-panel/products-management/categories/list");
                    NotificationManager.error(response.data.message);

                }
            })
            .catch(function (error) {
                // setErrors(error.response.data.errors)
            });

    };

    componentDidMount() {
        this.getAdForms();

    }

    render() {

        return (
            <div>
                <FormBuilder
                    schema={this.state.schema}
                    uischema={this.state.uischema}
                    onChange={(newSchema, newUiSchema) => {
                        this.setState({
                            schema: newSchema,
                            uischema: newUiSchema
                        })
                    }}

                />
                <Button onClick={this.onSubmit} >Submit</Button>
                {/*<Form*/}
                {/*    schema={JSON.parse(this.state.schema)}*/}
                {/*    uiSchema={JSON.parse(this.state.uischema)}*/}
                {/*    onChange={(newFormData) => this.setState({formData: newFormData.formData})}*/}
                {/*    formData={this.state.formData}*/}

            </div>
        );
    }
}

export default withRouter(Example)