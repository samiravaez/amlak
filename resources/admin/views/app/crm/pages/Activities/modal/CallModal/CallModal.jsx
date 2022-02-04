import React, { useState } from "react";
import "antd/dist/antd.css";
import { Modal, Button, Checkbox } from "antd";
import { Field, Form, Formik } from "formik";
import { FormGroup, Label } from "reactstrap";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import CollapsForm from "./CollapseForm";
import BtnCustom from "../../../../../../../components/UI/BtnCustom";
import BtnOutLine from "../../../../../../../components/UI/BtnOutLine";
import {convertNumbers} from "../../../../../../../helpers/convertNumbers";
import {addCall} from "../../../../../../../services/businessServices";
import NotificationManager from "../../../../../../../components/common/react-notifications/NotificationManager";
const CallModal = () => {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const showModal = () => {
        setVisible(true);
    };
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setVisible(false);
        }, 3000);
    };
    const handleCancel = () => {
      setVisible(false);
    };

    const handleSub = async (values) => {
        addCall(values).then((response) => {
            if (response.status == true) {
                NotificationManager.success(response.data.message);
            } else {
                NotificationManager.error(response.data.message);
            }
        })
    }
    return (
        <>
            <Button type="text" onClick={showModal}>
                <h6>تماس</h6>
            </Button>
            <Modal
                visible={visible}
                title="Title"
                onOk={handleOk}
                onCancel={handleCancel}
                width={1300}
                footer={<div></div>}
            >
                <div>
                    <h1>My Form</h1>
                    <Formik
                        initialValues={{
                            topic: "",
                            description: "",
                            start_time: "",
                            reminder_time: "",
                            FieldArraysReminder: {},
                            call_side: "",
                            status: "",
                            priority: "",
                            weight: "",
                            creator_id: "",
                            hours: "",
                            minutes: "",
                            reminder: false
                        }}

                        onSubmit={handleSub}
                    >
                          {({
                            setFieldValue,
                            setFieldTouched,
                            values,
                            setValues,
                        }) => (
                            <Form>
                                <FormGroup className="d-flex">
                                    <label>
                                        <span id="redspan">*</span>
                                        &nbsp;موضوع :
                                    </label>
                                    <Field
                                        id="shadow"
                                        className="form-control w-75"
                                        type="text"
                                        name= "topic"
                                        required="required"
                                    />
                                    {/* {errors.mobile_unique && touched.mobile_unique && (
                                                            <div className="invalid-feedback d-block">
                                                               {errors.mobile_unique}
                                                            </div>
                                                        )} */}
                                </FormGroup>

                                <div className="d-flex">
                                    <label htmlFor="description" className="">
                                        توضیحات :
                                    </label>
                                    <Field
                                        name="description"
                                        className="w-75 ms-5"
                                        as="textarea"
                                    />
                                </div>
                                <div className=" row">
                                    <p>زمان انجام</p>
                                    <DatePicker
                                        format="YYYY/MM/DD HH:mm:ss"
                                        plugins={[
                                            <TimePicker position="bottom" />,
                                        ]}
                                        calendar={persian}
                                        locale={persian_fa}
                                        calendarPosition="bottom-right"
                                        onChange={(e) =>
                                            setFieldValue(
                                                "start_time",
                                                convertNumbers(e.format())
                                            )
                                        }
                                  />
                                </div>
                                {/* <div className=" row">
                                    <p>زمان پایان</p>
                                    <DatePicker
                                        format="MM/DD/YYYY HH:mm:ss"
                                        plugins={[
                                            <TimePicker position="bottom" />,
                                        ]}
                                        calendar={persian}
                                        locale={persian_fa}
                                        calendarPosition="bottom-right"
                                    />
                                </div> */}





                                <div class="accordion" id="accordionExample">
                                    <div class="card">
                                        <div
                                            class="card-header"
                                            id="headingOne"
                                        >
                                            <button
                                                class="btn h5 btn-block text-right"
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                            >
                                                <h1> موارد بیشتر</h1>
                                            </button>
                                        </div>

                                        <div
                                            id="collapseOne"
                                            class="collapse"
                                            aria-labelledby="headingOne"
                                            data-parent="#accordionExample"
                                        >
                                            <CollapsForm setFieldValue={setFieldValue} values={values}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <BtnOutLine onClick={handleCancel} color="gainsboro" title="انصراف"/>
                                    <BtnCustom  color="#1890ff" title="ذخیره" type="submit"/>
                                </div>
                            </Form>)}

                    </Formik>
                </div>
            </Modal>
        </>
    );
};

export default CallModal;
