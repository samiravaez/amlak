import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

const CollapseBtn = ({ title, content, btnColor }) => {
    const [collapse, setCollapse] = useState(false);

    const toggle = () => {
        setCollapse((perv) => !perv);
    };
    return (
        <div>
            <Button
                color={btnColor}
                onClick={toggle}
                style={{ marginBottom: "1rem" }}
            >
                {title}
            </Button>
            <Collapse isOpen={collapse}>
                <Card>
                    <CardBody style={{ maxWidth: "119px" }}>{content}</CardBody>
                </Card>
            </Collapse>
        </div>
    );
};

export default CollapseBtn;
