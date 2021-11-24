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

const RoleManagement = ({ match }) => {

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
      name: 'super-admin',
      role: 'مدیر کل',
      access: '',
    },
    {
      id: 801,
      name: 'adds-expert',
      role: 'کارشناس',
      access: 'ثبت آگهی',
    },
    {
      id: 802,
      name: 'adds-manager',
      role: 'مدیریت کل آگهی ها',
      access: 'مدیریت آگهی ها/ثبت آگهی',
    },
    {
      id: 803,
      name: 'users_manager',
      role: 'مدیریت کاربران',
      access: 'مدیریت کاربران',
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
        Header: 'عنوان عمومی',
        accessor: 'role',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'سطح دسترسی ها',
        accessor: 'access',
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
              <TableAjax columns={cols} data={data} fetchData={fetchData} loading={loading} pageCount={pageCount} />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </Suspense>
  );
}
export default RoleManagement;
