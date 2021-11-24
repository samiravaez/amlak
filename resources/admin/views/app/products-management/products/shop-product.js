import React from "react";
import {adminPathApi} from "../../../../constants/defaultValues";
import {FieldArray, Form, Formik, Field} from "formik";
import ListGroupItemHeading, {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardTitle, CustomInput,
  FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader,
  Row, Table
} from "reactstrap";
import {Step, Steps, Wizard} from "react-albus";
import TopNavigation from "../../../../components/wizard/TopNavigation";
import {injectIntl} from "react-intl";
import {Colxx} from "../../../../components/common/CustomBootstrap";
import {FormikRadioButtonGroup, FormikReactSelect} from "../../../../containers/form-validations/FormikFields";
import axios from "axios";
import {NotificationManager} from "../../../../components/common/react-notifications";
import {useHistory} from "react-router-dom";
import { generatePath } from 'react-router';


const ProductInfo=({match,wizardHelper,...props})=>{
  const [init,setInit]=React.useState({})
  const [loading,setLoading]=React.useState(true);
  const [template,setTemplate]=React.useState(true);
  let history = useHistory()

  let edit=false;
  let id;
  if(match.params.id){
    edit=true;
    id=match.params.id;
  }


  React.useEffect(async ()=>{
    // const path = generatePath(match.path, { template, id });
    // history.replace(path);
    if(edit){
      axios
        .get(`${adminPathApi}/product/${id}`)
        .then(res=>res.data)
        .then(data=>{
          if(data.status){
            setTemplate(data.item.product_template_id)
            setInit(data.item)
            setLoading(false)
          }
        })
    }else{
      setTemplate(match.params.template)
      setLoading(false);
    }
  },[]);

  const save_info=(values)=>{
    let submit_source;
    if(edit){
      submit_source=`${adminPathApi}/template/products/${template}/product/${id}`;
    }else{
      submit_source=`${adminPathApi}/template/products/${template}/product`;
    }

    axios
      .post(submit_source,values)
      .then(res=>res.data)
      .then(data=>{
        if(data.status){
          if(!edit){
            history.replace(`edit/${data.item.id}`);
          }
          wizardHelper.next()
        }
      })
  }

  if(loading){
    return (<div className="loading"/>);
  }

  return (
    <Formik initialValues={init} onSubmit={save_info}>
      {({errors, touched, setFieldValue, setFieldTouched, values}) => (
        <Form className="av-tooltip tooltip-label-right">
          <FormGroup>
            <label>
              نام محصول در صفحه فروشگاه
            </label>
            <Field name='name' className="form-control"/>
          </FormGroup>
          <Button type="submit">
            ثبت و ادامه
          </Button>
        </Form>
      )}
    </Formik>
  );
}

const ProductVariant=({variables,inventories,combination,setShowInventoryModal,setVariantEditInventory,setInventoryToEdit,...props})=>{
  const [show,setShow]=React.useState(false);
  const [variant_id,setVariantId]=React.useState(false);
  let combine=combination.combine
  let id=combination.id;

  return (
      <Card style={{ marginBottom:'30px' }} id={id}>
        <CardHeader style={{ backgroundColor: 'rgb(248 248 248)',padding: '15px 10px'}}>
          <Formik initialValues={{combine:combine}} onSubmit={(values => console.log(values))}>
              {({errors, touched, setFieldValue, setFieldTouched, values}) => (
                <Form className="av-tooltip tooltip-label-right">
                  <Row>
                    <Colxx sm="9">
                      <Row>
                        {variables.map(variable => (
                          <Colxx sm={"3"}>
                            <FormGroup>
                              <label>{variable.name}</label>
                              <FormikReactSelect
                                onChange={setFieldValue}
                                onBlur={setFieldTouched}
                                options={variable.options}
                                value={(values['combine'] && values['combine'][variable.code])?values['combine'][variable.code]:''}
                                name={`combine.${variable.code}`}/>
                            </FormGroup>
                            {/*<CustomAttribute id={variable.code} errors={errors} touched={touched} setFieldValue={setFieldValue}*/}
                            {/*                 setFieldTouched={setFieldTouched} values={values} attribute={variable} prefix={`variants.${index}.combinations.${variable.code}`}/>*/}
                          </Colxx>
                        ))}
                      </Row>
                    </Colxx>
                    <Colxx sm="3">
                      <div className="btn-group float-right">
                        <button className="btn" type="submit">
                          <span className="fa fa-check"></span>
                        </button>
                        <button className="btn" type="button" onClick={()=>setShow(!show)}>
                          <span className="simple-icon-menu"></span>
                        </button>
                        <button className="btn" type="button">
                          <span className="fa fa-times"></span>
                        </button>
                      </div>
                    </Colxx>
                  </Row>
                </Form>
                )}
          </Formik>

        </CardHeader>
        {show && (
          <CardBody>
            <ProductInventoryList setShowInventoryModal={setShowInventoryModal} setVariantEditInventory={setVariantEditInventory} id={id} combination={combination} inventories={inventories} setInventoryToEdit={setInventoryToEdit}/>
          </CardBody>
        )}

      </Card>
  );
}


const ProductInventoryList=({setShowInventoryModal,setVariantEditInventory,id,combination,inventories,setInventoryToEdit,...props})=>{
  return (
    <Table striped className="position-relative table-info">
      <thead>
      <th>قیمت</th>
      <th>موجودی</th>
      <th>انبار</th>
      <th>
        گزینه ها
        <Button size="xs" color='primary' className="mx-1" onClick={() => {
          setShowInventoryModal(true);
          setVariantEditInventory(id);
          setInventoryToEdit(false);
        }}>
          {/* show this when user has removed all friends from the list */}
          افزودن موجودی
        </Button>
      </th>
      </thead>
      <tbody>
      {combination.inventories.map((inventory)=>(
        <tr>
          <td>{inventory.price}</td>
          <td>{inventory.quantity}</td>
          <td>{inventories.find(item=>item.key==inventory.inventory_id)?inventories.find(item=>item.key==inventory.inventory_id)['label']:''}</td>
          <td>
            <Button
              color="info"
              outline
              size="xs"
              onClick={()=> {
                setInventoryToEdit(inventory.id);
                setShowInventoryModal(true);
              }}
            >
              <span className="simple-icon-pencil"></span>
            </Button>
          </td>
        </tr>
      ))}
      </tbody>
    </Table>
  );
}

const ProductInventory=({show_inventory_modal,setShowInventoryModal,inventories,id,setCombinations,setInventoryToEdit,inventory_to_edit,...props})=>{
  const save_inventory=async (values)=>{
    let data={...values,product_variant_id:props.variant_id?props.variant_id:undefined}
    let submit_url;
    if(inventory_to_edit){
      submit_url=`${adminPathApi}/product/${id}/edit_product_in_inventory/${inventory_to_edit}`;
    }else{
      submit_url=`${adminPathApi}/product/${id}/add_product_to_inventory`;
    }

    await axios
      .post(submit_url,data)
      .then(res=>res.data)
      .then(data=>{
        if(data.status){
          setCombinations(data.combinations)
          setShowInventoryModal(false)
        }
      })
  }
  const options = [
    { value: 'set', label: 'ویرایش' },
    { value: 'add', label: 'افزایش' },
    { value: 'minus', label: 'کاهش' },
  ];
  const [loading, setLoadin] = React.useState(true);
  const [init, setInit] = React.useState({});

  React.useEffect(async ()=>{
    if(inventory_to_edit){
      setLoadin(true)
      axios
        .get(`${adminPathApi}/product/inventory/${inventory_to_edit}`)
        .then(res=>res.data)
        .then(data=>{
          if(data.status){
            setInit(data.item)
            setLoadin(false)
          }
        })
    }else{
      setInit({});
      setLoadin(false);
    }
  },[inventory_to_edit])

  return (
    <Modal
      isOpen={show_inventory_modal}
      toggle={() => setShowInventoryModal(!show_inventory_modal)}
      backdrop
      wrapClassName="modal-right"
    >
      {loading?(
        <div className="loading"/>
      ):(
        <Formik
          initialValues={init}
          onSubmit={save_inventory}
          enableReinitialize
        >
          {({errors, touched, setFieldValue, setFieldTouched, values}) => (
            <Form className="av-tooltip tooltip-label-right">
              <ModalHeader>{inventory_to_edit?'ویرایش موجودی':'افزودن موجودی'}</ModalHeader>
              <ModalBody>
                <FormGroup>
                  <label>قیمت</label>
                  <Field className="form-control" name="price"/>
                </FormGroup>
                <FormGroup>
                  <label>موجودی</label>
                  <Field className="form-control" name="quantity"/>
                </FormGroup>
                {inventory_to_edit && (
                  <FormGroup>
                    <FormikRadioButtonGroup
                      inline
                      name="inventory_action"
                      label="نوع عملیات؟"
                      value={values.inventory_action?values.inventory_action:'set'}
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                      options={options}
                    />
                    {errors.checkboxGroup && touched.checkboxGroup ? (
                      <div className="invalid-feedback d-block">
                        {errors.checkboxGroup}
                      </div>
                    ) : null}
                  </FormGroup>
                )}
                <FormGroup>
                  <label>انبار</label>
                  <FormikReactSelect
                    options={inventories}
                    name={`inventory_id`}
                    value={values['inventory_id']}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                  />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" type="submit">
                  ذخیره
                </Button>{' '}
                <Button
                  color="secondary"
                  onClick={() => setShowInventoryModal(false)}
                >
                  لغو
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      )}
    </Modal>
  );
}

const ProductVariantsController=({id,wizardHelper,...props})=>{
  const [init,setInit]=React.useState({});
  const [default_attributes,setDefaultAttributes]=React.useState([]);
  const [custom_attributes,setCustomAttributes]=React.useState([]);
  const [variables,setVariables]=React.useState([]);
  const [combinations,setCombinations]=React.useState([]);
  const [inventories,setInventories]=React.useState([
    {label:'انبار 1',value:1,key:1},
    {label:'انبار 2',value:2,key:2},
    {label:'انبار 3',value:3,key:3},
  ]);
  const [show_combination_modal,setShowCombinationModal]=React.useState(false);
  const [show_inventory_modal,setShowInventoryModal]=React.useState(false);
  const [variant_edit_inventory,setVariantEditInventory]=React.useState(false);
  const [inventory_to_edit,setInventoryToEdit]=React.useState(false);
  React.useEffect(async ()=>{
    await axios
      .get(
        `${adminPathApi}/product/${id}/attributes`
      ).then(res=>{
        return res.data
      }).then(data=>{
        let super_attributes=data.super_attributes.map((attribute) => {
          let attribute_options=attribute.options.map(function (option){
            return {...option,label: option.value, value: option.id, key: option.id,}
          });
          return {...attribute,options:attribute_options};
        })
        setVariables(super_attributes)
        setCombinations(data.combinations)
        setInit({variants:[
            {
              combinations:{color:'74',size:'46'},
              products:[
                {price:1000},
                {price:2000},
              ],
            },
            {
              combinations:{color:'75',size:'47'},
              products:[
                {price:3000},
                {price:4000},
              ],
            },
          ]});
      })
  },[]);

  const save=(values)=>{
    // const { initialValues } = props;
    console.log(values);
    axios
      .post(`${adminPathApi}/product/${id}/save_variants`,values)
      .then(res=>{
        return res.data
      }).then((data)=>{
        console.log(data)
        if(data.status){
          // wizardHelper.step.isDone=true
          // wizardHelper.next()
        }
    })
    // axios
    //   .post(`${adminPathApi}/product/${id}/update`,values)
    //   .then(res=>{
    //     return res.data
    //   }).then((data)=>{
    //     if(data.status){
    //       wizardHelper.step.isDone=true
    //       wizardHelper.next()
    //     }
    // })
  }

  const save_combination=async (values)=>{
    await axios
      .post(`${adminPathApi}/product/${id}/combination`,values)
      .then(res=>res.data)
      .then(data=>{
        if(data.status){
          setCombinations([...combinations,data.combine])
          setShowCombinationModal(false)
        }else{
          NotificationManager.error(data.message,null,1000,null,null,'filled');
        }
      }).catch(error=>{
        NotificationManager.error('خطایی در ارسال اطلاعات رخ داده است',null,1000,null,null,'filled');
      })
  }

  return (
    <>
      {variables.length>0 && (
        <CardSubtitle>
          ترکیب های محصول
          <Button size="xs" outline color="primary" className="mx-1" onClick={() => setShowCombinationModal(true)}>
            {/* show this when user has removed all friends from the list */}
            افزودن ترکیب
          </Button>
        </CardSubtitle>
      )}
      {combinations.map((combine,index)=>(
            <ProductVariant
            key={index}
            combination={combine}
            variables={variables}
            inventories={inventories}
            setShowInventoryModal={setShowInventoryModal}
            setVariantEditInventory={setVariantEditInventory}
            setInventoryToEdit={setInventoryToEdit}
          />
      ))}
      {/*<ProductInventoryList setShowInventoryModal={setShowInventoryModal} setVariantEditInventory={setVariantEditInventory} id={id} combination={combination} inventories={inventories} setInventoryToEdit={setInventoryToEdit}/>*/}

      <Modal
        isOpen={show_combination_modal}
        toggle={() => setShowCombinationModal(!show_combination_modal)}
        backdrop
      >
          <Formik
            initialValues={{}}
            onSubmit={save_combination}
            enableReinitialize
          >
            {({errors, touched, setFieldValue, setFieldTouched, values}) => (
              <Form className="av-tooltip tooltip-label-right">
                <ModalHeader>ایجاد تنوع جدید</ModalHeader>
                <ModalBody>
                {variables.map(variable=>(
                  <FormGroup>
                    <label>{variable.name}</label>
                    <FormikReactSelect
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                      options={variable.options}
                      value={values[variable.code]?values[variable.code]:''}
                      name={variable.code}/>
                  </FormGroup>
                ))}
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" type="submit">
                    ذخیره
                  </Button>{' '}
                  <Button
                    color="secondary"
                    onClick={() => setShowCombinationModal(false)}
                  >
                    لغو
                  </Button>
                </ModalFooter>
              </Form>
              )}
          </Formik>
      </Modal>
      <ProductInventory inventories={inventories} inventory_to_edit={inventory_to_edit} show_inventory_modal={show_inventory_modal} setShowInventoryModal={setShowInventoryModal} id={id} variant_id={variant_edit_inventory} setCombinations={setCombinations} setInventoryToEdit={setInventoryToEdit}/>
    </>
  );
}

const ProductSellInfo=({id,wizardHelper,...props})=>{
  const [init,setInit]=React.useState({})

  React.useEffect(async ()=>{
    await axios
      .get(`${adminPathApi}/product/${id}/get_variants`)
      .then(data=>{

      })
  });

  const save=(values)=>{
    console.log(values)
  }

  return (
    <Formik
      initialValues={init}
      onSubmit={save}
      enableReinitialize
    >
      {({errors, touched, setFieldValue, setFieldTouched, values}) => (
        <Form className="av-tooltip tooltip-label-right">
          <p>test</p>
          <Button type="submit">ادامه</Button>
        </Form>
      )}
    </Formik>
  );
}

const ShopProduct=({match,intl,location,history,...props})=>{
  const topNavClick = (stepItem, push,step) => {
    if(stepItem.isDone){
      push(stepItem.id);
    }
  };

  const {messages} = intl;

  return (
    <Card>
      <CardBody className={"wizard wizard-default"}>
        <Wizard>
          {(wizardHelper) => (
            <>
              <TopNavigation className="justify-content-center" topNavClick={topNavClick}/>
              <Steps>
                <Step id="default" name={messages['wizard.product.default.info']}>
                  <div className="wizard-basic-step">
                    <ProductInfo wizardHelper={wizardHelper} match={match}/>
                  </div>
                </Step>
                <Step id="general" name={messages['wizard.product.inventory.info']}>
                  <div className="wizard-basic-step">
                    <ProductVariantsController id={match.params.id} wizardHelper={wizardHelper}/>
                  </div>
                </Step>
                <Step id="sell_info" name={messages['wizard.product.sell.info']}>
                  <div className="wizard-basic-step">
                    <ProductSellInfo id={match.params.id} wizardHelper={wizardHelper}/>
                  </div>
                </Step>
              </Steps>
            </>
          )}
        </Wizard>
      </CardBody>
    </Card>
  );
}
export default injectIntl(ShopProduct);
