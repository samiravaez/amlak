import React, {useEffect, useState} from "react";
import "antd/dist/antd.css";
import {Modal, Popover, Checkbox, Button} from "antd";
import {Field, Form, Formik} from "formik";
import "jquery/dist/jquery.min";
import "bootstrap/dist/js/bootstrap.min";
import classes from "./TaskModal.module.css"
import DatePicker, {DateObject} from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Reminder from "./reminder";
import CollapsForm from "./CollapseForm";
import {FormGroup, Label} from "reactstrap";
import BtnCustom from "../../../../../../../components/UI/BtnCustom";
import BtnOutLine from "../../../../../../../components/UI/BtnOutLine";
import {addTask, fetchTaskEdit} from "../../../../../../../services/businessServices"
import NotificationManager from "../../../../../../../components/common/react-notifications/NotificationManager";
import {convertNumbers} from "../../../../../../../helpers/convertNumbers";
import { Link, useParams } from 'react-router-dom';

const TaskModal = ({match, edit = false}) => {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const { id } = useParams();
    const [reminderBool, setReminderBool] = useState(false);

    const format = "YYYY/MM/DD HH:mm:ss";



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

    const fetchData = async() => {
        fetchTaskEdit({id}).then((response) => {
            setData(response.data.data)
            return response
        })
    }

    const handleSub = async (values) => {
        addTask(values).then((response) => {
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
                            topic: "",
                            description: "",
                            start_time: "",
                            end_time: "",
                            progress_rate: "",
                            reminder: reminderBool,
                            creator_id: "",
                            status: "",
                            priority: "",
                            type: "",
                            reminderCheck: "",
                            emailCheck: "",
                            cost: "",
                            weight: "",
                            days: "",
                            hours: "",
                            minutes: "",
                            reminder_time: "",
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
                                        name="topic"
                                        required="required"
                                        value={values.topic}
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
                                        value={values.description}
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
                                        value={values.start_time}
                                        onChange={(e) =>
                                            setFieldValue(
                                                "start_time",
                                               convertNumbers(e.format())
                                            )
                                        }
                                    />
                                </div>
                                <div className=" row">
                                    <p>زمان پایان</p>
                                    <DatePicker
                                        format={format}
                                        plugins={[
                                            <TimePicker position="bottom"/>,
                                        ]}
                                        calendar={persian}
                                        locale={persian_fa}
                                        calendarPosition="bottom-right"
                                        value={values.end_time}
                                        onChange={(e) =>
                                            setFieldValue("end_time",
                                                convertNumbers(e.format())
                                            )
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
                                            name="progress_rate"
                                            value={values.progress_rate}
                                        />
                                        {/* {errors.weekly_customers_count && touched.weekly_customers_count && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.weekly_customers_count}
                                                            </div>
                                                        )}*/}
                                    </FormGroup>
                                </div>
                                <div>
                                    <Checkbox onChange={onChangeReminder} value={values.reminder}>
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
                                                setFieldValue={setFieldValue} values={values}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <BtnOutLine onClick={handleCancel} color="gainsboro" title="انصراف"/>
                                    <BtnCustom color="#1890ff" title="ذخیره" type="submit"/>
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
