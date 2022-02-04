import React, {Suspense, useState} from "react";
import {Calendar} from "react-multi-date-picker"
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    Button,
    Row,
    Col,
    CardBody,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';
import {Field, Form, Formik, FieldArray, ErrorMessage} from "formik";
import {useFormik} from 'Formik';
import AlertError from "../../../components/AlertError";
import {FormikReactSelect} from "../../../containers/form-validations/FormikFields";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import NotificationManager from "../../../components/common/react-notifications/NotificationManager";
import Select from 'react-select';
import AddCustomerForm from "./add-customer-form";
import AddEntityForm from "./add-entity-form";

const AddCustomer = ({match}) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const [loading, setLoading] = React.useState(false);

    const [pageCount, setPageCount] = React.useState(0);

    const [notApproveModal, setNotApproveModal] = React.useState(false);

    const [selectId, setSelectedId] = React.useState(null);

    React.useEffect(() => {
        renderOstans();
        renderCustomerTypes();
        renderEyeColors();
        renderCustomerStates();
        renderPurchaseStages();
        renderCareers();
        renderAttendants();
        renderIndustries();

    }, []);

    const renderOstans = async () => {
        await axios.get('/api/admin/regions/ostans')
            .then(({data}) => {
                // console.log(data);
                setSelectOptions((prev) => ({...prev, ostanOpt: data.ostans}))
            })
            .catch(error => console.log(error));
    }

    const renderShahrestans = async (ostan_id) => {
        await axios.get(`/api/admin/regions/shahrestans/${ostan_id}`)
            .then(({data}) => {
                // console.log(data);
                setSelectOptions((prev) => ({...prev, shahrestanOpt: data.shahrestans}))
                console.log(selectOptions.customerTypeOpt)
            })
            .catch(error => console.log(error));
    }

    const renderMantaghes = async (shahrestan_id) => {
        await axios.get(`/api/admin/regions/manategh/${shahrestan_id}`)
            .then(({data}) => {
                // console.log(data);
                setSelectOptions((prev) => ({...prev, mantagheOpt: data.manategh}))
            })
            .catch(error => console.log(error));
    }

    const renderBakhshs = async (mantaghe_id) => {
        await axios.get(`/api/admin/regions/bakhshs/${mantaghe_id}`)
            .then(({data}) => {
                // console.log(data);
                setSelectOptions((prev) => ({...prev, bakhshOpt: data.bakhshs}))
            })
            .catch(error => console.log(error));
    }

    const renderCustomerTypes = async () => {
        await axios.get(`/api/admin/customer_types`)
            .then(({data}) => {
                // console.log(data);
                setSelectOptions((prev) => ({...prev, customerTypeOpt: data.customer_types}))
            })
            .catch(error => console.log(error));
    }

    const renderEyeColors = async () => {
        await axios.get(`/api/admin/eye_colors`)
            .then(({data}) => {
                // console.log(data);
                setSelectOptions((prev) => ({...prev, eyeColorOpt: data.eye_colors}))
            })
            .catch(error => console.log(error));
    }

    const renderCustomerStates = async () => {
        await axios.get(`/api/admin/customer_states`)
            .then(({data}) => {
                // console.log(data);
                setSelectOptions((prev) => ({...prev, customerStateOpt: data.customer_states}))
            })
            .catch(error => console.log(error));
    }

    const renderPurchaseStages = async () => {
        await axios.get(`/api/admin/purchase_stages`)
            .then(({data}) => {
                // console.log(data);
                setSelectOptions((prev) => ({...prev, purchaseStageOpt: data.purchase_stages}))
            })
            .catch(error => console.log(error));
    }

    const renderCareers = async () => {
        await axios.get(`/api/admin/careers`)
            .then(({data}) => {
                // console.log(data);
                setSelectOptions((prev) => ({...prev, careerOpt: data.careers}))
            })
            .catch(error => console.log(error));
    }

    const renderAttendants = async () => {
        await axios.get(`/api/admin/attendants`)
            .then(({data}) => {
                // console.log(data);
                setSelectOptions((prev) => ({...prev, attendantOpt: data.attendants}))
            })
            .catch(error => console.log(error));
    }

    const renderIndustries = async () => {
        await axios.get(`/api/admin/industries`)
            .then(({data}) => {
                setSelectOptions((prev) => ({...prev, industryOpt: data.industries}))
            })
            .catch(error => console.log(error));
    }

    const handleModalNotApproveSubmit = async (values) => {
        await axios.post(`${adminPathApi}/shop/changeStatus/${selectId}`, values)
            .then(({data}) => {
                console.log(data);
            })
            .catch(error => console.log(error));
    };

    //const tableInstance = useTable({ columns, data })
    const fetchData = React.useCallback(async ({pageSize, pageIndex}) => {
            await axios.get(`${adminPathApi}/shop?page=${pageIndex + 1}&per_page=${pageSize}`)
                .then((res) => {
                    setData(res.data.data)
                    setPageCount(res.data.last_page)
                    return res
                })
                .catch((error) => error)
        }
        , []);

    const [serverError, setServerError] = React.useState({})
    const [selectOptions, setSelectOptions] = React.useState({
        ostanOpt: [],
        customerTypeOpt: [],
        eyeColorOpt: [],
        industryOpt: [],
        customerStateOpt: [],
        purchaseStageOpt: [],
        attendantOpt: [],
        shahrestanOpt: [],
        mantagheOpt: [],
        bakhshOpt: [],
        careerOpt: [],
        ostan_id: "",
        shahrestan_id: "",
        mantaghe_id: "",
        bakhsh_id: "",
        ostan_name: '',
        shahrestan_name: '',
        mantaghe_name: '',
        bakhsh_name: '',
    })

    const [initialValues, setInitialValues] = React.useState({
        first_name: '',
        last_name: '',
        username: '',
        mobile_unique: '',
        gender: '',
        email: '',
        id_number: '',
        monthly_income: '',
        customer_state_id: '',
        purchase_stage_id: '',
        entity: 0,
        creator_id: '',
        customer_type_id: '',
        mantaghe_id: '',
        mobile_number: '',
        phone: '',
        marital_status: '',
        fund_value: '',
        birth_date: '',
        spouse_birth_date: '',
        marriage_date: '',
        children_count: '',
        financial_status: '',
        physical_status: '',
        furniture_status: '',
        education_level_id: '',
        eye_color_id: '',
        career_id: '',
        residence_change_reason: '',
        website: '',
        file: '',
        photo: '',
        description: '',
        birth_certificate: '',
        attendant_id: '',
        id_card: '',
        ostan_id: '',
        shahrestan_id: '',
        bakhsh_id: '',
        industry_id: '',
        name: '',
        launch_date: '',
        staff_count: '',
        start_working_time: '',
        finish_working_time: '',
        economic_code: '',
        registration_number: '',
        business_class: '',
        company_type: '',
        representative: '',
        fax: '',
        position: '',
        weekly_customers_count: '',
        business_card: '',
    });

    const handleOstanChange = (e) => {
        setSelectOptions((prev) => ({...prev, ostan_id: e.value, ostan_name: e.label}))
    };

    const handleShahrestanChange = (e) => {
        setSelectOptions((prev) => ({...prev, shahrestan_id: e.value, shahrestan_name: e.label}))
    };
    const handleMantagheChange = (e) => {
        setSelectOptions((prev) => ({...prev, mantaghe_id: e.value, mantaghe_name: e.label}))
    };
    const handleBakhshChange = (e) => {
        setSelectOptions((prev) => ({...prev, bakhsh_id: e.value, bakhsh_name: e.label}))
    };


    const onSubmit = async (values) => {
        // console.log(values);
        // if (edit) {
        //     await axios.patch(`${adminPathApi}/user/update/${id}`, values)
        //         .then((response) => {
        //             if (response.data.status == true) {
        //                 NotificationManager.success(response.data.message);
        //             } else {
        //                 NotificationManager.error(response.data.message);
        //             }
        //         })
        //         .catch(function (error) {
        //             setErrors(error.response.data.errors)
        //         });
        // } else {



        // formData.append('birth_certificate',values.birth_certificate);
        await axios.post(`/api/admin/crm/customer/store`, values)
            .then((response) => {
                console.log(values)
                if (response.data.status === true) {
                    NotificationManager.success(response.data.message);
                } else {
                    NotificationManager.error(response.data.message);
                }
            })
            .catch(function (error) {
                setErrors(error.response.data.errors)
            });
        // }
        // history.push(`${adminRoot}/customers/list`);
    };

    const entityOnSubmit = async (values) => {
        // console.log(values);
        // if (edit) {
        //     await axios.patch(`${adminPathApi}/user/update/${id}`, values)
        //         .then((response) => {
        //             if (response.data.status == true) {
        //                 NotificationManager.success(response.data.message);
        //             } else {
        //                 NotificationManager.error(response.data.message);
        //             }
        //         })
        //         .catch(function (error) {
        //             setErrors(error.response.data.errors)
        //         });
        // } else {



        // formData.append('birth_certificate',values.birth_certificate);
        await axios.post(`/api/admin/crm/entity/store`, values)
            .then((response) => {
                if (response.data.status === true) {
                    NotificationManager.success(response.data.message);
                } else {
                    NotificationManager.error(response.data.message);
                }
            })
            .catch(function (error) {
                setErrors(error.response.data.errors)
            });
        // }
        // history.push(`${adminRoot}/customers/list`);
    };


    const [value, setValue] = useState('');

    const change = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setValue(e.target.value)
        }
    };

    return (
        <>
            <Suspense fallback={<div className="loading"/>}>
                <Row>
                    <Colxx xss="12">
                        <Breadcrumb heading={"alluse"} match={match}/>
                        <div className="search-sm d-inline-block mr-1 mb-3 align-top float-right">
                            <input
                                type="text"
                                name="keyword"
                                id="search"
                                placeholder={'جستجو'}
                                onKeyPress={(e) => onSearchKey(e)}
                            />
                        </div>
                        <Separator className="mb-5"/>
                    </Colxx>
                </Row>
            </Suspense>
            <Card>
                <CardBody>
                    <div>
                        <Nav tabs>
                            <NavItem className="Bold">
                                <NavLink
                                    className={({active: activeTab === '1'})}
                                    onClick={() => {
                                        toggle('1');
                                    }}
                                >
                                    حقیقی
                                </NavLink>
                            </NavItem>
                            <NavItem className="Bold">
                                <NavLink
                                    className={({active: activeTab === '2'})}
                                    onClick={() => {
                                        toggle('2');
                                    }}
                                >
                                    حقوقی
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane className="mt-3" tabId="1">
                                <AlertError errors={serverError}/>
                               <AddCustomerForm/>
                            </TabPane>
                            <TabPane className="mt-3" tabId="2">
                                <AlertError errors={serverError}/>
                                <AddEntityForm/>
                            </TabPane>
                        </TabContent>
                    </div>
                </CardBody>
            </Card>
        </>
    );

}

export default AddCustomer;
