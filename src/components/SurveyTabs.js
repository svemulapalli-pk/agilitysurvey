import React from "react";
import { Row, Col, Nav, Tab } from 'react-bootstrap';
import RegisterForm from "../components/RegisterForm";

import data from '../query-data.json';
import QPanelList from "./QPanelList";

export default class SurveyTabs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="Register">
                <Row xs={12}>
                    <Col xs={5} lg={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="Register">Your Profile</Nav.Link>
                            </Nav.Item>
                            {data.questions.map((set, index) =>  
                                <Nav.Item key={"tab-" + index}>
                                    <Nav.Link eventKey={"set-" + index}>
                                        {Object.keys(set)}
                                    </Nav.Link>
                                </Nav.Item>
                            )}
                        </Nav>
                    </Col>
                    <Col xs={7} lg={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="Register">
                                <RegisterForm />
                            </Tab.Pane>
                            {data.questions.map((set, index) =>  
                                <Tab.Pane key={"tab-content-" + index} eventKey={"set-" + index} >
                                    <QPanelList questionSet={set} />
                                </Tab.Pane>
                            )}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
    }
};
