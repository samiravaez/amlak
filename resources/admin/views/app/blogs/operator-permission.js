import React from 'react';
import {Button, Card, CardBody, CardTitle, FormGroup, Label, Row} from "reactstrap";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import {connect} from "react-redux";
import {permissionAll} from "../../../redux/permissions/actions";
import {Form, Formik} from "formik";
import Switch from "rc-switch";
import Select from "react-select";
import CategoryPermission from "./category-permission";
import {adminPathApi} from "../../../constants/defaultValues";
import {NotificationManager} from "../../../components/common/react-notifications";


const FormikSwitch = ({name, values, value, className, onChange, onBlur}) => {
  const handleChange = (val) => {
    let permissions = values.permissions;
    if (val) {
      permissions.push(value);
    } else {
      permissions = permissions.filter((t) => t != value)
    }
    onChange((prev) => ({...prev, permissions: permissions}));
  };

  return (
    <Switch
      name={name}
      className={className}
      checked={values.permissions.includes(value)}
      onChange={handleChange}
    />
  );
};

const OperatorPermission = ({match, fetchPermission, permissions = [], loading, errors, currentUser}) => {
  const id = match.params.id ? match.params.id : null;
  const [inventoryOption, setInventoryOption] = React.useState([]);
  const [shopOption, setShopOption] = React.useState([]);
  const [initialValues, setInitialValues] = React.useState({
    permissions: [],
    permission_category: [],
    permission_inventory: [],
    permission_shop: [],
  });

  React.useEffect(async () => {
    if (permissions.length == 0) {
      await fetchPermission();
    }
  }, []);


  React.useEffect(async () => {
    await axios.all([
      axios.get(`${adminPathApi}/operator/getPermissionable/${id}`),
      axios.get(`${adminPathApi}/getInventory`),
    ])
      .then(axios.spread((permissionable, inventory) => {
          setInitialValues({...permissionable.data, operator: undefined});
        setInventoryOption(inventory.data);
        })
      )
      .catch(error => console.log(error));

    if (currentUser.shop_id === null) {
      await axios.get(`${adminPathApi}/getShops`)
        .then(shops => {
          setShopOption(shops.data);
        })
        .catch(error => console.log(error));
    }
  }, []);

  const onSubmitForm = async (values) => {
    await axios.post(`${adminPathApi}/operator/permissions/${id}`, values)
      .then(({data}) => {
        NotificationManager.success(data.message, 'موفقیت');
      })
      .catch(({response}) => {
        setServerError(response.data.errors);
      });
  }

  if (loading /*|| permissions.length == 0 || initialValues.permission_category.length == 0*/) {
    return <div className={'loading'}/>
  }

  return (
    <Colxx xss={12}>
      <Card>
        <CardBody>
          <CardTitle>
            دسترسی ها
          </CardTitle>
          <Formik initialValues={initialValues} onSubmit={onSubmitForm} enableReinitialize>
            {({setFieldValue, setFieldTouched, values, setValues}) =>
              <Form>
                <Row>
                  {currentUser.shop_id === null ?
                    <Colxx md={12}>
                      <FormGroup>
                        <Label>فروشگاه ها</Label>
                        <Select
                          className={'react-select'}
                          classNamePrefix={"react-select"}
                          options={shopOption}
                          isMulti
                          onChange={(value) => setFieldValue('permission_shop', value)}
                          value={values.permission_shop}
                        />
                      </FormGroup>
                    </Colxx>
                    : <></>}
                  <Colxx md={12}>
                    <FormGroup>
                      <Label>انبار ها</Label>
                      <Select
                        className={'react-select'}
                        classNamePrefix={"react-select"}
                        options={inventoryOption}
                        isMulti
                        onChange={(value) => setFieldValue('permission_inventory', value)}
                        value={values.permission_inventory}
                      />
                    </FormGroup>
                  </Colxx>
                  {permissions && permissions.map((role) => (
                    <Colxx md={3} key={role.id}>
                      <Card>
                        <CardBody>
                          <CardTitle>{role.title}</CardTitle>
                          <Separator/>
                          <FormGroup tag="fieldset" className={'mt-4'}>
                            {role.permissions && role.permissions.map((permission) => (
                              <FormGroup check className={'mb-2'} key={permission.id}>
                                <Label>
                                  {permission.title}
                                </Label>
                                <FormikSwitch
                                  className={'custom-switch custom-switch-primary'}
                                  name={`permissions.${permission.id}`}
                                  onChange={setValues}
                                  onBlur={setFieldTouched}
                                  value={permission.name}
                                  values={values}
                                />
                              </FormGroup>
                            ))}
                          </FormGroup>
                        </CardBody>
                      </Card>
                    </Colxx>
                  ))
                  }
                  <Colxx md={12} className={'mt-5'}>
                    <Card>
                      <CardBody>
                        <CardTitle>دسترسی های دسته بندی</CardTitle>
                        <Separator/>
                        <FormGroup className={'mt-4'}>
                          <CategoryPermission checked={values.permission_category} setChecked={setFieldValue}
                                              name={'permission_category'}/>
                        </FormGroup>
                      </CardBody>
                    </Card>
                  </Colxx>
                </Row>
                <Button color={'primary'} type={'submit'}>ثبت</Button>
              </Form>
            }
          </Formik>
        </CardBody>
      </Card>
    </Colxx>
  )
}


const mapStateToProps = ({permissionsRoles, authUser: {currentUser}}) => {
  const {loading, errors, permissions} = permissionsRoles;
  return {permissions, errors, loading, currentUser};
};


export default connect(mapStateToProps, {
  fetchPermission: permissionAll
})(OperatorPermission);
