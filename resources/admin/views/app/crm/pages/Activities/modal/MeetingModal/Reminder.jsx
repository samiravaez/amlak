
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Field } from "formik";
import {convertNumbers} from "../../../../../../../helpers/convertNumbers";
import React from "react";


const Reminder = ({values,setFieldValue}) => {
    return (
        <div className="card my-5">
            <div className="d-flex">
                <p>تاریخ و زمان</p>
                <DatePicker
                    format="YYYY/MM/DD HH:mm:ss"
                    plugins={[<TimePicker position="bottom" />]}
                    calendar={persian}
                    locale={persian_fa}
                    calendarPosition="bottom-right"
                    value={values.reminder_time}
                    onChange={(e) =>
                        setFieldValue("reminder_time",
                            convertNumbers(e.format())
                        )
                    }
                />
            </div>

            <div className="row">
                <div className="col-6">
                    <label htmlFor="reminders" className="">
                        یادآوری ها :
                    </label>
                    <Field
                        name="reminders"
                        className=""
                        type="checkbox"
                    />
                </div>
                <div className="col-6">
                    <label htmlFor="email" className="">
                        ایمیل :
                    </label>
                    <Field
                        name="email"
                        className=""
                        type="checkbox"
                    />
                </div>
            </div>
        </div>
    );
};

export default Reminder;
