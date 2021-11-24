import React from "react";
import {CustomInput, FormGroup, Label} from "reactstrap";
import {FormikReactSelect, FormikSwitch} from "../containers/form-validations/FormikFields";
import ReactQuill from "react-quill";
import {Field} from "formik";
import Image from "../views/app/products-management/componennts/inputs/Image";
const CustomAttribute=({errors, touched, setFieldValue, setFieldTouched, values,attribute,...props})=>{
  let name = props.prefix?`${props.prefix}.${attribute.code}`:attribute.code;
  let defaultValue;
  if(props.prefix){
    defaultValue = values[props.prefix] && values[props.prefix][attribute.code]?values[props.prefix][attribute.code]:''
  }else{
    defaultValue = values[attribute.code]?values[attribute.code]:'';
  }

  
  let output = '';
  switch (attribute.type){
    case 'image':
      output=(
        <FormGroup key={name}>
          <Label>
            {attribute.name}
            {props.children && (props.children)}
          </Label>
          <Image setFieldValue={setFieldValue} name={attribute.code}/>
        </FormGroup>
      );
      break;
    case 'select':
      const options = [];
      if(attribute.options) {
        attribute.options.map((option) => {
          options.push({
            label: option.value,
            value: option.id,
            key: option.id,
          })
        })
      }
      output = (
        <FormGroup key={attribute.code}>
          <Label>
            {attribute.name}
            {props.children && (props.children)}
          </Label>
          <FormikReactSelect
            value={defaultValue}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            options={options}
            name={name}/>
        </FormGroup>
      );
      break;
    case 'color':
      break;
    case 'boolean':
      output= (
        <FormGroup key={name}>
          <Label>
            {attribute.name}
            {props.children && (props.children)}
          </Label>
          <FormikSwitch
            name={name}
            className="custom-switch custom-switch-primary"
            value={defaultValue}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
          />
        </FormGroup>
      );
      break;
    case 'textarea':
      const quillModules = {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            {list: 'ordered'},
            {list: 'bullet'},
            {indent: '-1'},
            {indent: '+1'},
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
      output= (
        <FormGroup key={name}>
          <Label>
            {attribute.name}
            {props.children && (props.children)}
          </Label>
          <ReactQuill
            theme="snow"
            value={defaultValue}
            modules={quillModules}
            formats={quillFormats}
            onChange={(val) => {setFieldValue(name,val)}}
            name={name}
          />
        </FormGroup>
      );
      break
    default:
      output= (
        <FormGroup key={name}>
          <Label>
            {attribute.name}
            {props.children && (props.children)}
{/*            {attribute.is_variable ? (
              <label>
                <Field type="checkbox" name='super_attributes' value={attribute.code} onChange={(e)=>{
                  let super_attributes;
                  let prev=values.super_attributes?values.super_attributes:[];
                  if(e.target.checked){
                    super_attributes=[...prev,attribute.code]
                  }else{
                    super_attributes=prev.filter(function (value,index){
                      return value!=attribute.code;
                    })
                  }
                  setFieldValue('super_attributes',super_attributes)
                }} />
                استفاده به عنوان متغیر
              </label>
            ):''}*/}
          </Label>
          {/*{(!values.super_attributes || !values.super_attributes.includes(attribute.code)) && (*/}
          {/*  <>*/}
              <Field
                className="form-control"
                name={`${name}`}
              />
              {errors[name] && touched[name] && (
                <div className="invalid-feedback d-block">
                  {errors[attribute.code]}
                </div>
              )}
{/*            </>
          )}*/}
        </FormGroup>
      );
  }

  return output;
}
export default CustomAttribute;
