import React, { useState } from "react";
import "antd/dist/antd.css";

import { Modal, Button, Checkbox, Popover } from "antd";
import { Field, Form, Formik } from "formik";
import { FormGroup, Label } from "reactstrap";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import CollapsForm from "./CollapseForm";
import MessageReadyModal from "./MessageReadyModal";
import BtnCustom from "../../../../../../../components/UI/BtnOutLine";
import BtnOutLine from "./../../../../../../../components/UI/BtnOutLine";

const SmsModal = () => {
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
    const handleSub =  (value) => {
        console.log(value);
    };
    return (
        <>
            <Button type="text" onClick={showModal}>
                <h6>پیامک</h6>
            </Button>
            <Modal
                visible={visible}
                title="Title"
                onOk={handleOk}
                onCancel={handleCancel}
                width={1300}
                footer={<div></div>}
            >
                <h1>My Form</h1>
                <Formik
                    initialValues={{
                       sendTo: "",
                       subject: "",
                       message: "",
                       timeToDo: "",
                       priority: "",
                       expert: "",
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
                                    &nbsp;ارسال به :
                                </label>
                                <Field
                                    id="shadow"
                                    className="form-control w-75"
                                    type="text"
                                    name="sendTo"
                                    required="required"
                                />
                                {/* {errors.mobile_unique && touched.mobile_unique && (
                                                            <div className="invalid-feedback d-block">
                                                               {errors.mobile_unique} 
                                                            </div>
                                                        )} */}
                            </FormGroup>
                            <FormGroup className="d-flex">
                                <label>
                                    <span id="redspan">*</span>
                                    &nbsp;موضوع :
                                </label>
                                <Field
                                    id="shadow"
                                    className="form-control w-75"
                                    type="text"
                                    name="subject"
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
                                    پیغام :
                                </label>
                                <Field
                                    name="message"
                                    className="w-75 ms-5"
                                    as="textarea"
                                />
                            </div>

                            <MessageReadyModal />

                            <div class="accordion" id="accordionExample">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
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
                                <BtnOutLine
                                    onClick={handleCancel}
                                    color="gainsboro"
                                    title="انصراف"
                                />
                                <BtnCustom
                                    color="#1890ff"
                                    title="ذخیره"
                                    type="submit"
                                />
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    );
};

export default SmsModal;
