
import {DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown, UncontrolledAlert} from "reactstrap";
import React, {useEffect, useState} from "react";
import { Menu, Dropdown, Button, Space } from "antd";
import { ListGroup, ListGroupItem } from "reactstrap";

import {fetchActivities,deleteActivity} from "../../../../../services/businessServices"
import TaskModal from "./modal/TaskModal/TaskModal";
import CallModal from "./modal/CallModal/CallModal";
import MeetingModal from "./modal/MeetingModal/MeetingModal";
import EmailModal from "./modal/EmailModal/EmailModal";
import SmsModal from "./modal/SmsModal/SmsModal";
import TableAjax from "../../../../../components/TableAjax";
import NotificationManager from "../../../../../components/common/react-notifications/NotificationManager";


const Activities = () => {
    const [showList, setShowList] = useState(false);
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [pageCount, setPageCount] = React.useState(0);

    // useEffect(() => {
    //
    // },[]);
   //

    const Actions = ({id}) => {
        return (
            <UncontrolledButtonDropdown tag={'a'}>
                <DropdownToggle color="secondary" outline>
                    <i className={'simple-icon-options-vertical'} />
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                        ویرایش
                    </DropdownItem>
                    <DropdownItem onClick={() => onDelete({id})}>
                        حذف
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
        );
    };

    const cols = React.useMemo(
        () => [
            // {
            //   Header: 'نام و نام خانوادگی',
            //   cellClass: 'list-item-heading',
            //   Cell: ({row}) => row.original.first_name + ' ' + row.original.last_name,
            // },
            {
                Header: 'عنوان',
                accessor: 'topic',
                cellClass: 'text-muted',
                Cell: (props) => <>{props.value}</>,
            },
            // {
            //     Header: 'ایمیل',
            //     accessor: 'email',
            //     cellClass: 'text-muted',
            //     Cell: (props) => <>{props.value}</>,
            // },
            // {
            //     Header: 'دسته',
            //     accessor: 'category.title',
            //     cellClass: 'list-item-heading',
            //     Cell: (props) => <span className="product-quantity">{props.row.original.category.title}</span>,
            // },

            {
                Header: 'نوع فعالیت',
                accessor: 'poly_relation_name',
                cellClass: 'text-muted',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'توضیحات',
                accessor: 'description',
                cellClass: 'text-muted',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'گزینه ها',
                accessor: '_id',
                cellClass: 'text-muted',
                Cell: (props) => (<Actions id={props.value}/>),
            },
        ],
        []
    );

    const fetchData = async({pageSize, pageIndex}) => {
        fetchActivities({pageSize, pageIndex}).then((response) => {
            setData(response.data.data)
            setPageCount(response.data.last_page)
            return response
        })
    }

    const onDelete = async({id}) => {
        deleteActivity({id}).then((response) => {
            if (response.status == true) {
                NotificationManager.success(response.data.message);
            } else {
                NotificationManager.error(response.data.message);
            }
        })
    }

    // const fetchData = (async ({pageSize, pageIndex}) => {
    //     console.log('hi')
    //         await axios.get(`api/admin/activities?page=${pageIndex + 1}&per_page=${pageSize}`)
    //             .then((res) => {
    //
    //                 setData(res.data.data)
    //                 setPageCount(res.data.last_page)
    //                 return res
    //             })
    //             .catch((error) => error)
    //     });


    const menu = (
        <Menu>
            <Menu.Item>
                <TaskModal />
            </Menu.Item>

            <Menu.Item>
                <CallModal />
            </Menu.Item>

            <Menu.Item>
                <MeetingModal />
            </Menu.Item>

            <Menu.Item>
                <EmailModal />
            </Menu.Item>

            <Menu.Item>
                <SmsModal />
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            {showList && (
                <ListGroup
                    style={{
                        marginTop: "-3rem",
                        marginRight: "-2.7rem",
                        position: "absolute",
                        zIndex: "10",
                    }}
                    className="w-25"
                >
                    <ListGroupItem className="d-flex">
                        <input
                            className="ml-3"
                            type="text"
                            placeholder="جستوجو"
                        />
                        <h2
                            onClick={() => setShowList(false)}
                            className="cursor ml-5"
                        >
                            X
                        </h2>
                    </ListGroupItem>
                    <ListGroupItem disabled href="#" tag="a">
                        <h6 className="text-center ml-2">نماهای عمومی</h6>
                    </ListGroupItem>
                    <ListGroupItem href="#" tag="a">
                        تماس های من
                    </ListGroupItem>
                    <ListGroupItem href="#" tag="a">
                        جلسات من
                    </ListGroupItem>
                    <ListGroupItem href="#" tag="a">
                        فعالیت های من
                    </ListGroupItem>
                    <ListGroupItem href="#" tag="a">
                        همه تماس های من
                    </ListGroupItem>
                    <ListGroupItem href="#" tag="a">
                        همه جلسات
                    </ListGroupItem>
                    <ListGroupItem href="#" tag="a">
                        همه فعالیت ها
                    </ListGroupItem>
                    <ListGroupItem href="#" tag="a">
                        همه وظایف
                    </ListGroupItem>
                    <ListGroupItem href="#" tag="a">
                        همه پیغام ها
                    </ListGroupItem>
                    <ListGroupItem href="#" tag="a">
                        وظایف امروز
                    </ListGroupItem>
                    <ListGroupItem href="#" tag="a">
                        وظایف من
                    </ListGroupItem>
                </ListGroup>
            )}
            <div style={{ zIndex: "-10" }}>
                <UncontrolledAlert color="info">
                    <h4 className="alert-heading">Well done!</h4>
                    <p>
                        Aww yeah, you successfully read this important alert
                        message. This example text is going timport {useState}{" "}
                        from 'react'; o run a bit longer so that you can see how
                        spacing within an alert works with this kind of content.
                    </p>
                    <hr />
                    <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to
                        keep things nice and tidy.
                    </p>
                </UncontrolledAlert>
                <div className="card">
                    <div className="card-body row">
                        <div className="card col-2">
                            <div
                                className="cursor mt-2 ml-3"
                                onClick={() => setShowList(!showList)}
                            >
                                فیلتر
                            </div>
                        </div>
                        <div className="col-4 row">
                            <div className="col-3 mt-2 cursor">
                                <p>بازخوانی</p>
                            </div>

                            <div className="col-3 mt-0">
                                <Dropdown
                                    overlay={menu}
                                    placement="bottomCenter"
                                >
                                    <Button type="text">جدید</Button>
                                </Dropdown>
                            </div>

                            <div className="col-3 mt-2 cursor">
                                <p>حذف</p>
                            </div>
                            <div className="col-3 mt-2 cursor">
                                <p>...</p>
                            </div>
                        </div>
                        <div className="col-6 ">
                            <input
                                className="float-right card p-2"
                                type="text"
                                placeholder="جست وجو"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="row card">
                    {/*<div className="col-1">*/}

                    {/*</div>*/}
                    {/*<div className="col-4">*/}

                    {/*</div>*/}
                    <TableAjax columns={cols} data={data} fetchData={fetchData} loading={loading} pageCount={pageCount}/>
                </div>
            </div>
        </>
    );
};

export default Activities;
