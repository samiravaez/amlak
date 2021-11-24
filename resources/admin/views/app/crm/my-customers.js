import React, {Suspense, useState} from "react";
import {
    Button,
    Card,
    CardBody,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Row,
    UncontrolledButtonDropdown,
    Collapse,
} from "reactstrap";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import TableAjax from "../../../components/TableAjax";
import axios from "axios";
import {adminPathApi} from "../../../constants/defaultValues";
import {useHistory} from "react-router-dom";

const MyCustomers = ({match}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(true)
    };

    let history = useHistory();

    const [data, setData] = React.useState([]);
    // const [data, setData] = React.useState([
    //     {
    //         id: 915,
    //         Registrar: <>
    //             <div className="registrar">
    //                 <p>پدرام پرتو</p>
    //                 <p id="special">093366999<i className="simple-icon-phone mr-2"/></p>
    //                 <p><i className="iconsminds-timer mr-2"/>2021-09-14</p>
    //             </div>
    //         </>,
    //         Customer: 'غلامی',
    //         type: 'جدی-آنی',
    //         buy: 'ثبت اطلاعات',
    //     },
    //     {
    //         id: 914,
    //         Registrar: <>
    //             <div className="registrar">
    //                 <p>پدرام پرتو</p>
    //                 <p id="special">093366999<i className="simple-icon-phone mr-2"/></p>
    //                 <p id="secspecial"><i className="iconsminds-timer mr-2"/>2021-09-14</p>
    //             </div>
    //         </>,
    //         type: 'جدی-آنی',
    //         buy: 'ثبت اطلاعات',
    //     },
    //     {
    //         id: 913,
    //         Registrar: <>
    //             <div className="registrar">
    //                 <p>پدرام پرتو</p>
    //                 <p id="special">093366999<i className="simple-icon-phone mr-2"/></p>
    //                 <p><i className="iconsminds-timer mr-2"/>2021-09-14</p>
    //             </div>
    //         </>,
    //         Customer: 'غلامی',
    //         type: 'جدی-آنی',
    //         buy: 'ثبت اطلاعات',
    //     },
    //     {
    //         id: 912,
    //         Registrar: <>
    //             <div className="registrar">
    //                 <p>پدرام پرتو</p>
    //                 <p id="special">093366999<i className="simple-icon-phone mr-2"/></p>
    //                 <p><i className="iconsminds-timer mr-2"/>2021-09-14</p>
    //             </div>
    //         </>,
    //         type: 'جدی-آنی',
    //         buy: 'ثبت اطلاعات',
    //     },
    //     {
    //         id: 911,
    //         Registrar: <>
    //             <div className="registrar">
    //                 <p>پدرام پرتو</p>
    //                 <p id="special">093366999<i className="simple-icon-phone mr-2"/></p>
    //                 <p><i className="iconsminds-timer mr-2"/>2021-09-14</p>
    //             </div>
    //         </>,
    //         Customer: 'غلامی',
    //         type: 'جدی-آنی',
    //         buy: 'ثبت اطلاعات',
    //     },
    //     {
    //         id: 910,
    //         Registrar: <>
    //             <div className="registrar">
    //                 <p>پدرام پرتو</p>
    //                 <p id="special">093366999<i className="simple-icon-phone mr-2"/></p>
    //                 <p><i className="iconsminds-timer mr-2"/>2021-09-14</p>
    //             </div>
    //         </>,
    //         type: 'جدی-آنی',
    //         buy: 'ثبت اطلاعات',
    //     },
    // ]);
    const [loading, setLoading] = React.useState(false);
    const [pageCount, setPageCount] = React.useState(0);
    const [notApproveModal, setNotApproveModal] = React.useState(false);
    const [selectId, setSelectedId] = React.useState(null);


    const Actions = ({id}) => {
        return (
            <UncontrolledButtonDropdown tag={'a'}>
                <DropdownToggle color="secondary" outline>
                    <i className={'simple-icon-options-vertical'}/>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => history.push(`edit/${id}`)}>
                        ویرایش مشتری
                    </DropdownItem>
                    <DropdownItem onClick={() => {
                    }}>
                        لیست آگهی ها
                    </DropdownItem>
                    <DropdownItem onClick={() => {
                        setSelectedId(id);
                        setNotApproveModal(true);
                    }}>
                        مشاهده
                    </DropdownItem>
                    <DropdownItem>
                        حذف مشتری
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
        );
    };

    const SeccondAction = () => {
        const [isOpen, setIsOpen] = useState(false);

        const toggle = () => {
            setIsOpen(!isOpen)
        };
        return (
            <>
                <Button className="MyButton" onClick={toggle} style={{marginBottom: '1rem'}}>آپارتمان</Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody className="MyCard">
                            <ul>
                                <li>نوع</li>
                                <li>طبقه</li>
                                <li>تعداد اتاق</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Collapse>
            </>
        );
    };

    const cols = React.useMemo(
        () => [
            {
                Header: 'شناسه',
                accessor: 'id',
                cellClass: 'list-item-heading',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: '	مشتری',
                cellClass: 'text-muted',
                Cell: (props) => <>{props.row.original.first_name + ' ' + props.row.original.last_name}</>,
            },
            {
                Header: 'ثبت کننده',
                accessor: 'user.name',
                cellClass: 'text-muted',
                Cell: (props) => <>{props.value}</>,
            },
            // {
            //   Header: 'نواحی درخواستی',
            //   accessor: 'area',
            //   cellClass: 'text-muted text-center',
            //   Cell: (props) => <>{props.value}</>,
            // },
            // {
            //   Header: 'نوع معامله',
            //   accessor: 'Transaction',
            //   cellClass: 'list-item-heading',
            //   Cell: (props) => <>{props.value}</>,
            // },
            // {
            //   Header: 'نوع ملک',
            //   accessor: 'Property',
            //   Cell: () => (<SeccondAction />),
            // },
            {
                Header: 'نوع مشتری',
                accessor: 'customer_type.name',
                cellClass: 'text-muted',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'شماره موبایل',
                accessor: 'mobile_unique',
                cellClass: 'text-muted',
                Cell: (props) => <>{props.value}</>,
            },

            {
                Header: 'مرحله خرید',
                accessor: 'purchase_stage.name',
                cellClass: 'text-muted text-center',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'گزینه ها',
                accessor: 'options',
                cellClass: 'text-muted text-center',
                Cell: (props) => (<Actions id={props.value}/>),
            },
        ],
        []
    );

    const handleModalNotApproveSubmit = async (values) => {
        await axios.post(`${adminPathApi}/shop/changeStatus/${selectId}`, values)
            .then(({data}) => {
                console.log(data);
            })
            .catch(error => console.log(error));
    };
    //const tableInstance = useTable({ columns, data })
    const fetchData = React.useCallback(async ({pageSize, pageIndex}) => {
            await axios.get(`${adminPathApi}/crm/my_customers/?page=${pageIndex + 1}&per_page=${pageSize}`)
                .then((res) => {
                    setData(res.data.my_customers.data)
                    setPageCount(res.data.my_customers.last_page)
                    return res
                })
                .catch((error) => error)
        }
        , []);

    return (
        <Suspense fallback={<div className={'loading'}/>}>
            <Row>
                <Colxx xss="12">
                    <Breadcrumb heading={"my.crm.customers"} match={match}/>
                    <div className="search-sm d-inline-block mr-1 mb-3 align-top float-right">
                        <input
                            type="text"
                            name="keyword"
                            id="search"
                            placeholder={'جستجو'}
                            onKeyPress={(e) => onSearchKey(e)}
                        />
                    </div>
                    <Separator className="mb-5"/>
                </Colxx>
            </Row>
            <Colxx>
                <Card className="mb-4">
                    <CardBody>
                        <TableAjax columns={cols} data={data} fetchData={fetchData} loading={loading}
                                   pageCount={pageCount}/>
                    </CardBody>
                </Card>
            </Colxx>
        </Suspense>
    )
};


export default MyCustomers;
