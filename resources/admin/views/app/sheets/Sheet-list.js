import React, { Suspense } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledButtonDropdown,
} from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import TableAjax from "../../../components/TableAjax";
import axios from "axios";
import { adminPathApi } from "../../../constants/defaultValues";
import { useHistory } from "react-router-dom";

const SheetList = ({ match }) => {
  let history = useHistory();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);


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
          <DropdownItem onClick={() => history.push(`address/${id}`)}>
            آدرس ها
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    );
  };

  const cols = React.useMemo(
    () => [
      {
        Header: 'عنوان',
        accessor: 'first_name',
        cellClass: 'list-item-heading',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'نامک',
        accessor: 'last_name',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'نویسنده',
        accessor: 'username',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'وضعیت',
        accessor: 'email',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'تاریخ انتشار',
        accessor: 'id',
        cellClass: 'text-muted text-center',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'آخرین به روز رسانی',
        accessor: 'last',
        cellClass: 'text-muted text-center',
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

  //const tableInstance = useTable({ columns, data })
  const fetchData = React.useCallback(async ({ pageSize, pageIndex }) => {
    await axios.get(`${adminPathApi}/user/show?page=${pageIndex + 1}&per_page=${pageSize}`)
      .then((res) => {
        setData(res.data.data)
        setPageCount(res.data.last_page)
        return res
      })
      .catch((error) => error)
  }
    , []);

  return (
    <Suspense fallback={<div className={'loading'} />}>
      <Row>
        <Colxx xss="12" md="12">
          <Breadcrumb heading={"menu.customers.list"} match={match} />
          <div className="search-sm d-inline-block mr-1 mb-3 align-top float-right">
            <input
              type="text"
              name="keyword"
              id="search"
              placeholder={'جستجو'}
              onKeyPress={(e) => onSearchKey(e)}
            />
          </div>
          <Separator className="mb-5 bt-3" />
        </Colxx>
      </Row>
      <Colxx>
        <Card className="mb-4">
          <CardBody>
            <CardTitle>برگه ها</CardTitle>
            <TableAjax columns={cols} data={data} fetchData={fetchData} loading={loading} pageCount={pageCount} />
          </CardBody>
        </Card>
      </Colxx>
    </Suspense>
  )
};


export default SheetList;
