import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button,Checkbox, Popover } from 'antd';
import { Field, Form, Formik } from "formik";
import { FormGroup, Label } from "reactstrap";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Reminder from './Reminder';
import CollapsForm from "./CollapseForm";
import BtnCustom from "../../../../../../../components/UI/BtnCustom";
import BtnOutLine from "../../../../../../../components/UI/BtnOutLine";
import TextEditor from './TextEditor';
import ReactQuill from 'react-quill';
const EmailModal = () => {
    const [loading, setLoading] = useState(false) ;
    const [visible, setVisible] = useState(false) ;
    const [reminderBool, setReminderBool] = useState(false);

    const  showModal = () => {
        setVisible(true)
      };


      const quillModules = {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['link', 'image'],
          ['clean'],
        ],
      };
    
      const quillFormats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
      ];

      

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
          <h6>ایمیل</h6>

          </Button>
          <Modal
            visible={visible}
            title="Title"
            onOk={handleOk}
            onCancel={handleCancel}
            width={1300}
            footer={<div></div>}
          >
          

          <h1>My Form</h1>
                    <Formik
                        initialValues={{
                            to:"",
                            from: "",
                            search: "",
                            emailSubject: "",
                            timeToDo: "",
                            priority: "",
                            expert: "",
                            
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
                                        &nbsp;جستوجو :
                                    </label>
                                    <Field
                                        id="shadow"
                                        className="form-control w-75"
                                        type="text"
                                        name="search"
                                        required="required"
                                    />
                                    {/* {errors.mobile_unique && touched.mobile_unique && (
                                                            <div className="invalid-feedback d-block">
                                                               {errors.mobile_unique} 
                                                            </div>
                                                        )} */}
                                </FormGroup>
                                <FormGroup className="d-flex">
                                    <label>
                                        <span id="redspan">*</span>
                                        &nbsp;از :
                                    </label>
                                    <Field
                                        id="shadow"
                                        className="form-control w-75"
                                        type="text"
                                        name="from"
                                        required="required"
                                    />
                                    {/* {errors.mobile_unique && touched.mobile_unique && (
                                                            <div className="invalid-feedback d-block">
                                                               {errors.mobile_unique} 
                                                            </div>
                                                        )} */}
                                </FormGroup>
                                <FormGroup className="d-flex">
                                    <label>
                                        <span id="redspan">*</span>
                                        &nbsp;به :
                                    </label>
                                    <Field
                                        id="shadow"
                                        className="form-control w-75"
                                        type="text"
                                        name="to"
                                        required="required"
                                    />
                                    {/* {errors.mobile_unique && touched.mobile_unique && (
                                                            <div className="invalid-feedback d-block">
                                                               {errors.mobile_unique} 
                                                            </div>
                                                        )} */}
                                </FormGroup>
                                <FormGroup className="d-flex">
                                    <label>
                                        <span id="redspan">*</span>
                                        &nbsp; موضوع ایمیل :
                                    </label>
                                    <Field
                                        id="shadow"
                                        className="form-control w-75"
                                        type="text"
                                        name="emailSubject"
                                        required="required"
                                        
                                    />
                                    {/* {errors.mobile_unique && touched.mobile_unique && (
                                                            <div className="invalid-feedback d-block">
                                                               {errors.mobile_unique} 
                                                            </div>
                                                        )} */}
                                </FormGroup>
                                <FormGroup>
                              <Label>متن </Label>
                              <ReactQuill
                                theme="snow"
                                value={values.description}
                                onChange={(val) => setFieldValue('description', val)}
                                modules={quillModules}
                                formats={quillFormats}
                                className="w-75"
                              />
                              {/* {errors.description && touched.description && (
                                <div className="invalid-feedback d-block">
                                  {errors.description}
                                </div>
                              )} */}
                            </FormGroup>

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
                            </Form>)}
                        
                    </Formik>
        
          </Modal>
        </>
      );
}
 
export default EmailModal;




  

 