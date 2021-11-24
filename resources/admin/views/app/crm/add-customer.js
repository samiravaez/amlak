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
                                <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>

                                    {({errors, touched, setFieldValue, setFieldTouched, values}) => (
                                        <Form>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label><span id="redspan">*</span>&nbsp;تلفن :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"mobile_unique"} required="required"/>
                                                        {errors.mobile_unique && touched.mobile_unique && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.mobile_unique}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                {/*<Col md={6}>*/}
                                                {/*    <FormGroup>*/}
                                                {/*        <Label><span id="redspan">*</span>&nbsp;منطقه موردنظر :</Label>*/}
                                                {/*        <Field id="shadow" className="form-control" type="text"*/}
                                                {/*               name={"mantaghe_id"} required="required"/>*/}
                                                {/*        {errors.mobile_unique && touched.mobile_unique && (*/}
                                                {/*            <div className="invalid-feedback d-block">*/}
                                                {/*                {errors.mobile_unique}*/}
                                                {/*            </div>*/}
                                                {/*        )}*/}
                                                {/*    </FormGroup>*/}
                                                {/*</Col>*/}
                                            </Row>
                                            <Row form>
                                                <Col md={3}>
                                                    <FormGroup>
                                                        <Label>استان :</Label>
                                                        <Select
                                                            id="shadow" className="form-control"
                                                            name="ostan_id"
                                                            options={selectOptions.ostanOpt}
                                                            getOptionLabel={(option) => option.Title}
                                                            getOptionValue={(option) => option.ID}
                                                            value={selectOptions.ostanOpt.find((o) => o.ostan_id == values.ostan_id)}
                                                            onChange={(e) => {
                                                                setFieldValue('ostan_id', e.ID);
                                                                renderShahrestans(e.ID)
                                                                renderMantaghes(null)
                                                                renderBakhshs(null)
                                                            }}
                                                        />
                                                        {errors.ostan_id && touched.ostan_id && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.ostan_id}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                    {console.log(values)}
                                                </Col>
                                                <Col md={3}>
                                                    <FormGroup>
                                                        <Label>شهر :</Label>
                                                        <Select
                                                            name="shahrestan_id"
                                                            id="shadow" className="form-control"
                                                            options={selectOptions.shahrestanOpt}
                                                            getOptionLabel={(option) => option.Title}
                                                            getOptionValue={(option) => option.ID}
                                                            value={selectOptions.shahrestanOpt ? selectOptions.shahrestanOpt.find((o) => o.shahrestan_id == values.shahrestan_id) : ''}
                                                            onChange={(e) => {
                                                                setFieldValue('shahrestan_id', e.ID)
                                                                renderMantaghes(e.ID)
                                                                renderBakhshs(null)
                                                            }}

                                                        />
                                                        {errors.shahrestan_id && touched.shahrestan_id && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.shahrestan_id}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={3}>
                                                    <FormGroup>
                                                        <Label>منطقه :</Label>
                                                        <Select
                                                            name="mantaghe_id"
                                                            id="shadow" className="form-control"
                                                            options={selectOptions.mantagheOpt}
                                                            getOptionLabel={(option) => option.Title}
                                                            getOptionValue={(option) => option.ID}
                                                            value={selectOptions.mantagheOpt ? selectOptions.mantagheOpt.find((o) => o.mantaghe_id == values.mantaghe_id) : ''}
                                                            onChange={(e) => {
                                                                setFieldValue('mantaghe_id', e.ID)
                                                                renderBakhshs(e.ID)
                                                            }}
                                                        />

                                                        {errors.mantaghe_id && touched.mantaghe_id && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.mantaghe_id}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={3}>
                                                    <FormGroup>
                                                        <Label>بخش :</Label>
                                                        <Select
                                                            name="bakhsh_id"
                                                            id="shadow" className="form-control"
                                                            options={selectOptions.bakhshOpt}
                                                            getOptionLabel={(option) => option.Title}
                                                            getOptionValue={(option) => option.ID}
                                                            value={selectOptions.bakhshOpt ? selectOptions.bakhshOpt.find((o) => o.bakhsh_id == values.bakhsh_id) : ''}
                                                            onChange={(e) => setFieldValue('bakhsh_id', e.ID)}

                                                        />
                                                        {errors.bakhsh_id && touched.bakhsh_id && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.bakhsh_id}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label><span id="redspan">*</span>&nbsp;نام :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"first_name"} required="required"/>
                                                        {errors.first_name && touched.first_name && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.first_name}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label><span id="redspan">*</span>&nbsp;نام خانوادگی :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"last_name"} required="required"/>
                                                        {errors.last_name && touched.last_name && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.last_name}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup tag="fieldset">
                                                        <Label>جنسیت :</Label>
                                                        <FormGroup check>
                                                            <Label check>
                                                                <Input type="radio" name={"gender"} value={0}/>{' '}
                                                                <span className="ml-3">زن</span>
                                                            </Label>
                                                            <Label className="ml-3" check>
                                                                <Input type="radio" name={"gender"} value={1}/>{' '}
                                                                <span className="ml-3">مرد</span>
                                                            </Label>
                                                            <Label className="ml-3" check>
                                                                <Input type="radio" name={"gender"} value={2}/>{' '}
                                                                <span className="ml-3">سایر</span>
                                                            </Label>
                                                        </FormGroup>
                                                        {errors.gender && touched.gender && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.gender}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup tag="fieldset">
                                                        <Label>وضعیت تأهل :</Label>
                                                        <FormGroup check>
                                                            <Label check>
                                                                <Input type="radio" name={"marital_status"}
                                                                       value={0}/>{' '}
                                                                <span className="ml-3">مجرد</span>
                                                            </Label>
                                                            <Label className="ml-3" check>
                                                                <Input type="radio" name={"marital_status"}
                                                                       value={1}/>{' '}
                                                                <span className="ml-3">متأهل</span>
                                                            </Label>
                                                        </FormGroup>
                                                        {errors.marital_status && touched.marital_status && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.marital_status}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>نام کاربری :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"username"}/>
                                                        {errors.username && touched.username && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.username}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>نقش مشتری :</Label>
                                                        {/*<FormikReactSelect name="customer_type_id"*/}
                                                        {/*                   onChange={setFieldValue}*/}
                                                        {/*                   onBlur={setFieldTouched}*/}
                                                        {/*                   value={values.customer} options={[*/}
                                                        {/*    {*/}
                                                        {/*        label: 'حضوری',*/}
                                                        {/*        value: '0'*/}
                                                        {/*    },*/}
                                                        {/*    {*/}
                                                        {/*        label: 'تلفنی',*/}
                                                        {/*        value: '1'*/}
                                                        {/*    }*/}
                                                        {/*]}/>*/}
                                                        {/*{errors.customer && touched.customer && (*/}
                                                        {/*    <div className="invalid-feedback d-block">*/}
                                                        {/*        {errors.customer}*/}
                                                        {/*    </div>*/}
                                                        {/*)}*/}
                                                        <Select
                                                            id="shadow" className="form-control"
                                                            name="customer_type_id"
                                                            options={selectOptions.customerTypeOpt}
                                                            getOptionLabel={(option) => option.name}
                                                            getOptionValue={(option) => option.id}
                                                            value={selectOptions.customerTypeOpt ? selectOptions.customerTypeOpt.find((o) => o.customer_type_id == values.customer_type_id) : ''}
                                                            onChange={(e) =>
                                                                setFieldValue('customer_type_id', e.id)}
                                                        />
                                                        {errors.customer_type_id && touched.customer_type_id && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.customer_type_id}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>تعداد فرزند :</Label>
                                                        <Field id="shadow" type="text" className="form-control"
                                                               name={"children_count"}/>
                                                        {errors.children_count && touched.children_count && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.children_count}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label><span id="redspan">*</span>&nbsp;کد ملی :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"id_number"}/>
                                                        {errors.id_number && touched.id_number && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.id_number}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <FieldArray name="children">
                                                {({insert, remove, push}) => (
                                                    <div>
                                                        {values.children && values.children.length > 0 ? (
                                                                values.children.map((child, index) => (
                                                                    <div className="row" key={index}>
                                                                        <div className="col">
                                                                            <label
                                                                                htmlFor={`children.${index}.name`}>نام
                                                                                </label>
                                                                            <Field
                                                                                name={`children.${index}.name`}
                                                                                type="text"
                                                                            />
                                                                            <ErrorMessage
                                                                                name={`children.${index}.name`}
                                                                                component="div"
                                                                                className="field-error"
                                                                            />
                                                                        </div>
                                                                        <div className="col">
                                                                            <label
                                                                                htmlFor={`children.${index}.birth_date`}>تاریخ تولد</label>
                                                                            <DatePicker id="shadow" className="form-control"
                                                                                        name={"birth_date"} calendar={persian}
                                                                                        locale={persian_fa}/>
                                                                            <ErrorMessage
                                                                                name={`children.${index}.birth_date`}
                                                                                component="div"
                                                                                className="field-error"
                                                                            />
                                                                            <button
                                                                                type="button"
                                                                                className="secondary"
                                                                                onClick={() => remove(index)}
                                                                            >
                                                                                X
                                                                            </button>
                                                                        </div>


                                                                    </div>
                                                                ))) :
                                                            ('')}
                                                        <button
                                                            type="button"
                                                            className="secondary"
                                                            onClick={() => push({
                                                                name: '', birth_date: ''})}
                                                        >
                                                            افزودن فرزند
                                                        </button>
                                                    </div>
                                                )}
                                            </FieldArray>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>درآمد ماهیانه:</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"monthly_income"} placeholder="به تومان"/>
                                                        {errors.monthly_income && touched.monthly_income && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.monthly_income}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>تلفن ثابت :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"phone"}/>
                                                        {errors.phone && touched.phone && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.phone}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>رنگ چشم :</Label>
                                                        <Select
                                                            id="shadow" className="form-control"
                                                            name="eye_color_id"
                                                            options={selectOptions.eyeColorOpt}
                                                            getOptionLabel={(option) => option.name}
                                                            getOptionValue={(option) => option.id}
                                                            value={selectOptions.eyeColorOpt ? selectOptions.eyeColorOpt.find((o) => o.eye_color_id == values.eye_color_id) : ''}
                                                            onChange={(e) =>
                                                                setFieldValue('eye_color_id', e.id)}
                                                        />
                                                        {errors.eye_color_id && touched.eye_color_id && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.eye_color_id}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>وضعیت مالی :</Label>
                                                        <Select
                                                            id="shadow" className="form-control"
                                                            name="financial_status"
                                                            options={[
                                                                {value: 0, label: 'بد'},
                                                                {value: 1, label: 'خوب'},
                                                                {value: 2, label: 'عالی'}
                                                            ]}
                                                            onChange={(e) =>
                                                                setFieldValue('financial_status', e.value)}
                                                        />
                                                        {errors.financial_status && touched.financial_status && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.financial_status}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>تاریخ ازدواج :</Label>
                                                        <DatePicker id="shadow" className="form-control"
                                                                    name={"marriage_date"} calendar={persian}
                                                                    locale={persian_fa}/>
                                                        {errors.marriage_date && touched.marriage_date && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.marriage_date}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>تاریخ تولد :</Label>
                                                        <DatePicker id="shadow" className="form-control"
                                                                    name={"birth_date"} calendar={persian}
                                                                    locale={persian_fa}/>
                                                        {errors.birth_date && touched.birth_date && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.birth_date}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>تاریخ تولد همسر :</Label>
                                                        <DatePicker id="shadow" className="form-control"
                                                                    name={"spouse_birth_date"} calendar={persian}
                                                                    locale={persian_fa}/>
                                                        {errors.spouse_birth_date && touched.spouse_birth_date && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.spouse_birth_date}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>وضعیت اثاثیه :</Label>
                                                        <Select
                                                            id="shadow" className="form-control"
                                                            name="furniture_status"
                                                            options={[
                                                                {value: 1, label: 'کلاسیک'},
                                                                {value: 0, label: 'مدرن'},
                                                            ]}
                                                        />
                                                        {errors.furniture_status && touched.furniture_status && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.furniture_status}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>وضعیت جسمی :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"physical_status"}/>
                                                        {errors.physical_status && touched.physical_status && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.physical_status}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>وضعیت مشتری :</Label>
                                                        <Select
                                                            id="shadow" className="form-control"
                                                            name="customer_state_id"
                                                            options={selectOptions.customerStateOpt}
                                                            getOptionLabel={(option) => option.name}
                                                            getOptionValue={(option) => option.id}
                                                            value={selectOptions.customerStateOpt ? selectOptions.customerStateOpt.find((o) => o.customer_state_id == values.customer_state_id) : ''}
                                                            onChange={(e) =>
                                                                setFieldValue('customer_state_id', e.id)}
                                                        />
                                                        {errors.customer_state_id && touched.customer_state_id && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.customer_state_id}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>وضعیت خرید :</Label>
                                                        <Select
                                                            id="shadow" className="form-control"
                                                            name="purchase_stage_id"
                                                            options={selectOptions.purchaseStageOpt}
                                                            getOptionLabel={(option) => option.name}
                                                            getOptionValue={(option) => option.id}
                                                            value={selectOptions.purchaseStageOpt ? selectOptions.purchaseStageOpt.find((o) => o.purchase_stage_id == values.purchase_stage_id) : ''}
                                                            onChange={(e) =>
                                                                setFieldValue('purchase_stage_id', e.id)}
                                                        />
                                                        {errors.purchase_state_id && touched.purchase_state_id && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.purchase_state_id}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label><span id="redspan">*</span>&nbsp;وبسایت :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"website"} placeholder="www.tabtarh.com"/>
                                                        {errors.website && touched.website && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.website}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>توضیحات :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"description"}/>
                                                        {errors.description && touched.description && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.description}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>علت تغییر محل سکونت :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"residence_change_reason"}/>
                                                        {errors.residence_change_reason && touched.residence_change_reason && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.residence_change_reason}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>تلفن همراه :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"mobile_number"}/>
                                                        {errors.mobile_number && touched.mobile_number && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.mobile_number}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>ایمیل :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"email"} placeholder="example@gmail.com"/>
                                                        {errors.email && touched.email && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.email}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>شغل :</Label>
                                                        <Select
                                                            id="shadow" className="form-control"
                                                            name="career_id"
                                                            options={selectOptions.careerOpt}
                                                            getOptionLabel={(option) => option.name}
                                                            getOptionValue={(option) => option.id}
                                                            value={selectOptions.careerOpt ? selectOptions.careerOpt.find((o) => o.career_id == values.career_id) : ''}
                                                            onChange={(e) =>
                                                                setFieldValue('career_id', e.id)}
                                                        />
                                                        {errors.career_id && touched.career_id && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.career_id}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>سرمایه تقریبی :</Label>
                                                        <Field id="shadow" className="form-control" name={"fund_value"}
                                                               type="text" placeholder="به تومان"/>
                                                        {errors.fund_value && touched.fund_value && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.fund_value}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row form>

                                                {/*<Col md={6}>*/}
                                                {/*    <FormGroup>*/}
                                                {/*<Label>نحوه پرداخت  :</Label>*/}
                                                {/*<FormikReactSelect name="payment" onChange={setFieldValue} onBlur={setFieldTouched} value={values.payment} options={[*/}
                                                {/*    {*/}
                                                {/*        label: 'نقدی',*/}
                                                {/*        value: '0'*/}
                                                {/*    },*/}
                                                {/*    {*/}
                                                {/*        label: 'معاوضه',*/}
                                                {/*        value: '1'*/}
                                                {/*    },*/}
                                                {/*    {*/}
                                                {/*        label: 'وام',*/}
                                                {/*        value: '2'*/}
                                                {/*    },*/}
                                                {/*    {*/}
                                                {/*        label: 'فروش ملک های دیگر',*/}
                                                {/*        value: '3'*/}
                                                {/*    }*/}
                                                {/*]} />*/}
                                                {/*{errors.payment && touched.payment && (*/}
                                                {/*    <div className="invalid-feedback d-block">*/}
                                                {/*        {errors.payment}*/}
                                                {/*    </div>*/}
                                                {/*)}*/}
                                                {/*    </FormGroup>*/}
                                                {/*</Col>*/}
                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>حضور با :</Label>
                                                        <Select
                                                            id="shadow" className="form-control"
                                                            name="attendant_id"
                                                            options={selectOptions.attendantOpt}
                                                            getOptionLabel={(option) => option.name}
                                                            getOptionValue={(option) => option.id}
                                                            value={selectOptions.attendantOpt ? selectOptions.attendantOpt.find((o) => o.attendant_id == values.attendant_id) : ''}
                                                            onChange={(e) =>
                                                                setFieldValue('attendant_id', e.id)}
                                                        />
                                                        {errors.attendant_id && touched.attendant_id && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.attendant_id}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>

                                                {/*<Col md={6}>*/}
                                                {/*<FormGroup>*/}
                                                {/*    <Label>نوع مشاوره اولیه  :</Label>*/}
                                                {/*    <FormikReactSelect name="Consulting" onChange={setFieldValue} onBlur={setFieldTouched} value={values.Consulting} options={[*/}
                                                {/*        {*/}
                                                {/*            label: 'جدی-آنی',*/}
                                                {/*            value: '0'*/}
                                                {/*        },*/}
                                                {/*        {*/}
                                                {/*            label: 'درحال جست و جو',*/}
                                                {/*            value: '1'*/}
                                                {/*        },*/}
                                                {/*        {*/}
                                                {/*            label: 'گذری',*/}
                                                {/*            value: '2'*/}
                                                {/*        },*/}
                                                {/*        {*/}
                                                {/*            label: 'مبتدی',*/}
                                                {/*            value: '3'*/}
                                                {/*        },*/}
                                                {/*        {*/}
                                                {/*            label: 'مشتری سرمایه گذار',*/}
                                                {/*            value: '4'*/}
                                                {/*        },*/}
                                                {/*        {*/}
                                                {/*            label: 'واسطه',*/}
                                                {/*            value: '5'*/}
                                                {/*        }*/}
                                                {/*    ]} />*/}
                                                {/*    {errors.Consulting && touched.Consulting && (*/}
                                                {/*        <div className="invalid-feedback d-block">*/}
                                                {/*            {errors.Consulting}*/}
                                                {/*        </div>*/}
                                                {/*    )}*/}
                                                {/*</FormGroup>*/}
                                                {/*</Col>*/}
                                            </Row>
                                            <Row form>
                                                {/*<Col md={12}>*/}
                                                {/*    <FormGroup>*/}
                                                {/*        <Label>آدرس محل کار  :</Label>*/}
                                                {/*        <Field id="shadow" className="form-control" type="text" name={"address"} />*/}
                                                {/*        {errors.address && touched.address && (*/}
                                                {/*            <div className="invalid-feedback d-block">*/}
                                                {/*                {errors.address}*/}
                                                {/*            </div>*/}
                                                {/*        )}*/}
                                                {/*    </FormGroup>*/}
                                                {/*</Col>*/}
                                                {/*<Col md={12}>*/}
                                                {/*    <FormGroup>*/}
                                                {/*        <Label><span id="redspan">*</span>&nbsp;آدرس محل زندگی  :</Label>*/}
                                                {/*        <Field id="shadow" className="form-control" name={"Location"} />*/}
                                                {/*        {errors.Location && touched.Location && (*/}
                                                {/*            <div className="invalid-feedback d-block">*/}
                                                {/*                {errors.Location}*/}
                                                {/*            </div>*/}
                                                {/*        )}*/}
                                                {/*    </FormGroup>*/}
                                                {/*</Col>*/}
                                                <Col md={6}>
                                                    <FieldArray name="addresses">
                                                        {({insert, remove, push}) => (
                                                            <div>
                                                                {values.addresses && values.addresses.length > 0 ? (
                                                                        values.addresses.map((address, index) => (
                                                                            <div className="row" key={index}>
                                                                                <div className="col">
                                                                                    <label
                                                                                        htmlFor={`addresses.${index}.ostan_id`}>نام
                                                                                        استان</label>
                                                                                    <Field
                                                                                        name={`addresses.${index}.ostan_id`}
                                                                                        type="number"
                                                                                    />
                                                                                    <ErrorMessage
                                                                                        name={`addresses.${index}.ostan_id`}
                                                                                        component="div"
                                                                                        className="field-error"
                                                                                    />
                                                                                </div>
                                                                                <div className="col">
                                                                                    <label
                                                                                        htmlFor={`addresses.${index}.shahrestan_id`}>شهرستان</label>
                                                                                    <Field
                                                                                        name={`addresses.${index}.shahrestan_id`}
                                                                                        type="number"
                                                                                    />
                                                                                    <ErrorMessage
                                                                                        name={`addresses.${index}.shahrestan_id`}
                                                                                        component="div"
                                                                                        className="field-error"
                                                                                    />
                                                                                </div>
                                                                                <div className="col">
                                                                                    <label
                                                                                        htmlFor={`addresses.${index}.mantaghe_id`}>منطقه</label>
                                                                                    <Field
                                                                                        name={`addresses.${index}.mantaghe_id`}
                                                                                        type="number"
                                                                                    />
                                                                                    <ErrorMessage
                                                                                        name={`addresses.${index}.mantaghe_id`}
                                                                                        component="div"
                                                                                        className="field-error"
                                                                                    />
                                                                                </div>
                                                                                <div className="col">
                                                                                    <label
                                                                                        htmlFor={`addresses.${index}.bakhsh_id`}>بخش</label>
                                                                                    <Field
                                                                                        name={`addresses.${index}.bakhsh_id`}
                                                                                        type="number"
                                                                                    />
                                                                                    <ErrorMessage
                                                                                        name={`addresses.${index}.bakhsh_id`}
                                                                                        component="div"
                                                                                        className="field-error"
                                                                                    />
                                                                                </div>
                                                                                <div className="col">
                                                                                    <label
                                                                                        htmlFor={`addresses.${index}.address`}>آدرس</label>
                                                                                    <Field
                                                                                        name={`addresses.${index}.address`}
                                                                                        type="text"
                                                                                    />
                                                                                    <ErrorMessage
                                                                                        name={`addresses.${index}.address`}
                                                                                        component="div"
                                                                                        className="field-error"
                                                                                    />
                                                                                    <button
                                                                                        type="button"
                                                                                        className="secondary"
                                                                                        onClick={() => remove(index)}
                                                                                    >
                                                                                        X
                                                                                    </button>
                                                                                </div>

                                                                            </div>
                                                                        ))) :
                                                                    ('')}
                                                                <button
                                                                    type="button"
                                                                    className="secondary"
                                                                    onClick={() => push({
                                                                        ostan_id: '', shahrestan_id: '',
                                                                        mantaghe_id: '', bakhsh_id: '',
                                                                        address:''
                                                                    })}
                                                                >
                                                                    افزودن آدرس
                                                                </button>
                                                            </div>
                                                        )}
                                                    </FieldArray>
                                                </Col>

                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>عکس :</Label>
                                                        <Field id="shadow" type="file" className="form-control"
                                                               name={"photo"}/>
                                                        {errors.photo && touched.photo && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.photo}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>فایل جانبی</Label>
                                                        <Field id="shadow" className="form-control" type="file"
                                                               name={"file"}/>
                                                        {errors.file && touched.file && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.file}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                            </Row>

                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>کارت ملی :</Label>
                                                        <Field id="shadow" type="file" className="form-control"
                                                               name={"id_card"}/>
                                                        {errors.id_card && touched.id_card && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.id_card}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>شناسنامه</Label>
                                                        <Input id="shadow" className="form-control" type="file"
                                                               name={"birth_certificate"}
                                                               onChange={(event) =>{
                                                                   let formData = new FormData();
                                                                   formData.append("birth_certificate", event.target.files[0]);
                                                                   let newFormData = [...formData];
                                                                   console.log(newFormData);
                                                                   setFieldValue("birth_certificate", newFormData.get())

                                                               }}/>

                                                        {errors.birth_certificate && touched.birth_certificate && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.birth_certificate}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Col md={3}>
                                                <FormGroup>
                                                    <Button className="form-control" id="sub"
                                                            type="submit">ذخیره</Button>
                                                </FormGroup>
                                            </Col>
                                        </Form>
                                    )}
                                </Formik>
                            </TabPane>
                            <TabPane className="mt-3" tabId="2">
                                <AlertError errors={serverError}/>
                                <Formik enableReinitialize initialValues={initialValues} onSubmit={entityOnSubmit}>
                                    {({errors, touched, setFieldValue, setFieldTouched, values}) => (
                                        <Form>
                                            <Row form>
                                                <FormGroup>
                                                    <Label><span id="redspan">*</span>&nbsp;تلفن :</Label>
                                                    <Field id="shadow" className="form-control" type="text"
                                                           name={"mobile_unique"} required="required"/>
                                                    {errors.mobile_unique && touched.mobile_unique && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.mobile_unique}
                                                        </div>
                                                    )}
                                                </FormGroup>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>نام شرکت :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"entity_name"}/>
                                                        {errors.name && touched.name && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.name}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>تلفن :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"phone"}/>
                                                        {errors.phone && touched.phone && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.phone}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>موبایل :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"mobile_unique"} required/>
                                                        {errors.mobile_unique && touched.mobile_unique && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.mobile_unique}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>شناسه ملی :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"id_number"}/>
                                                        {errors.id_number && touched.id_number && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.id_number}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>تاریخ تاسیس :</Label>
                                                        <DatePicker id="shadow" className="form-control"
                                                                    name={"launch_date"} calendar={persian}
                                                                    locale={persian_fa}/>
                                                        {errors.launch_date && touched.launch_date && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.launch_date}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    {/*this should be select search*/}
                                                    <FormGroup>
                                                        <Label>نام نماینده :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"Agent"}/>
                                                        {errors.Agent && touched.Agent && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.Agent}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>سمت :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"Place"}/>
                                                        {errors.Place && touched.Place && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.Place}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>تعداد پرسنل :</Label>
                                                        <Field id="shadow" className="form-control" type="number"
                                                               name={"staff_count"}/>
                                                        {errors.staff_count && touched.staff_count && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.staff_count}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>صنف شرکت :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"business_class"}/>
                                                        {errors.business_class && touched.business_class && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.business_class}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>صنعت :</Label>
                                                        <Select
                                                            id="shadow" className="form-control"
                                                            name="industry_id"
                                                            options={selectOptions.industryOpt}
                                                            getOptionLabel={(option) => option.name}
                                                            getOptionValue={(option) => option.id}
                                                            value={selectOptions.industryOpt ? selectOptions.industryOpt.find((o) => o.industry_id == values.industry_id) : ''}
                                                            onChange={(e) =>
                                                                setFieldValue('industry_id', e.id)}
                                                        />
                                                        {errors.industry_id && touched.industry_id && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.industry_id}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>کد اقتصادی :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"economic_code"}/>
                                                        {errors.economic_code && touched.economic_code && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.economic_code}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>شماره ثبتی :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"registration_number"}/>
                                                        {errors.registration_number && touched.registration_number && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.registration_number}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>تلفن ثابت :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"Landline"}/>
                                                        {errors.Landline && touched.Landline && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.Landline}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>نوع شرکت :</Label>
                                                        <Select
                                                            id="shadow" className="form-control"
                                                            name="company_type"
                                                            options={[
                                                                {value: 0, label: 'سهامی عام'},
                                                                {value: 1, label: 'سهامی خاص'},
                                                            ]}
                                                            onChange={(e) =>
                                                                setFieldValue('company_type', e.value)}
                                                        />
                                                        {errors.company_type && touched.company_type && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.company_type}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label><span id="redspan">*</span>&nbsp;تلفن همراه :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"mobile"}/>
                                                        {errors.mobile && touched.mobile && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.mobile}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row form>


                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>نوع شرکت :</Label>
                                                        <FormikReactSelect id="shadow" name="kind"
                                                                           onChange={setFieldValue}
                                                                           onBlur={setFieldTouched} value={values.kind}
                                                                           options={[
                                                                               {
                                                                                   label: 'سهامی عام',
                                                                                   value: '0'
                                                                               },
                                                                               {
                                                                                   label: 'مسئولیت محدود',
                                                                                   value: '1'
                                                                               }
                                                                           ]}/>
                                                        {errors.kind && touched.kind && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.kind}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>

                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>تاریخ تأسیس :</Label>
                                                        <div style={{direction: "rtl"}}>
                                                            <DatePicker
                                                                id="shadow"
                                                                className="form-control"
                                                                calendar={persian}
                                                                name="date"
                                                                locale={persian_fa}
                                                                calendarPosition="bottom-right"
                                                            />
                                                        </div>
                                                        {errors.date && touched.date && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.date}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>ساعت کاری (شروع) :</Label>
                                                        <Input
                                                            id="shadow"
                                                            type="time"
                                                            name="start_working_time"
                                                            placeholder="time placeholder"
                                                        />
                                                        {errors.start_working_time && touched.start_working_time && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.start_working_time}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>ساعت کاری (پایان) :</Label>
                                                        <Input
                                                            id="shadow"
                                                            type="time"
                                                            name="finish_working_time"
                                                            placeholder="time placeholder"
                                                        />
                                                        {errors.finish_working_time && touched.finish_working_time && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.finish_working_time}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row form>

                                                <Col md={6}>
                                                    <FormGroup tag="fieldset">
                                                        <Label><span id="redspan">*</span>&nbsp;آیا شرکت نمایندگی است :</Label>
                                                        <FormGroup check>
                                                            <Label check>
                                                                <Input type="radio" name="representative"/>{' '}
                                                                <span className="ml-3">بله</span>
                                                            </Label>
                                                            <Label className="ml-3" check>
                                                                <Input type="radio" name="representative"/>{' '}
                                                                <span className="ml-3">خیر</span>
                                                            </Label>
                                                        </FormGroup>
                                                        {errors.representative && touched.representative && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.representative}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row form>

                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label> فکس :</Label>
                                                        <Field id="shadow" className="form-control" type="text"
                                                               name={"fax"}/>
                                                        {errors.fax && touched.fax && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.fax}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label> تعداد مشتری های هفتگی :</Label>
                                                        <Field id="shadow" className="form-control" type="number"
                                                               name={"weekly_customers_count"}/>
                                                        {errors.weekly_customers_count && touched.weekly_customers_count && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.weekly_customers_count}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label> کارت ویزیت :</Label>
                                                        <Field id="shadow" className="form-control" type="file"
                                                               name={"business_card"}/>
                                                        {errors.business_card && touched.business_card && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.business_card}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md={12}>
                                                    <FormGroup>
                                                        <Label>آدرس کنونی شرکت :</Label>
                                                        <Field id="shadow" className="form-control" name={"Company"}/>
                                                        {errors.Company && touched.Company && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.Company}
                                                            </div>
                                                        )}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={3}>
                                                    <FormGroup>
                                                        <Button className="form-control" id="sub" type="submit">ذخیره</Button>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </Form>
                                    )}
                                </Formik>
                            </TabPane>
                        </TabContent>
                    </div>
                </CardBody>
            </Card>
        </>
    );

}

export default AddCustomer;
