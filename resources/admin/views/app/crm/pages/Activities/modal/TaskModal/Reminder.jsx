import classes from "./TaskModal.module.css";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Field } from "formik";
import { useState } from "react";
import { Checkbox } from "antd";

const Reminder = ({values, setFieldValue}) => {
    const [reminderCheck,setReminderCheck] = useState("")
    const [emailCheck,setEmailCheck] = useState("")
    const onChangeReminderCheck = (e) => {
        setReminderCheck(e.target.checked);
    };
    const onChangeEmailCheck = (e) => {
        setEmailCheck(e.target.checked);
    };
    return (
        <div className="card my-5">
            <div className="d-flex">
                <p>تاریخ و زمان</p>
                <DatePicker
                    format="MM/DD/YYYY HH:mm:ss"
                    plugins={[<TimePicker position="bottom" />]}
                    calendar={persian}
                    locale={persian_fa}
                    calendarPosition="bottom-right"
                    value={values.reminderDate}                 
                    onChange={(e)=> setFieldValue('reminderDate',e.format())}
                />
            </div>

            <div className="row">
                <div className="col-6">
                    {/* <label htmlFor="reminders" className="">
                        یادآوری ها :
                    </label> */}
                    <Checkbox
                        onChange={(e)=> setFieldValue("reminderCheck", e.checked)}
                    >
  یادآوری ها :
                    </Checkbox>
                </div>
                <div className="col-6">
                   
                  <Checkbox onChange={(e)=> setFieldValue("emailCheck", e.checked)}>
                  ایمیل :
                  </Checkbox>
                        
                </div>
            </div>
        </div>
    );
};

export default Reminder;
