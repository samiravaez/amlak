import {
    // Dropdown,
    // DropdownItem,
    // DropdownMenu,
    // DropdownToggle,
    UncontrolledAlert,
} from "reactstrap";

import { useState } from "react";
import { Menu, Dropdown, Button, Space } from "antd";
import { ListGroup, ListGroupItem } from "reactstrap";

import TaskModal from "./modal/TaskModal/TaskModal";
import CallModal from "./modal/CallModal/CallModal";
import MeetingModal from "./modal/MeetingModal/MeetingModal";
import EmailModal from "./modal/EmailModal/EmailModal";
import SmsModal from "./modal/SmsModal/SmsModal";

const Activities = () => {
    const [showList, setShowList] = useState(false);

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
                <div class="card">
                    <div class="card-body row">
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
                                placeholder="جستوجو"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="row card">
                    <div className="col-1">

                    </div>
                    <div className="col-4">
                        
                    </div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-4"></div>
                </div>
            </div>
        </>
    );
};

export default Activities;
