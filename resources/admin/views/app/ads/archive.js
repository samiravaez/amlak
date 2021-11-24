import React, { Suspense, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledButtonDropdown,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import TableAjax from "../../../components/TableAjax";
import axios from "axios";
import { adminPathApi } from "../../../constants/defaultValues";
import { useHistory } from "react-router-dom";
import MainCollapse from "./mainCollapse";

const Archive = ({ match }) => {
  let history = useHistory();

  const [loading, setLoading] = React.useState(false);

  const [pageCount, setPageCount] = React.useState(0);

  const [notApproveModal, setNotApproveModal] = React.useState(false);

  const [selectId, setSelectedId] = React.useState(null);

  const cols = React.useMemo(
    () => [
      {
        Header: 'کد آگهی',
        accessor: 'id',
        cellClass: 'list-item-heading',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'عنوان',
        cellClass: 'text-muted',
        Cell: (props) =>
          <>
            <div>
              <p id="point" onClick={() => onTitleClick(props.row.original.id)}>{props.row.original.Title}</p>
              <p>{props.row.original.Name}</p>
              <p>{props.row.original.Date}</p>
            </div>
          </>,
      },
      {
        Header: '	مکان',
        cellClass: 'text-muted',
        Cell: (props) =>
          <>
            <div>
              <p>{props.row.original.Address}</p>
              <p>{props.row.original.Number}</p>
            </div>
          </>,
      },
      {
        Header: 'شرایط معامله',
        accessor: 'Conditions',
        cellClass: 'text-muted text-center',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'مشخصات ملک',
        accessor: 'Specifications',
        cellClass: 'list-item-heading',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'سال ساخت',
        accessor: 'construction',
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

  const [addDetails, setAddDetails] = useState({

  });

  const onTitleClick = (id) => {
    // axios.post('',{adds:id}).then((res) => {
    // })
    setTimeout(() => {
      setModal(true);
      setAddDetails({
        title: 'فروش آپارتمان 93 متری رسالت',
        year: '1385',
        Branches: 'آب | برق | گاز',
      });
    }, 1000);
  };

  const Actions = ({ id }) => {
    return (
      <UncontrolledButtonDropdown tag={'a'}>
        <DropdownToggle color="secondary" outline>
          <i className={'simple-icon-options-vertical'} />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => history.push(`edit/${id}`)}>
            رد آگهی
          </DropdownItem>
          <DropdownItem onClick={() => {
          }}>
            تأیید
          </DropdownItem>
          <DropdownItem onClick={() => {
            setSelectedId(id);
            setNotApproveModal(true);
          }}>
            بازگشت به حالت اولیه
          </DropdownItem>
          <DropdownItem>
            ویرایش آگهی
          </DropdownItem>
          <DropdownItem>
            ویرایش آگهی
          </DropdownItem>
          <DropdownItem>
            به روز رسانی آگهی
          </DropdownItem>
          <DropdownItem>
            بایگانی آگهی
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    );
  };

  const [data, setData] = React.useState([
    {
      id: 1000,
      Title: 'فروش کارگاه 1000 متری مایان',
      Name: 'ابوالفضل عیوضی',
      Date: '28 شهریور 1400- 08:55',
      Address: 'آدرس: مایان / کوچه مارال درب',
      Number: 'تلفن: 093366999',
      Conditions: 'قیمت: 5,500,000,000 تومان',
      Specifications: '',
      construction: '1345',
    },
    {
      id: 1001,
      Title: 'فروش کارگاه 1000 متری مایان',
      Name: 'ابوالفضل عیوضی',
      Date: '28 شهریور 1400- 08:55',
      Address: 'آدرس: مایان / کوچه مارال درب',
      Number: 'تلفن: 093366999',
      Conditions: 'قیمت: 5,500,000,000 تومان',
      Specifications: '',
      construction: '1355',
    },
    {
      id: 1002,
      Title: 'فروش کارگاه 1000 متری مایان',
      Name: 'ابوالفضل عیوضی',
      Date: '28 شهریور 1400- 08:55',
      Address: 'آدرس: مایان / کوچه مارال درب',
      Number: 'تلفن: 093366999',
      Conditions: 'قیمت: 5,500,000,000 تومان',
      Specifications: '',
      construction: '1365',
    },
    {
      id: 1003,
      Title: 'فروش کارگاه 1000 متری مایان',
      Name: 'ابوالفضل عیوضی',
      Date: '28 شهریور 1400- 08:55',
      Address: 'آدرس: مایان / کوچه مارال درب',
      Number: 'تلفن: 093366999',
      Conditions: 'قیمت: 5,500,000,000 تومان',
      Specifications: '',
      construction: '1375',
    },
    {
      id: 1004,
      Title: 'فروش کارگاه 1000 متری مایان',
      Name: 'ابوالفضل عیوضی',
      Date: '28 شهریور 1400- 08:55',
      Address: 'آدرس: مایان / کوچه مارال درب',
      Number: 'تلفن: 093366999',
      Conditions: 'قیمت: 5,500,000,000 تومان',
      Specifications: '',
      construction: '1385',
    },
    {
      id: 1005,
      Title: 'فروش کارگاه 1000 متری مایان',
      Name: 'ابوالفضل عیوضی',
      Date: '28 شهریور 1400- 08:55',
      Address: 'آدرس: مایان / کوچه مارال درب',
      Number: 'تلفن: 093366999',
      Conditions: 'قیمت: 5,500,000,000 تومان',
      Specifications: '',
      construction: '1400',
    },
  ]);

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

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Suspense fallback={<div className={'loading'} />}>
        <Row>
          <Colxx xss="12">
            <Breadcrumb heading={"archive.ads.list"} match={match} />
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
        </Row>
        <Colxx className="col-md-12 mb-3">
            <MainCollapse className="MyMainCollapse"/>
        </Colxx>
        <Colxx>
          <Card className="mb-4">
            <CardBody>
              <CardTitle>آگهی ها</CardTitle>
              <TableAjax columns={cols} data={data} fetchData={fetchData} loading={loading} pageCount={pageCount} />
            </CardBody>
          </Card>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>{addDetails.title}</ModalHeader>
            <ModalBody>
              <p id="modalP"><span>سال ساخت :</span><span>{addDetails.title}</span></p>
              <p id="modalP"><span>اطلاعات تماس :</span><span>{addDetails.year}</span></p>
              <p id="modalP"><span>انشعابات :</span><span>{addDetails.Branches}</span></p>
            </ModalBody>
          </Modal>
        </Colxx>
      </Suspense>
    </>
  );
}
export default Archive;
