import React, { useState } from "react";
import { Button, Checkbox, Popover } from "antd";
import {Field, Form} from "formik";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select";
import Reminder from "./Reminder";

const CollapsForm = ({setFieldValue, values}) => {
    // const [CalendarBool, setCalendarBool] = useState(false);
    // const onChangeCalendar = (e) => {
    //     setCalendarBool(e.target.checked);
    //     setFieldValue("addToCalendar", CalendarBool)
    //
    // };
    return (
        <>
            <div class="card-body">



                <div className="row">
                    <p> وضعیت جلسه </p>
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

                    <div>
                        <FormGroup className="d-flex">
                            <Label> درصد پیشرفت:</Label>
                            <Field
                                id="shadow"
                                className="form-control w-50"
                                type="number"
                                name="progress_rate"
                            />
                            {/* {errors.weekly_customers_count && touched.weekly_customers_count && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.weekly_customers_count}
                                                            </div>
                                                        )}*/}
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup className="d-flex">
                            <Label> هزینه:</Label>
                            <Field
                                id="shadow"
                                className="form-control w-50"
                                type="number"
                                name="cost"
                            />
                            {/* {errors.weekly_customers_count && touched.weekly_customers_count && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.weekly_customers_count}
                                                            </div>
                                                        )}*/}
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup className="d-flex">
                            <Label>وزن فعالیت (درصد):</Label>
                            <Field
                                id="shadow"
                                className="form-control w-50"
                                type="number"
                                name="weight"
                            />
                            {/* {errors.weekly_customers_count && touched.weekly_customers_count && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.weekly_customers_count}
                                                            </div>
                                                        )}*/}
                        </FormGroup>
                    </div>


            </div>

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

            {/*<div className="row">*/}


            {/*<div>*/}
            {/*        <Checkbox onChange={onChangeCalendar}>*/}
            {/*            {" "}*/}
            {/*            افزودن در تقویم{" "}*/}
            {/*        </Checkbox>*/}
            {/*    </div>*/}

                {/*    <FormGroup className="w-50">*/}
                {/*        <Select*/}
                {/*            id="shadow"*/}
                {/*            className="form-control"*/}
                {/*            // name="addToCalendar"*/}
                {/*            options={[*/}
                {/*                { value: 0, label: "رویداد های من" },*/}
                {/*           */}
                {/*            ]}*/}
                {/*            onChange={(e) =>*/}
                {/*                setFieldValue("addToCalendar", e.value)*/}
                {/*            }*/}
                {/*        />*/}
                {/*        /!* {errors.company_type && touched.company_type && (*/}
                {/*                                            <div className="invalid-feedback d-block">*/}
                {/*                                                {errors.company_type}*/}
                {/*                                            </div> */}
                {/*                                        )}*!/*/}
                {/*    </FormGroup>*/}
                {/*</div>*/}


            </div>
        </>
    );
};

export default CollapsForm;
