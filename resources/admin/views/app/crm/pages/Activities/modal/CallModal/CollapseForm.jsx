import React, { useState } from "react";
import { Button, Checkbox, Popover } from "antd";
import {Field, Form} from "formik";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select";
import Reminder from "./Reminder";

const CollapsForm = ({setFieldValue,values}) => {
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
                            name="call_side"

                            options={[
                                { value: 0, label: "ورودی" },
                                { value: 1, label: "خروجی" },
                            ]}
                            onChange={(e) =>
                                setFieldValue("call_side", e.value)
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
                {reminderBool && <Reminder setFieldValue={setFieldValue} values={values}/>}


                <div className="d-flex">
                    <label htmlFor="periodOfTime" className="">
                        مدت زمان :
                    </label>

                    <Field
                        id="shadow"
                        className="form-control w-25"
                        type="number"
                        name="hours"
                    />

                    <label htmlFor="hours" className="">
                        (ساعت)
                    </label>

                    <Field
                        id="shadow"
                        className="form-control w-25"
                        type="number"
                        name="minutes"
                    />
                    <label htmlFor="minutes" className="">
                        (دقیقه)
                    </label>
                </div>


                <div className="row">
                    <p> وضعیت فعالیت </p>
                    <FormGroup className="w-50">
                        <Select
                            id="shadow"
                            className="form-control"
                            name="status"
                            options={[
                                { value: 0, label: "باز" },
                                { value: 1, label: "در حال انجام" },
                                { value: 2, label: "انجام شده" },
                                { value: 3, label: "لغو" },
                            ]}
                            onChange={(e) =>
                                setFieldValue("status", e.value)
                            }
                        />
                        {/* {errors.company_type && touched.company_type && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.company_type}
                                                            </div>
                                                        )}*/}
                    </FormGroup>

                    <div className="col">
                        <label htmlFor="weight" className="">
                            وزن فعالیت :
                        </label>
                        <Field
                            id="shadow"
                            className="form-control"
                            type="number"
                            name={"weight"}
                        />
                    </div>
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
                htmlFor="creator_id"
                className=""
            >
                کارشناس :
            </label>
            <Popover
                content={
                    <div>

                    <Field
                        name="creator_id"
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
