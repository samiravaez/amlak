import React, { Suspense, useState } from "react";
import {
  CardBody,
  CardTitle,
  Row,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Button,
  CardHeader,
  UncontrolledButtonDropdown,
  CardFooter,
  CardText,
  Card,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Collapse,
} from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import TableAjax from "../../../components/TableAjax";
import axios from "axios";
import { adminPathApi } from "../../../constants/defaultValues";
import { useHistory } from "react-router-dom";
import AlertError from "../../../components/AlertError";
import { Field, Form, Formik, FieldArray, ErrorMessage } from "formik";
import ReactQuill from 'react-quill';
import { FormikReactSelect } from "../../../containers/form-validations/FormikFields";

const AllUsers = ({ match }) => {

  const [serverError, setServerError] = React.useState({})

  const id = match.params.id ? match.params.id : null;

  const [initialValues, setInitialValues] = React.useState({
    manegment: '0',
  });

  const onSubmit = () => {

  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(true)
  };

  let history = useHistory();

  const [data, setData] = React.useState([
    {
      id: 800,
      name: 'پرتو',
      role: '',
      number: '093366999',
      date: '08 مهر 1400 03:36',
    },
    {
      id: 801,
      name: 'پرتو',
      role: '',
      number: '093366999',
      date: '08 مهر 1400 03:36',
    },
    {
      id: 802,
      name: 'پرتو',
      role: '',
      number: '093366999',
      date: '08 مهر 1400 03:36',
    },
    {
      id: 803,
      name: 'پرتو',
      role: '',
      number: '093366999',
      date: '08 مهر 1400 03:36',
    }
  ]);

  const cols = React.useMemo(
    () => [
      {
        Header: 'شناسه',
        accessor: 'id',
        cellClass: 'list-item-heading',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'نام',
        accessor: 'name',
        cellClass: 'list-item-heading',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'نقش کاربر',
        accessor: 'role',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: '	شماره تماس',
        accessor: 'number',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'تاریخ ثبت نام',
        accessor: 'date',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'گزینه ها',
        accessor: 'options',
        cellClass: 'text-muted text-center',
        Cell: (props) => (<Actions id={props.value} />),
      },
    ],
    []
  );

  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const [notApproveModal, setNotApproveModal] = React.useState(false);
  const [selectId, setSelectedId] = React.useState(null);

  const Actions = ({ id }) => {
    return (
      <UncontrolledButtonDropdown tag={'a'}>
        <DropdownToggle color="secondary" outline>
          <i className={'simple-icon-options-vertical'} />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => history.push(`edit/${id}`)}>
            ویرایش کاربر
          </DropdownItem>
          <DropdownItem onClick={() => {
          }}>
            دسترسی های مستقیم  کاربر
          </DropdownItem>
          <DropdownItem onClick={() => {
            setSelectedId(id);
            setNotApproveModal(true);
          }}>
            انتقال نوشته های کاربر
          </DropdownItem>
          <DropdownItem>
            حیطه کاری کارشناس
          </DropdownItem>
          <DropdownItem>
            حذف کاربر
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    );
  };

  const handleModalNotApproveSubmit = async (values) => {
    await axios.post(`${adminPathApi}/shop/changeStatus/${selectId}`, values)
      .then(({ data }) => {
        console.log(data);
      })
      .catch(error => console.log(error));
  };

  const fetchData = React.useCallback(async ({ pageSize, pageIndex }) => {
    await axios.get(`${adminPathApi}/shop?page=${pageIndex + 1}&per_page=${pageSize}`)
      .then((res) => {
        setData(res.data.data)
        setPageCount(res.data.last_page)
        return res
      })
      .catch((error) => error)
  }
    , []);

  return (
    <Suspense fallback={<div className="loading" />}>
      <Row>
        <Colxx xss="12">
          <Breadcrumb heading={"alluse"} match={match} />
          <div className="search-sm d-inline-block mr-1 mb-3 align-top float-right">
            <input
              type="text"
              name="keyword"
              id="search"
              placeholder={'جستجو'}
              onKeyPress={(e) => onSearchKey(e)}
            />
          </div>
          <Separator className="mb-5" />
        </Colxx>
        <Colxx md={12}>
          <Card className="mb-4">
            <CardBody>
              <AlertError errors={serverError} />
              <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
                {({ errors, touched, setFieldValue, setFieldTouched, values }) => (
                  <Form className="av-tooltip tooltip-label-right">
                    <Row>
                      <Colxx md={6}>
                        <FormGroup>
                          <FormikReactSelect onChange={setFieldValue} onBlur={setFieldTouched} name={'manegment'} value={values.manegment} options={[
                            {
                              label: 'مشاهده همه',
                              value: '0'
                            },
                            {
                              label: 'مدیر کل',
                              value: '1'
                            },
                            {
                              label: 'کارشناس',
                              value: '2'
                            },
                            {
                              label: 'مدیریت کل آگهی ها',
                              value: '3'
                            },
                            {
                              label: 'مدیریت کاربران',
                              value: '4'
                            }
                          ]} />
                          {errors.manegment && touched.manegment && (
                            <div className="invalid-feedback d-block">
                              {errors.manegment}
                            </div>
                          )}
                        </FormGroup>
                      </Colxx>
                    </Row>
                  </Form>
                )}
              </Formik>
              <TableAjax columns={cols} data={data} fetchData={fetchData} loading={loading} pageCount={pageCount} />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </Suspense>
  );
}
export default AllUsers;
