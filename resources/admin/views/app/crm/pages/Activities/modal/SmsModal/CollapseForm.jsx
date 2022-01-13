import React, { useState } from "react";
import { Button, Checkbox, Popover } from "antd";
import { Field } from "formik";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select";

import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const CollapsForm = ({setFieldValue, values}) => {
    const onChangeReminder = (e) => {
        setFieldValue("sendAtAnotherTime", e.target.checked);
    };
    return (
        <>
            <div class="card-body">
                <div>
                    <Checkbox onChange={onChangeReminder}>
                        {" "}
                        ارسال در زمان دیگر{" "}
                    </Checkbox>
                </div>
                <div className=" row">
                    <p>زمان ارسال</p>
                    <DatePicker
                        format="MM/DD/YYYY HH:mm:ss"
                        plugins={[<TimePicker position="bottom" />]}
                        calendar={persian}
                        locale={persian_fa}
                        calendarPosition="bottom-right"
                        value={values.endTime}
                        onChange={(e) => setFieldValue("timeToDo", e.format())}
                    />
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
                            onChange={(e) => setFieldValue("priority", e.value)}
                        />
                        {/* {errors.company_type && touched.company_type && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.company_type}
                                                            </div> 
                                                        )}*/}
                    </FormGroup>
                </div>

                <div className="row">
                    <label htmlFor="expert" className="">
                        کارشناس :
                    </label>
                    <Popover
                        content={
                            <div>
                                <Field name="expert" className="w-100 ms-5" />
                                <p>
                                    لطفا تعداد دو کاراکتر یا بیشتر را وارد کنید
                                </p>
                            </div>
                        }
                        title="Title"
                        trigger="click"
                    >
                        <Button className="w-25">علی علیزاده</Button>
                    </Popover>
                </div>
                <div className="row">
                    <div>
                        <p>مرتبط با</p>
                    </div>

                    <FormGroup className="w-50">
                        <Select
                            id="shadow"
                            className="form-control"
                            // name="company_type"
                            options={[{ value: 0, label: "رویداد های من" }]}
                            // onChange={(e) =>
                            //     setFieldValue("company_type", e.value)
                            // }
                        />
                        {/* {errors.company_type && touched.company_type && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.company_type}
                                                            </div> 
                                                        )}*/}
                    </FormGroup>
                </div>
            </div>
        </>
    );
};

export default CollapsForm;
