import React, { useState } from "react";
import { Button, Checkbox, Popover } from "antd";
import { Field } from "formik";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select";
import Reminder from "./Reminder";

const CollapsForm = ({setFieldValue}) => {
    const [reminderBool, setReminderBool] = useState(false);
    const onChangeReminder = (e) => {
        setReminderBool(e.target.checked);
    };
    return (
        <>
            <div class="card-body">
                <div className="row">
                    <p> جهت تماس</p>
                    <FormGroup className="w-50">
                        <Select
                            id="shadow"
                            className="form-control"
                            name="callDuration"

                            options={[
                                { value: 0, label: "ورودی" },
                                { value: 1, label: "خروجی" },
                            ]}
                            onChange={(e) =>
                                setFieldValue("callDuration", e.value)
                            }
                        />
                        {/* {errors.company_type && touched.company_type && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.company_type}
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
                {reminderBool && <Reminder />}

                <div className="row">
                    <label htmlFor="minutes" className="">
                       مدت تماس
                    </label>
                    <Field
                        id="shadow"
                        className="form-control w-50"
                        type="number"
                        name={"minutes"}
                    />
                    <p> دقیقه</p>
                </div>


                <div className="row">
                    <p> وضعیت فعالیت </p>
                    <FormGroup className="w-50">
                        <Select
                            id="shadow"
                            className="form-control"
                            name="activityStatus"
                            options={[
                                { value: 0, label: "باز" },
                                { value: 1, label: "در حال انجام" },
                                { value: 2, label: "انجام شده" },
                                { value: 3, label: "لغو" },
                            ]}
                            onChange={(e) =>
                                setFieldValue("activityStatus", e.value)
                            }
                        />
                        {/* {errors.company_type && touched.company_type && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.company_type}
                                                            </div> 
                                                        )}*/}
                    </FormGroup>
                </div>



                <div className="row">
                    <p> وضعیت تماس </p>
                    <FormGroup className="w-50">
                        <Select
                            id="shadow"
                            className="form-control"
                            name="callStatus"
                            options={[
                                { value: 0, label: "موفق" },
                                { value: 1, label: "ناموفق" },
                            ]}
                            onChange={(e) =>
                                setFieldValue("callStatus", e.value)
                            }
                        />
                        {/* {errors.company_type && touched.company_type && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.company_type}
                                                            </div> 
                                                        )}*/}
                    </FormGroup>
                </div>



                <div className="row">
                    <p> اولویت </p>
                    <FormGroup className="w-50">
                        <Select
                            id="shadow"
                            className="form-control"
                            name="priority"
                            options={[
                                { value: 0, label: "بالا" },
                                { value: 1, label: "بسیار بالا" },
                                { value: 2, label: "پایین" },
                                { value: 3, label: "متوسط" },
                            ]}
                            onChange={(e) =>
                                setFieldValue("priority", e.value)
                            }
                        />
                        {/* {errors.company_type && touched.company_type && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.company_type}
                                                            </div> 
                                                        )}*/}
                    </FormGroup>
                </div>


                <div className='row'>
            <label
                htmlFor="expert"
                className=""
            >
                کارشناس :
            </label>
            <Popover
                content={
                    <div>
                
                    <Field
                        name="expert"
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
                   علی علیزاده
                </Button>
            </Popover> 


            </div>
            </div>
        </>
    );
};

export default CollapsForm;
