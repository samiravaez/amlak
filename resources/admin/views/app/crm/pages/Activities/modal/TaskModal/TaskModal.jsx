import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Modal, Popover, Checkbox, Button } from "antd";
import { Field, Form, Formik } from "formik";
import "jquery/dist/jquery.min";
import "bootstrap/dist/js/bootstrap.min";
import classes from "./TaskModal.module.css"
import DatePicker, { DateObject } from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Reminder from "./reminder";
import CollapsForm from "./CollapseForm";
import { FormGroup, Label } from "reactstrap";
import BtnCustom from "../../../../../../../components/UI/BtnCustom";
import BtnOutLine from "../../../../../../../components/UI/BtnOutLine";

const TaskModal = () => {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [reminderBool, setReminderBool] = useState(false);

    const format = "MM/DD/YYYY HH:mm:ss";


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

 

    const onChangeReminder = (e) => {
        setReminderBool(e.target.checked);
    };

    const handleSub = async (value) => {
        console.log(value);
    };

    return (
        <>
            <Button type="text" onClick={showModal}>
                <h6>وظیفه</h6>
            </Button>
            <Modal
                visible={visible}
                // title="Title"
                onOk={handleOk}
                onCancel={handleCancel}
                width={1300}
                footer={<div></div>}
            >
                <div>
                    <h1>وظیفه</h1>

                    <Formik
                        initialValues={{
                            subject: "",
                            description: "",
                            timeToDo: "",
                            endTime: "",
                            percentage: "",
                            reminder: reminderBool,
                            expert: "",
                            dutyStatus: "",
                            priority: "",
                            taskType: "",
                            reminderCheck: "",
                            emailCheck:"",
                            cost: "",
                            activityWeight: "",
                            day: "",
                            hours: "",
                            minutes: "",
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
                                        format={format}
                                        plugins={[
                                            <TimePicker position="bottom" />,
                                        ]}
                                        calendar={persian}
                                        locale={persian_fa}
                                        calendarPosition="bottom-right"
                                        value={values.timeToDo}
                                        onChange={(e) =>
                                            setFieldValue(
                                                "timeToDo",
                                                e.format()
                                            )
                                        }
                                    />
                                </div>
                                <div className=" row">
                                    <p>زمان پایان</p>
                                    <DatePicker
                                        format={format}
                                        plugins={[
                                            <TimePicker position="bottom" />,
                                        ]}
                                        calendar={persian}
                                        locale={persian_fa}
                                        calendarPosition="bottom-right"
                                        value={values.endTime}
                                        onChange={(e) =>
                                            setFieldValue("endTime", e.format())
                                        }
                                    />
                                </div>
                                <div>
                                    <FormGroup className="d-flex">
                                        <Label> درصد پیشرفت:</Label>
                                        <Field
                                            id="shadow"
                                            className="form-control w-50"
                                            type="number"
                                            name="percentage"
                                        />
                                        {/* {errors.weekly_customers_count && touched.weekly_customers_count && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.weekly_customers_count}
                                                            </div> 
                                                        )}*/}
                                    </FormGroup>
                                </div>
                                <div>
                                    <Checkbox onChange={onChangeReminder}>
                                        {" "}
                                        افزودن یادآوری{" "}
                                    </Checkbox>
                                </div>
                                {reminderBool && <Reminder setFieldValue={setFieldValue} values={values}/>}

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
                                            <CollapsForm
                                                setFieldValue={setFieldValue}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <BtnOutLine onClick={handleCancel} color="gainsboro" title="انصراف"/>
                                    <BtnCustom  color="#1890ff" title="ذخیره" type="submit"/>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Modal>
        </>
    );
};

export default TaskModal;
