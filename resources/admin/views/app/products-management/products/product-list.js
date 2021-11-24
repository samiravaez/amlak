import React, {Suspense} from "react";
import {
  Badge,
  Card,
  CardBody, CardSubtitle,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row, UncontrolledButtonDropdown,
} from "reactstrap";
import {Colxx, Separator} from "../../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../../containers/navs/Breadcrumb";
import TableAjax from "../../../../components/TableAjax";
import axios from "axios";
import {adminPathApi} from "../../../../constants/defaultValues";
import {Link, useHistory} from "react-router-dom";


const ProductList = ({match,...props}) => {
  let history = useHistory()
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [pageCount, setPageCount] = React.useState(0)

  const Actions = ({id,row}) => {
    return (
      <UncontrolledButtonDropdown tag={'a'}>
        <DropdownToggle color="secondary" outline>
          <i className={'simple-icon-options-vertical'} />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => history.push(`edit/${id}`)}>
            ویرایش
          </DropdownItem>
          {row.status!=0 && (
            <DropdownItem onClick={() => awaited(id)}>
              در انتظار تأیید
            </DropdownItem>
          )}
          {row.status!=1 && (
            <DropdownItem onClick={() => approve(id)}>
              تأیید
            </DropdownItem>
          )}
          {row.status!=2 && (
            <DropdownItem onClick={() => reject(id)}>
              رد کردن
            </DropdownItem>
          )}
          {row.productsCount>0 && (
            <DropdownItem onClick={() => history.push(`products/${id}`)}>
              مشاهده فروشندگان <Badge color="info" pill>{row.productsCount}</Badge>
            </DropdownItem>
          )}
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    );
  };

  const reject=(id)=>{
    swal({
      title: 'علت رد محصول را بنویسید',
      icon: "warning",
      content: {
        element: "input",
        attributes: {
          type: "text",
        },
      },
      buttons: ['لغو', 'ثبت و رد محصول'],
    }).then(async (result)=> {
      if (result !== null) {
        axios
          .post(`${adminPathApi}/template/change-status/${id}`,{action:'reject',reject_reason:result})
          .then(res=>res.data)
          .then(data=>{
            if(data.status){
              setData((items)=>{
                return items.map(item => item.id == id ? {...item,status:2}:item);
              })
              swal(data.message,{icon:'success',timer:3000,buttons:false})
            }
          })
      }
    })
  }

  const approve=(id)=>{
    axios
      .post(`${adminPathApi}/template/change-status/${id}`,{action:'approve'})
      .then(res=>res.data)
      .then(data=>{
        if(data.status){
          setData((items)=>{
            return items.map(item => item.id == id ? {...item,status:1}:item);
          })
          swal(data.message,{icon:'success',timer:3000,buttons:false})
        }
      })
  }

  const awaited=(id)=>{
    axios
      .post(`${adminPathApi}/template/change-status/${id}`,{action:'await'})
      .then(res=>res.data)
      .then(data=>{
        if(data.status){
          setData((items)=>{
            return items.map(item => item.id == id ? {...item,status:0}:item);
          })
          swal(data.message,{icon:'success',timer:3000,buttons:false})
        }
      })
  }

  const cols = React.useMemo(
    () => [
      {
        Header: 'نام',
        cellClass: 'list-item-heading',
        Cell: (props) => <div className="product-name-box">
          <div className="img-wrapper">
            <img className="product-image" src={"http://shop.test/assets/img/products/cheesecake-thumb.jpg"}/>
          </div>
          <div className="name-wrapper">
            <p className="product-title">{props.row.original.title}</p>
          </div>
        </div>,
      },
      {
        Header: 'اطلاعات ثبت محصول',
        cellClass: 'list-item-heading',
        Cell: (props) => <ul className="product-register">
          <li><span className="list-name">اپراتور: </span><span className="list-value">{props.row.original.admin.first_name} {props.row.original.admin.last_name}</span></li>
          <li><span className="list-name">فروشگاه: </span><span className="list-value">{props.row.original.shop?props.row.original.shop.name:'فروشگاه اصلی'}</span></li>
          <li><span className="list-name">دسته بندی محصول: </span><span className="list-value">{props.row.original.main_category.name}</span></li>
        </ul>,
      },
      {
        Header: 'وضعیت',
        cellClass: 'list-item-heading',
        Cell: (props) => (
          <>
            {props.row.original.status == 0 && (
              <Badge color="secondary">در انتظار تأیید</Badge>
            )}
            {props.row.original.status == 1 && (
              <Badge color="success">تأیید شده</Badge>
            )}
            {props.row.original.status == 2 && (
              <Badge color="danger">رد شده</Badge>
            )}
          </>
        ),
      },
      {
        Header: 'تغییرات محصول',
        cellClass: 'list-item-heading',
        Cell: (props) => <div className="product-variations">
          {props.row.original.superAttributesTitle.length>0?props.row.original.superAttributesTitle.join(' | '):'---' }
        </div>,
      },
      {
        Header: 'گزینه ها',
        accessor: 'id',
        cellClass: 'text-muted text-center',
        Cell: (props) => (<Actions id={props.value} row={props.row.original}/>),
      },
    ],
    []
  );
  //const tableInstance = useTable({ columns, data })
  const fetchData = React.useCallback(async ({pageSize, pageIndex}) => {
      await axios.get(`${adminPathApi}/template?page=${pageIndex + 1}&per_page=${pageSize}`)
        .then((res) => {
          setData(res.data.data);
          setPageCount(res.data.last_page);
          return res
        })
        .catch((error) => error)
    }
    ,[]);

  return (
    <Suspense fallback={<div className={'loading'}/> }>
      <Row>
        <Colxx xss="12">
          <Breadcrumb heading={"menu.templates.list"} match={match}/>
          <Link className={"mx-1"} to={"create"}>
            <span className={"simple-icon-plus"}/>
          </Link>
          <Separator className="mb-5"/>
        </Colxx>
      </Row>
      <Colxx>
        <Card className="mb-4">
          <CardBody>
            <TableAjax columns={cols} data={data} fetchData={fetchData} loading={loading} pageCount={pageCount}/>
          </CardBody>
        </Card>
      </Colxx>
    </Suspense>
  )
};

export default ProductList;

