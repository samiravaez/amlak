import React from "react";
import {adminPathApi} from "../../../../constants/defaultValues";
import {Card, CardTitle, CardBody, FormGroup,Row,Button} from "reactstrap";
import {Field, Form, Formik} from "formik";
import {Colxx} from "../../../../components/common/CustomBootstrap";
import CustomAttribute from "../../../../components/CustomAttribute";


const ProductFeature = ({id, wizardHelper, ...props}) => {
  const [groups, setGroups] = React.useState([]);
  const [features, setFeatures] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(async () => {
    await axios
      .get(`${adminPathApi}/template/${id}/group_attributes`)
      .then(response => response.data)
      .then(data => {
        if (data.status) {
          setGroups(data.attributes);
          setFeatures(data.features);
        }
      }).finally(() => {
        setLoading(false)
      })
  }, []);

  const onSubmit = (values) => {
    axios
      .post(`${adminPathApi}/template/${id}/group_attributes`,values)
      .then(response=>response.data)
      .then(data=>{
        if(data.status){
          wizardHelper.next();
        }
      })
  }

  if (loading) {
    return (<div className="loading"/>);
  }


  return (
    <Formik onSubmit={onSubmit} initialValues={features}>
      {({errors, touched, setFieldValue, setFieldTouched, values}) => (
        <Form className="av-tooltip tooltip-label-right">
          {groups.map(group => (
            <>
              <CardTitle>{group.title}</CardTitle>
              <Row>
              {group.attributes && group.attributes.map(attribute => (
                <Colxx sm="6">
                  <CustomAttribute key={attribute.code} errors={errors} touched={touched} setFieldValue={setFieldValue}
                                   setFieldTouched={setFieldTouched} values={values} attribute={attribute}/>
                </Colxx>
              ))}
              </Row>
            </>
            ))}
            <Button type="submit">ثبت و ادامه</Button>
        </Form>
      )}
    </Formik>
  );
}
export default ProductFeature;
