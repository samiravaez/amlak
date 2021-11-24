import React, { Suspense, useState } from "react";
import {
  CardBody,
  Row,
  UncontrolledButtonDropdown,
  Card,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import { useHistory } from "react-router-dom";
import TableAjax from "../../../components/TableAjax";

const MenuTypes = ({ match }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(true)
  };

  let history = useHistory();

  const [data, setData] = React.useState([
    {
      id: 800,
      name: 'پدرام پرتو',
      lname: 'سلام',
      Customer: 'ویلای شمال',
      manner: 'انتشار',
      date: '1399-11-19 12:37:57',
    },
    {
      id: 801,
      name: 'پدرام پرتو',
      lname: 'خدافیییظ',
      Customer: 'ویلای شمال',
      manner: 'در صف انتشار',
      date: '1399-11-19 12:37:57',
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
        Header: 'نویسنده',
        accessor: 'name',
        cellClass: 'list-item-heading',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: '	دیدگاه',
        accessor: 'lname',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'در پاسخ به',
        accessor: 'Customer',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: '	وضعیت',
        accessor: 'manner',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'تاریخ ارسال',
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
  const [selectId, setSelectedId] = React.useState(null);


  const Actions = ({ id }) => {
    return (
      <UncontrolledButtonDropdown tag={'a'}>
        <DropdownToggle color="secondary" outline>
          <i className={'simple-icon-options-vertical'} />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => history.push(`edit/${id}`)}>
            ویرایش
          </DropdownItem>
          <DropdownItem onClick={() => {
          }}>
            پاسخ دادن
          </DropdownItem>
          <DropdownItem>
            حذف مشتری
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
    <>
      <Suspense fallback={<div className="loading" />}>
        <Row>
          <Colxx xss="12">
            <Breadcrumb heading={"typees"} match={match} />
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
    </>
  );
}

export default MenuTypes;
