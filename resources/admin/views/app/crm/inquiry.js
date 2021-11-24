import React, {Suspense, useState} from "react";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import AlertError from "../../../components/AlertError";
import {Field, Form, Formik} from "formik";
import Saved from "./saved";
import UnSaved from "./unsaved";
import {
    CardBody,
    CardTitle,
    Row,
    FormGroup,
    Label,
    Card,
    Button,
} from "reactstrap";
import {adminPathApi} from "../../../constants/defaultValues";


const Inquiry = ({match}) => {

    const [selectId, setSelectedId] = useState(null);

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

    const [serverError, setServerError] = React.useState({});

    const [initialValues, setInitialValues] = React.useState({
        mobile_unique: "",
    });

    const [show, setShow] = useState(false);

    const showHandler = ()=>{}

    const onSubmit =async (values) => {

        axios.post(`${adminPathApi}/crm/customer/inquiry`, values)
            .then((response) => {
                if (response.data.status === true) {
                    //render add customer page
                    console.log(response.data.message)
                } else {
                    //render customer information page (api/admin/customer/show/{id})
                    console.log(response.data.message)
                }
            })
            .catch(function (error) {

            });
    };

    return (
        <>
            <Suspense fallback={<div className={'loading'}/>}>
                <Row>
                    <Colxx xss="12">
                        <Breadcrumb heading={"myadd.Inquiry"} match={match}/>
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
                <AlertError errors={serverError}/>
                <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
                    {({errors, touched, setFieldValue, setFieldTouched, values}) => (
                        <Form>
                            <Row>
                                <Colxx md={12}>
                                    {show === false ?
                                        <Colxx md={12}>
                                            <Card>
                                                <CardTitle className="MyTitle">استعلام مشتری</CardTitle>
                                                <CardBody>
                                                    <FormGroup>
                                                        <Label>شماره تماس</Label>
                                                        <Field name={"mobile_unique"}
                                                               className={'form-control col-md-6'}
                                                               placeholder="شماره تلفن" required/>
                                                        {errors.mobile_unique && touched.mobile_unique && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.mobile_uique}
                                                            </div>
                                                        )}
                                                        <Button onClick={showHandler} type="submit" className="mt-2">بررسی
                                                            اطلاعات</Button>
                                                    </FormGroup>
                                                </CardBody>
                                            </Card>
                                        </Colxx>
                                        :
                                        <Saved match={match}/>
                                        // <UnSaved match={match} />
                                    }
                                </Colxx>
                            </Row>
                        </Form>
                    )}
                </Formik>
            </Suspense>
        </>
    );
}
export default Inquiry;
