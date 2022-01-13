import { useState } from "react";
import { Button, Menu, Popover } from "antd";
import Select from "react-select";
import ModalInfo from "../../../../../components/UI/ModalInfo";
import "jquery/dist/jquery.min";
import "bootstrap/dist/js/bootstrap.min";
import classes from "./customer.module.css";
import { SearchOutlined } from "@ant-design/icons";
const Customer = () => {
    const [showList, setShowList] = useState(false);

    const menu = (
        <Menu>
            <Menu.Item>
                <p onClick={() => alert("slam")}>ویرایش مشتری</p>
            </Menu.Item>

            <Menu.Item>
                <p onClick={() => alert("slam")}>لیست آگهی ها</p>
            </Menu.Item>

            <Menu.Item>
                <p onClick={() => alert("slam")}>مشاهده</p>
            </Menu.Item>

            <Menu.Item>
                <p onClick={() => alert("slam")}>حذف مشتری</p>
            </Menu.Item>
        </Menu>
    );

    return (
        <div>
            <div
                className={`${classes.filterContainer} d-flex justify-content-between py-3 card mb-5 align-content-center align-item-center`}
            >
                <div className="d-flex justify-content-around">
                    <Select
                        id="shadow"
                        className={`${classes.selectBoxFilter} `}
                        
                        placeholder="تعداد رکورد"
                        // value={values.dutyStatus}
                        // onChange={(e) =>
                        //     setFieldValue("dutyStatus", e.value)
                        // }
                        options={[
                            { value: 0, label: "10" },
                            { value: 1, label: "20" },
                            { value: 2, label: "30" },
                            { value: 3, label: "40" },
                        ]}
                        // onChange={(e) =>
                        //     setFieldValue("company_type", e.value)
                        // }
                    />
                    {/* {errors.company_type && touched.company_type && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.company_type}
                                                            </div> 
                                                        )}*/}

                    <Select
                        id="shadow"
                        className={classes.selectBoxFilter}
                        style={{ width: "20rem" }}
                        placeholder="استان"
                        // value={values.dutyStatus}
                        // onChange={(e) =>
                        //     setFieldValue("dutyStatus", e.value)
                        // }
                        options={[
                            { value: 0, label: "10" },
                            { value: 1, label: "20" },
                            { value: 2, label: "30" },
                            { value: 3, label: "40" },
                        ]}
                        // onChange={(e) =>
                        //     setFieldValue("company_type", e.value)
                        // }
                    />
                    {/* {errors.company_type && touched.company_type && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.company_type}
                                                            </div> 
                                                        )}*/}

                    <Select
                        id="shadow"
                        className={classes.selectBoxFilter}
                        style={{ width: "20rem" }}
                        placeholder="شهر"
                        // value={values.dutyStatus}
                        // onChange={(e) =>
                        //     setFieldValue("dutyStatus", e.value)
                        // }
                        options={[
                            { value: 0, label: "10" },
                            { value: 1, label: "20" },
                            { value: 2, label: "30" },
                            { value: 3, label: "40" },
                        ]}
                        // onChange={(e) =>
                        //     setFieldValue("company_type", e.value)
                        // }
                    />
                    {/* {errors.company_type && touched.company_type && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.company_type}
                                                            </div> 
                                                        )}*/}

                    <Select
                        id="shadow"
                        className={classes.selectBoxFilter}
                        style={{ width: "20rem" }}
                        placeholder="منطقه"
                        // value={values.dutyStatus}
                        // onChange={(e) =>
                        //     setFieldValue("dutyStatus", e.value)
                        // }
                        options={[
                            { value: 0, label: "10" },
                            { value: 1, label: "20" },
                            { value: 2, label: "30" },
                            { value: 3, label: "40" },
                        ]}
                        // onChange={(e) =>
                        //     setFieldValue("company_type", e.value)
                        // }
                    />
                    {/* {errors.company_type && touched.company_type && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.company_type}
                                                            </div> 
                                                        )}*/}

                    <Select
                        id="shadow"
                        className={classes.selectBoxFilter}
                        style={{ width: "20rem" }}
                        placeholder="محله"
                        // value={values.dutyStatus}
                        // onChange={(e) =>
                        //     setFieldValue("dutyStatus", e.value)
                        // }
                        options={[
                            { value: 0, label: "10" },
                            { value: 1, label: "20" },
                            { value: 2, label: "30" },
                            { value: 3, label: "40" },
                        ]}
                        // onChange={(e) =>
                        //     setFieldValue("company_type", e.value)
                        // }
                    />
                    {/* {errors.company_type && touched.company_type && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.company_type}
                                                            </div> 
                                                        )}*/}

               
                </div>
                <div className="d-flex justify-content-around mt-3">
                    <input
                        className={`${classes.customInput} float-right  p-2`}
                        type="text"
                        placeholder="بر اساس نام"
                        id="search"
                    />
                    <input
                        className={`${classes.customInput} float-right card p-2`}
                        type="text"
                        placeholder="شماره تلفن"
                        id="search"
                    />
                    <input
                        className={`${classes.customInput} float-right card p-2`}
                        type="text"
                        placeholder="شناسه"
                        id="search"
                    />
                         <input
                        className={`${classes.customInput} float-right card p-2`}
                        type="text"
                        placeholder="نوع مشتری"
                        id="search"
                    />
                    <Button
                        type="primary"
                        
                        size="large"
                        className="text-center"
                    >
                        <div className="d-flex ">
                            <p className="text-white">
                             جستوجو   
                            </p>
                        <SearchOutlined className="mt-1  ms-1" /> 
                        </div>
                    </Button>
                </div>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th className="col-1">شناسه</th>
                        <th className="col-2">ثبت کننده</th>
                        <th className="col-1">مشتری</th>
                        <th className="col-3">نواحی درخواستی</th>
                        <th className="col-1">نوع معامله</th>
                        <th className="col-1">نوع ملک</th>
                        <th className="col-1">نوع مشتری</th>
                        <th className="col-1">مرحله خرید</th>
                        <th className="col-1">گزینه ها</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="col border">1212</td>
                        <td scope="col border">
                            <h3>مجید محمودی</h3>
                            <p>09141401414</p>
                            <small>2021-12-20</small>
                            <small>10:02:42</small>
                        </td>
                        <td scope="col border">تقی پور</td>
                        <td scope="col border">
                            آذربایجان شرقی- تبریز - منصور آذربایجان شرقی- تبریز
                            - پاستور جدید{" "}
                        </td>
                        <td scope="col border">
                            <ModalInfo
                                title="فروش"
                                btnColor="primary"
                                content="قیمت: از 1,000,000,000 تا 1,100,000,000 تومان"
                            />
                        </td>
                        <td scope="col border">
                            <ModalInfo
                                title="آپارتمان"
                                btnColor="danger"
                                content="نوع ساخت: ---
                            طبقه: ---
                            تعداد اتاق: ---
                            تعداد کل طبقات: ---
                            تعداد واحدهای طبقه: ---"
                            />
                        </td>
                        <td scope="col border">جدی / آنی </td>
                        <td scope="col border">ثبت اطلاعات </td>
                        <td scope="col border">
                            {" "}
                            <Popover
                                placement="bottom"
                                content={menu}
                                trigger="click"
                            >
                                <Button>::</Button>
                            </Popover>
                        </td>
                    </tr>
                    <tr>
                        <td scope="col border">1212</td>
                        <td scope="col border">
                            <h3>مجید محمودی</h3>
                            <p>09141401414</p>
                            <small>2021-12-20</small>
                            <small>10:02:42</small>
                        </td>
                        <td scope="col border">تقی پور</td>
                        <td scope="col border">
                            آذربایجان شرقی- تبریز - منصور آذربایجان شرقی- تبریز
                            - پاستور جدید{" "}
                        </td>
                        <td scope="col border">
                            <ModalInfo
                                title="فروش"
                                btnColor="primary"
                                content="قیمت: از 1,000,000,000 تا 1,100,000,000 تومان"
                            />
                        </td>
                        <td scope="col border">
                            <ModalInfo
                                title="آپارتمان"
                                btnColor="danger"
                                content="نوع ساخت: ---
                            طبقه: ---
                            تعداد اتاق: ---
                            تعداد کل طبقات: ---
                            تعداد واحدهای طبقه: ---"
                            />
                        </td>
                        <td scope="col border">جدی / آنی </td>
                        <td scope="col border">ثبت اطلاعات </td>
                        <td scope="col border">
                            {" "}
                            <Popover
                                placement="bottom"
                                content={menu}
                                trigger="click"
                            >
                                <Button>::</Button>
                            </Popover>
                        </td>
                    </tr>
                    <tr>
                        <td scope="col border">1212</td>
                        <td scope="col border">
                            <h3>مجید محمودی</h3>
                            <p>09141401414</p>
                            <small>2021-12-20</small>
                            <small>10:02:42</small>
                        </td>
                        <td scope="col border">تقی پور</td>
                        <td scope="col border">
                            آذربایجان شرقی- تبریز - منصور آذربایجان شرقی- تبریز
                            - پاستور جدید{" "}
                        </td>
                        <td scope="col border">
                            <ModalInfo
                                title="فروش"
                                btnColor="primary"
                                content="قیمت: از 1,000,000,000 تا 1,100,000,000 تومان"
                            />
                        </td>
                        <td scope="col border">
                            <ModalInfo
                                title="آپارتمان"
                                btnColor="danger"
                                content="نوع ساخت: ---
                            طبقه: ---
                            تعداد اتاق: ---
                            تعداد کل طبقات: ---
                            تعداد واحدهای طبقه: ---"
                            />
                        </td>
                        <td scope="col border">جدی / آنی </td>
                        <td scope="col border">ثبت اطلاعات </td>
                        <td scope="col border">
                            {" "}
                            <Popover
                                placement="bottom"
                                content={menu}
                                trigger="click"
                            >
                                <Button>::</Button>
                            </Popover>
                        </td>
                    </tr>
                    <tr>
                        <td scope="col border">1212</td>
                        <td scope="col border">
                            <h3>مجید محمودی</h3>
                            <p>09141401414</p>
                            <small>2021-12-20</small>
                            <small>10:02:42</small>
                        </td>
                        <td scope="col border">تقی پور</td>
                        <td scope="col border">
                            آذربایجان شرقی- تبریز - منصور آذربایجان شرقی- تبریز
                            - پاستور جدید{" "}
                        </td>
                        <td scope="col border">
                            <ModalInfo
                                title="فروش"
                                btnColor="primary"
                                content="قیمت: از 1,000,000,000 تا 1,100,000,000 تومان"
                            />
                        </td>
                        <td scope="col border">
                            <ModalInfo
                                title="آپارتمان"
                                btnColor="danger"
                                content="نوع ساخت: ---
                            طبقه: ---
                            تعداد اتاق: ---
                            تعداد کل طبقات: ---
                            تعداد واحدهای طبقه: ---"
                            />
                        </td>
                        <td scope="col border">جدی / آنی </td>
                        <td scope="col border">ثبت اطلاعات </td>
                        <td scope="col border">
                            {" "}
                            <Popover
                                placement="bottom"
                                content={menu}
                                trigger="click"
                            >
                                <Button>::</Button>
                            </Popover>
                        </td>
                    </tr>
                    <tr>
                        <td scope="col border">1212</td>
                        <td scope="col border">
                            <h3>مجید محمودی</h3>
                            <p>09141401414</p>
                            <small>2021-12-20</small>
                            <small>10:02:42</small>
                        </td>
                        <td scope="col border">تقی پور</td>
                        <td scope="col border">
                            آذربایجان شرقی- تبریز - منصور آذربایجان شرقی- تبریز
                            - پاستور جدید{" "}
                        </td>
                        <td scope="col border">
                            <ModalInfo
                                title="فروش"
                                btnColor="primary"
                                content="قیمت: از 1,000,000,000 تا 1,100,000,000 تومان"
                            />
                        </td>
                        <td scope="col border">
                            <ModalInfo
                                title="آپارتمان"
                                btnColor="danger"
                                content="نوع ساخت: ---
                            طبقه: ---
                            تعداد اتاق: ---
                            تعداد کل طبقات: ---
                            تعداد واحدهای طبقه: ---"
                            />
                        </td>
                        <td scope="col border">جدی / آنی </td>
                        <td scope="col border">ثبت اطلاعات </td>
                        <td scope="col border">
                            {" "}
                            <Popover
                                placement="bottom"
                                content={menu}
                                trigger="click"
                            >
                                <Button>::</Button>
                            </Popover>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Customer;
