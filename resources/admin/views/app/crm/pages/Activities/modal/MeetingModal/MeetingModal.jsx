import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button,Checkbox, Popover } from 'antd';
import { Field, Form, Formik } from "formik";
import { FormGroup, Label } from "reactstrap";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import CollapsForm from "./CollapseForm";
import Reminder from './Reminder';
import BtnCustom from "../../../../../../../components/UI/BtnCustom";
import BtnOutLine from "../../../../../../../components/UI/BtnOutLine";
import {convertNumbers} from "../../../../../../../helpers/convertNumbers";
import {addMeeting} from "../../../../../../../services/businessServices";
import NotificationManager from "../../../../../../../components/common/react-notifications/NotificationManager";

const MeetingModal = () => {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [reminderBool, setReminderBool] = useState(false);
    const  showModal = () => {
        setVisible(true)
      };


 const handleOk = () => {
    setLoading(true)
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

    const handleSub = async (values) => {
        addMeeting(values).then((response) => {
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
          <h6>جلسه</h6>

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
                            location: "",
                            participants: "",
                            reminder: reminderBool,
                            reminder_time: "",
                            start_time: "",
                            end_time: "",
                            status: "",
                            priority: "",
                            creator_id: "",
                            progress_rate: "",
                            cost: "",
                            weight: "",
                            hours: "",
                            minutes: ""
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
                                    />
                                </div>

                                <FormGroup className="d-flex">
                                    <label>
                                        <span id="redspan">*</span>
                                        &nbsp;محل جلسه :
                                    </label>
                                    <Field
                                        id="shadow"
                                        className="form-control w-75"
                                        type="text"
                                        name="location"
                                        required="required"
                                        value={values.location}
                                    />
                                    {/* {errors.mobile_unique && touched.mobile_unique && (
                                                            <div className="invalid-feedback d-block">
                                                               {errors.mobile_unique}
                                                            </div>
                                                        )} */}
                                </FormGroup>

                                <div className='row'>
            <label
                htmlFor="expert"
                className=""
            >
                شرکت کنندگان :
            </label>
            <Popover
                content={
                    <div>

                    <Field
                        name="participants"
                        className="w-100 ms-5"
                    />
               <p>
                  لطفا تعداد دو کاراکتر یا بیشتر را وارد کنید
               </p>
                </div>

                }
                title="Title"
                trigger="click"
            >
                <Button className="w-25">
                   جستو جو ...
                </Button>
            </Popover>


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
                                        format="YYYY/MM/DD HH:mm:ss"
                                        plugins={[
                                            <TimePicker position="bottom" />,
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
                    <Checkbox onChange={onChangeReminder}>
                        {" "}
                        افزودن یادآوری{" "}
                    </Checkbox>
                </div>
                {reminderBool && <Reminder values={values} setFieldValue={setFieldValue}/>}


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

                            </Form>
                        )}
                    </Formik>
                </div>

          </Modal>
        </>
      );
}

export default MeetingModal;






