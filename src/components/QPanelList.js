import React from "react";
import { Row, Col, Form, Button } from 'react-bootstrap';
import QuestionPanel from "./QuestionPanel";
import FormNavigation from "./FormNavigation";

export default class QPanelList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form>
                <section className="assessment-form">
                    <section>
                        <h2>Section heading</h2>
                        <p>Section description</p>
                    </section>
                    <Row xs={12} className="assessment-form__content">
                        {this.props.questionSet.set.map((query, index) => 
                            <QuestionPanel set={this.props.questionSet.setName+"-"+index} query={query} key={"query-" + index}/> 
                        )}
                    </Row>
                </section>
                <section className="assessment-form__navigation">
                    <Row className="assessment-form__navigation-wrapper">
                        <Col xs={12} lg={8}>
                            <Button variant="success" type="submit">Save answers</Button>
                        </Col>
                        <Col xs={12} lg={4}>
                            <FormNavigation />
                        </Col>
                    </Row>
                </section>
            </Form>
        );
    }
};