/* eslint-disable react/no-array-index-key */
import React, {createRef, useState, Component} from 'react';
import {FormBuilder} from '@ginkgo-bioworks/react-json-schema-form-builder';
import {Wizard, Steps, Step} from "react-albus";
import {Field, Form, Formik} from "formik";
import AlertError from "../../../../components/AlertError";
import {Card,Button, CardBody, Col, FormGroup, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import CustomAttribute from "../../../../components/CustomAttribute";
import SearchSelect from "../../../../components/SearchSelect";
import ProductAttribute from "../forms/product-attribute";
import BottomNavigation from "../../../../components/wizard/BottomNavigation";
import {injectIntl} from "react-intl";
import TopNavigation from "../../../../components/wizard/TopNavigation";
import ProductCategory from "../forms/product-category";
import ProductMainCategory from "../forms/product-main-category";
import {adminPathApi} from "../../../../constants/defaultValues";
import axios from "axios";
import DefaultAttribute from "../forms/default-attribute";
import ProductVariables from "../forms/product-variables";
import ProductFeature from "../forms/product_feature";
import SelectList from "./add-Ad";

const ProductEdit = ({match, edit = false, intl}) => {
  const forms = [createRef(null), createRef(null)];
  const [bottomNavHidden, setBottomNavHidden] = useState(false);
  const [init, setInit] = React.useState([{}, {}]);
  const [validationErrors, setValidationErrors] = React.useState([{}, {}]);
  const id = edit ? match.params.id : false;

  const [category_options,setCategoryOptions]=React.useState([])
  const [mainCat, setMainCat] = useState(null);

  React.useEffect(async ()=>{
    await axios
      .get(
        `${adminPathApi}/category/show`,
      )
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setCategoryOptions(data)
      });

  },[])

  const topNavClick = (stepItem, push,step) => {
    if(stepItem.isDone){
      push(stepItem.id);
    }
  };

  // const {messages} = intl;
  return(<SelectList />);

  // return (
    {/*<Card>*/}
    {/*  <CardBody className={"wizard wizard-default"}>*/}
    {/*    <Wizard>*/}
    {/*      {(wizardHelper) => (*/}
    {/*        <>*/}
    {/*          /!*<TopNavigation className="justify-content-center" topNavClick={topNavClick}/>*!/*/}
    {/*          <Steps>*/}
    {/*            <Step id="general" name={messages['wizard.product.general']}>*/}
    {/*              <div className="wizard-basic-step">*/}
    {/*                <DefaultAttribute id={id ? id : undefined} list={category_options} setMainCat={setMainCat} mainCat={mainCat} wizardHelper={wizardHelper}/>*/}
    {/*              </div>*/}
    {/*            </Step>*/}
    {/*            <Step id="feature" name={messages['wizard.product.feature']}>*/}
    {/*              <div className="wizard-basic-step">*/}
    {/*                <ProductFeature id={id ? id : undefined}  wizardHelper={wizardHelper}/>*/}
    {/*              </div>*/}
    {/*            </Step>*/}
    {/*            <Step id="attribute" name={messages['wizard.product.attribute']}>*/}
    {/*              <div className="wizard-basic-step">*/}
    {/*                <ProductAttribute id={id ? id : undefined} mainCat={mainCat} wizardHelper={wizardHelper}/>*/}
    {/*              </div>*/}
    {/*            </Step>*/}
    {/*            <Step id="variable" name={messages['wizard.product.variable']}>*/}
    {/*              <div className="wizard-basic-step">*/}
    {/*                <ProductVariables id={id ? id : undefined} wizardHelper={wizardHelper}/>*/}
    {/*              </div>*/}
    {/*            </Step>*/}
    {/*            <Step id="category" name={messages['wizard.product.category']}>*/}
    {/*              <div className="wizard-basic-step">*/}
    {/*                <ProductCategory id={id ? id : undefined} wizardHelper={wizardHelper}/>*/}
    {/*              </div>*/}
    {/*            </Step>*/}
    {/*          </Steps>*/}
    {/*        </>*/}
    {/*      )}*/}
    {/*      /!*<BottomNavigation*/}
    {/*      onClickNext={onClickNext}*/}
    {/*      onClickPrev={onClickPrev}*/}
    {/*      className={`justify-content-center ${*/}
    {/*        bottomNavHidden && 'invisible'*/}
    {/*      }`}*/}
    {/*      prevLabel={messages['wizard.prev']}*/}
    {/*      nextLabel={messages['wizard.next']}*/}
    {/*    />*!/*/}
    {/*    </Wizard>*/}
    {/*  </CardBody>*/}
    {/*</Card>*/}
  // );
};

export default injectIntl(ProductEdit);
