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
const handleSub = async (value) => {
    console.log(value);
};
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
                            subject: "",
                            description: "",
                            meetingPlace: "",
                            participantsContributors: "",
                            reminder: reminderBool,
                            timeToDo: "",
                            endTime: "",
                            sessionStatus: "",
                            priority: "",
                            expert: "",
                            addToCalendar: ""
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
                                        name= "subject"
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

                                <FormGroup className="d-flex">
                                    <label>
                                        <span id="redspan">*</span>
                                        &nbsp;محل جلسه :
                                    </label>
                                    <Field
                                        id="shadow"
                                        className="form-control w-75"
                                        type="text"
                                        name="meetingPlace"
                                        required="required"
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
                        name="participantsContributors"
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
                                        format="MM/DD/YYYY HH:mm:ss"
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
                                        format="MM/DD/YYYY HH:mm:ss"
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
                    <Checkbox onChange={onChangeReminder}>
                        {" "}
                        افزودن یادآوری{" "}
                    </Checkbox>
                </div>
                {reminderBool && <Reminder />}
                                   

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
                                            <CollapsForm setFieldValue={setFieldValue}/>
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




  

 