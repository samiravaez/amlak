import React, { useState } from "react";
import { Modal } from "antd";
import { Button } from "reactstrap";

const ModalInfo = ({ content, title, btnColor }) => {
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
            <Button
                color={btnColor}
                onClick={showModal}
                style={{ marginBottom: "1rem" }}
            >
                {title}
            </Button>
            <Modal
                title={title}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={
                    <div>
                        <Button color="danger" onClick={handleCancel}>بستن</Button>
                    </div>
                }
            >
                <p> {content}</p>
            </Modal>
        </>
    );
};

export default ModalInfo;
