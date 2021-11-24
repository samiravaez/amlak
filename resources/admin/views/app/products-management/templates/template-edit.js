/* eslint-disable react/no-array-index-key */
import React, {createRef, useState} from 'react';
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

const TemplateEdit = ({match, intl}) => {
  const forms = [createRef(null), createRef(null)];
  const [bottomNavHidden, setBottomNavHidden] = useState(false);
  const [init, setInit] = React.useState([{}, {}]);
  const [validationErrors, setValidationErrors] = React.useState([{}, {}]);
  const id = match.params.id ? match.params.id : false;

  const {messages} = intl;

  return (
    <Card>
      <CardBody className={"wizard wizard-default"}>
        <Wizard>
          {(wizardHelper) => (
            <>
              <TopNavigation className="justify-content-center" disableNav/>

              <Steps>
                <Step id="attribute" name={messages['wizard.product.attribute']}>
                  <div className="wizard-basic-step">
                    <ProductAttribute id={id ? id : undefined} wizardHelper={wizardHelper}/>
                  </div>
                </Step>
                <Step id="category" name={messages['wizard.product.category']}>
                  <div className="wizard-basic-step">
                    <ProductCategory wizardHelper={wizardHelper}/>
                  </div>
                </Step>
              </Steps>
            </>
          )}
          {/*<BottomNavigation
          onClickNext={onClickNext}
          onClickPrev={onClickPrev}
          className={`justify-content-center ${
            bottomNavHidden && 'invisible'
          }`}
          prevLabel={messages['wizard.prev']}
          nextLabel={messages['wizard.next']}
        />*/}
        </Wizard>
      </CardBody>
    </Card>
  );
};

export default injectIntl(TemplateEdit);
