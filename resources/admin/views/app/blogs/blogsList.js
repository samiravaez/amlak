import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledButtonDropdown,
  Collapse,
  Button,
} from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import TableAjax from "../../../components/TableAjax";
import axios from "axios";
import { adminPathApi } from "../../../constants/defaultValues";
import { useHistory } from "react-router-dom";
import IntlMessages from '../../../helpers/IntlMessages';

const blogsList = ({ match, selectedOrderOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglee = () => setIsOpen(!isOpen);

  let history = useHistory();
  const [data, setData] = React.useState([{ id: 1, first_name: 'test' }]);
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
          <DropdownItem onClick={() => history.push(`permission/${id}`)}>
            حذف
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
    await axios.get(`${adminPathApi}/operator?page=${pageIndex + 1}&per_page=${pageSize}`)
      .then((res) => {
        setData(res.data.data)
        setPageCount(res.data.last_page)
        return res
      })
      .catch((error) => error)
  }
    , []);

  const onSearchKey = (e) => {

  }

  return (
    <Suspense fallback={<div className={'loading'} />}>
      <Row>
        <Colxx xss="12">
          <Breadcrumb heading={"menu.blogs.list"} match={match} />
          <div className="text-zero d-sm-none d-md-block top-right-button-container">
            <div className="search-sm d-inline-block mr-1 mb-1 align-top">
              <input
                type="text"
                name="keyword"
                id="search"
                placeholder={'جستجو'}
                onKeyPress={(e) => onSearchKey(e)}
              />
            </div>
            <Link to="create"
              className="top-right-button btn btn-lg btn-primary"
            >
              <IntlMessages id="pages.add" />
            </Link>
          </div>
          <Button className="MyDropDown d-md-none" color="secondary" onClick={togglee} style={{ marginBottom: '1rem' }}>نمایش جزئیات</Button>
          <Collapse className="d-md-none" isOpen={isOpen}>
            <Card className="d-md-none">
              <CardBody>
                <div className="search-sm d-inline-block mr-1 mb-1 align-top">
                  <input
                    type="text"
                    name="keyword"
                    id="search"
                    placeholder={'جستجو'}
                    onKeyPress={(e) => onSearchKey(e)}
                  />
                </div>
                <Link to="create"
                  className="top-right-button btn btn-lg btn-primary"
                >
                  <IntlMessages id="pages.add" />
                </Link>
              </CardBody>
            </Card>
          </Collapse>
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Colxx>
        <Card className="mb-4">
          <CardBody>
            <TableAjax columns={cols} data={data} fetchData={fetchData} loading={loading} pageCount={pageCount} />
          </CardBody>
        </Card>
      </Colxx>
    </Suspense>
  )
};

// const mapStateToProps = ({authUser}) => {
//   const {error} = authUser;
//   return {error};
// };

export default (blogsList);
