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

const AddEntityForm = ({match}) => {

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
        industryOpt: [],
        shahrestanOpt: [],
        mantagheOpt: [],
        bakhshOpt: [],
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
        mobile_unique: '',
        email: '',
        id_number: '',
        entity: 0,
        creator_id: '',
        mantaghe_id: '',
        mobile_number: '',
        phone: '',
        financial_status: '',
        website: '',
        file: '',
        description: '',
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
            <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
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
                                           name={"name"}/>
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
                                                                    htmlFor={`children.${index}.position`}>تاریخ تولد</label>
                                                                <DatePicker id="shadow" className="form-control"
                                                                            name={"position"} calendar={persian}
                                                                            locale={persian_fa}/>
                                                                <ErrorMessage
                                                                    name={`children.${index}.position`}
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
                                                    name: '', position: ''})}
                                            >
                                                افزودن نماینده
                                            </button>
                                        </div>
                                    )}
                                </FieldArray>
                            </Col>
                        </Row>
                        <Row form>
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
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>نوع شرکت :</Label>
                                    <FormikReactSelect id="shadow" name="company_type"
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
                                    {errors.company_type && touched.company_type && (
                                        <div className="invalid-feedback d-block">
                                            {errors.company_type}
                                        </div>
                                    )}
                                </FormGroup>
                            </Col>

                        </Row>
                        <Row form>

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
                            <Col md={3}>
                                <FormGroup>
                                    <Button className="form-control" id="sub" type="submit">ذخیره</Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                )}
            </Formik>
        </>
    );

}

export default AddEntityForm;
