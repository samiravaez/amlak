import React, { useState } from "react";
import { Modal, Button } from "antd";
import { FormGroup } from "reactstrap";
import { Field } from "formik";

const MessageReadyModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                انتخاب پیام آماده
            </Button>
            <Modal
                title=" پیام آماده"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={750}
            >
                <div className="row" style={{marginRight: "2rem"}}>
                <div className="row" style={{marginLeft: "2rem"}}>
                  <h6>الگوهای پیام</h6>
                  <p> عمومی</p>
                </div>
                    <FormGroup className="d-flex w-75">
                        <Field
                            id="shadow"
                            className="form-control w-75"
                            type="text"
                            name={"mobile_unique"}
                            required="required"
                        />
                      <Button type="primary h-100">
                        سرچ
                      </Button>
                        {/* {errors.mobile_unique && touched.mobile_unique && (
                                                            <div className="invalid-feedback d-block">
                                                               {errors.mobile_unique} 
                                                            </div>
                                                        )} */}
                    </FormGroup>
                </div>
            </Modal>
        </>
    );
};

export default MessageReadyModal;
