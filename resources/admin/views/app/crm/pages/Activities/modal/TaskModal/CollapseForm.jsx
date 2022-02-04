import { Button, Popover } from "antd";
import { Field } from "formik";
import React from "react";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select";

const CollapsForm = ({setFieldValue,values}) => {
    return (
        <>
            <div class="card-body">
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
                        <Button>علی علیزاده</Button>
                    </Popover>

                    <p> وضعیت وظیفه</p>
                    <FormGroup className="w-25">
                        <Select
                            id="shadow"
                            className="form-control"

                            // value={values.status}
                            onChange={(e)=> setFieldValue('status',e.value)}

                            options={[
                                { value: 0, label: " باز" },
                                { value: 1, label: "در حال انجام  " },
                                { value: 2, label: "انجام شده" },
                                { value: 3, label: "لغو" },
                            ]}
                            value={values.status}
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

                <div className="row ">
                    <p>اولویت :</p>
                    <FormGroup className="w-25">
                        <Select
                            id="shadow"
                            className="form-control"
                            name="priority"
                            // value={values.priority}
                            onChange={(e)=> setFieldValue('priority',e.value)}
                            options={[
                                { value: 0, label: " بالا" },
                                { value: 1, label: "بسیار  بالا" },
                                { value: 2, label: "بالا" },
                                { value: 3, label: "متوسط" },
                            ]}
                            value={values.priority}
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

                    <label htmlFor="expert" className="">
                        نوع وظیفه :
                    </label>

                    <Popover
                        content={
                            <div>
                                <Field name="type" className="w-100 ms-5" />
                                <p>
                                    لطفا تعداد دو کاراکتر یا بیشتر را وارد کنید
                                </p>
                            </div>
                        }
                        title="Title"
                        trigger="click"
                    >
                        <Button>لطفا انتخاب کنید</Button>
                    </Popover>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label htmlFor="cost" className="">
                        هزینه :
                    </label>
                    <Field
                        id="shadow"
                        className="form-control"
                        type="number"
                        name={"cost"}
                        value={values.cost}
                    />
                </div>

                <div className="col">
                    <label htmlFor="weight" className="">
                        وزن فعالیت :
                    </label>
                    <Field
                        id="shadow"
                        className="form-control"
                        type="number"
                        name={"weight"}
                        value={values.weight}
                    />
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
                    name="days"
                />
                <label htmlFor="days" className="">
                    (روز)
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
        </>
    );
};

export default CollapsForm;
