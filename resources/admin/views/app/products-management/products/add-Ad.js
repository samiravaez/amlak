import React, {Component, Suspense} from 'react';

import {FormBuilder} from '@ginkgo-bioworks/react-json-schema-form-builder';
import axios from "axios";
import {adminPathApi} from "../../../../constants/defaultValues";
import Select from 'react-select'
import Breadcrumb, {Card, CardBody, Row} from "reactstrap";
import {Colxx, Separator} from "../../../../components/common/CustomBootstrap";
import AlertError from "../../../../components/AlertError";
import Form from "@rjsf/core";
import {useHistory, withRouter} from 'react-router-dom';
import {NotificationManager} from "../../../../components/common/react-notifications";


// const onSubmit = async (values) => {
//     if (edit) {
//         await axios.post(`${adminPathApi}/category/update/${id}`, values)
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
//                 setErrors(error.response.data.errors)
//             });
//     } else {
//         await axios.post(`${adminPathApi}/category/store`, values)
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
//                 setErrors(error.response.data.errors)
//             });
//     }
//
//
//
// };
//

class SelectList extends React.Component {

    // const options = [];
    constructor(props) {
        super(props);
        this.state = {
            selectOptions: [],
            id: "",
            catId: '',
            name: '',
            formsData: [],
            formiData: {},
            jsSchema: '{}',
            uiSchema: '{}',

        };
        this.onSubmit = this.onSubmit.bind(this);

    }



    async onSubmit(values) {


        // const id = this.props.match.params.id ? this.props.match.params.id : null;
        axios.post(`${adminPathApi}/advertisement/store/${this.state.catId}`, values)
            .then((response) => {
                if (response.data.status == true) {
                    this.props.history.push("/tbt-panel");
                    NotificationManager.success(response.data.message);
                } else {
                    this.props.history.push("/tbt-panel/products-management/categories/create");
                    // NotificationManager.error(response.data.message);

                }
            })
            .catch(function (error) {
                // setErrors(error.response.data.errors)
            });

    };


//
//     // async getOptions(){
//     //     const res = await axios.get(`${adminPathApi}/category/list/`);
//     //     const data = res.data;
//     //
//     //     const options = data.map(d => ({
//     //         'value' : d._id,
//     //         'label' : d.title,
//     //     }));
//     //
//     //     this.setState({selectOptions: options})
//     //
//     // }
//

    async getOptions() {
        axios.get(`${adminPathApi}/category/list/`)
            .then((response) => {
                const data = response.data;
                const options = data.map(d => ({
                    'value': d._id,
                    'label': d.title,

                }));

                this.setState({selectOptions: options})
            })
            .catch(function (error) {
            })

    };



//
    async getAdForms(id) {
        axios.get(`${adminPathApi}/category/jsSchema/${id}`)
            .then((response) => {
                const formData = response.data;
                this.setState({formsData: formData});
                // this.setState({title: formData.title})
                this.setState({jsSchema: formData.jsonSchema});
                this.setState({uiSchema: formData.uiSchema});

            })
            .catch(function (error) {
            })

    };


    handleChange(e) {
        this.setState({catId:e.value});

        this.getAdForms(e.value);
        // return (<p>{JSON.stringify(this.state.formsData.title)}</p>);
    }


    componentDidMount() {
        this.getOptions();

    }

    render() {
        // console.log(this.state.selectOptions);
        // console.log(typeof (this.state.jsSchema));

        return (
            <div>

                <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)}
                        placeholder={'دسته ی موردنظر را انتخاب کنید...'}/>
                <br/>
                <Row className="mb-4">
                    <Colxx xxs="12">
                        <br/>
                        <Card>
                            <CardBody>
                                {this.state.catId && this.state.jsSchema
                                    && this.state.uiSchema
                                    ? (<Form schema={JSON.parse(this.state.jsSchema)}
                                               uiSchema={JSON.parse(this.state.uiSchema)}
                                                onSubmit={this.onSubmit}
                                    /> ): <div>

                                </div>}
                                {this.state.catId !== null && this.state.jsSchema == null ? <div>
                                    <p>برای این دسته فرمی ایجاد نشده است.</p>
                                </div>: <div>

                                </div>}
                                {/*<p>{JSON.stringify(this.state.jsSchema)}</p>*/}


                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>


                {/*<p>{this.state.formsData.uiSchema}</p>*/}
                {/*<p>{JSON.stringify(this.state.formsData)}</p>*/}


            </div>


        );
    }
}


export default withRouter(SelectList) ;