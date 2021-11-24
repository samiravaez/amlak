/* eslint-disable react/no-array-index-key */
import React, {useEffect} from 'react';
import SearchSelect from "../../../../components/SearchSelect";
import axios from "axios";
import {adminPathApi, adminRoot} from "../../../../constants/defaultValues";

import Button from "reactstrap";
import {Link, NavLink} from "react-router-dom";



const SelectTemplate = ({ match }) => {
  const getTemplatesList = (setloadOptions, search = '') => {
    axios
      .post(
        `${adminPathApi}/template/search_templates`,
        {
          search:search,
        }
      )
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        const attr = [];
        data.map((template) => {
          attr.push({
            ...template,
            label: template.title,
            value: template.id,
            key: template.id,
          })
        })
        setloadOptions(attr);
      });
  }

  const [template,setTemplate]=React.useState(false);
  let url=template?`?template=${template.id}`:'';
  let disabled=template?'':'disabled';

  return (
    <>
      <SearchSelect request={getTemplatesList} setData={setTemplate}/>
      <Link className={`btn btn-outline-primary mt-2 float-right ${disabled}`} to={`${adminRoot}/products-management/products/${template.id}/create`}>ادامه</Link>
    </>
  );
};

export default SelectTemplate;
