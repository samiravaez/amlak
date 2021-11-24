import React,{Suspense} from "react";
import {
  Card,
  CardBody,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle, FormGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader,
  Row,
  UncontrolledButtonDropdown,
} from "reactstrap";
import {Field, Form, Formik} from "formik";
import {useHistory} from "react-router-dom";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import TableAjax from "../../../components/TableAjax";
import {Button} from "react-yandex-maps";
import {adminPathApi} from "../../../constants/defaultValues";

const Addresses = ({match}) => {
  let history = useHistory();
  const id = match.params.id ? match.params.id : null;
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const [addressModal, setAddressModal] = React.useState(false);
  const [selectId, setSelectedId] = React.useState(null);


  const Actions = ({id}) => {
    return (
      <UncontrolledButtonDropdown tag={'a'}>
        <DropdownToggle color="secondary" outline>
          <i className={'simple-icon-options-vertical'}/>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => {
            setSelectedId(id);
            setAddressModal(true);
          }}>
            ویرایش
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    );
  };

  const cols = React.useMemo(
    () => [
      {
        Header: 'استان',
        accessor: 'province',
        cellClass: 'list-item-heading',
        Cell: ({row}) => row.original.first_name + ' ' + row.original.last_name,
      },
      {
        Header: 'شهر',
        accessor: 'city',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'آدرس',
        accessor: 'address',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'شماره موبایل',
        accessor: 'mobile',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'تلفن',
        accessor: 'phone',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'گزینه ها',
        accessor: 'id',
        cellClass: 'text-muted text-center',
        Cell: (props) => (<Actions id={props.value}/>),
      },
    ],
    []
  );

  const handleModalAddressSubmit = async (values) => {
    await axios.post(`${adminPathApi}/shop/changeStatus/${selectId}`, values)
      .then(({data}) => {
        console.log(data);
      })
      .catch(error => console.log(error));
  };
  //const tableInstance = useTable({columns, data})
  const fetchData = React.useCallback(async ({pageSize, pageIndex}) => {
      await axios.get(`${adminPathApi}/address/${id}?page=${pageIndex + 1}&per_page=${pageSize}`)
        .then((res) => {
          setData(res.data.data)
          setPageCount(res.data.last_page)
          return res
        })
        .catch((error) => error)
    }
    , []);


  return (
    <Suspense fallback={<div className={'loading'}/>}>
      <Row>
        <Colxx xss="12">
          <Breadcrumb heading={"menu.addresses.list"} match={match}/>
          <Separator className="mb-5"/>
        </Colxx>
      </Row>
      <Colxx>
        <Card className="mb-4">
          <CardBody>
            <CardTitle>مشتری ها</CardTitle>
            <TableAjax columns={cols} data={data} fetchData={fetchData} loading={loading} pageCount={pageCount}/>
          </CardBody>
        </Card>
      </Colxx>
      <Modal
        isOpen={addressModal}
      >
        <ModalHeader>
          رد فروشگاه
        </ModalHeader>
        <Formik initialValues={{type: 'deny_shop'}} onSubmit={handleModalAddressSubmit}>
          <Form>
            <ModalBody>
              <FormGroup>
                <Label>علت رد فروشگاه</Label>
                <Field as={'textarea'} name={'reason'} className={'form-control'}/>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                type={"submit"}
                color="danger"
              >
                ثبت
              </Button>
              <Button
                color="secondary"
                onClick={() => {
                  setAddressModal(false);
                }}
              >
                بستن
              </Button>
            </ModalFooter>
          </Form>
        </Formik>
      </Modal>
    </Suspense>
  )
};


export default Addresses;
