import React from "react";
import { Form, Button } from 'react-bootstrap';
import QuestionPanel from "./QuestionPanel";

export default class QPanelList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <section>
                    <h2>Section heading</h2>
                    <p>Section description</p>
                </section>
                <Form className="assessment-form">
                    {this.props.questionSet.set.map((query, index) => 
                        <QuestionPanel query={query} key={"query-" + index}/> 
                    )}
                    <Button variant="success" type="submit">Submit</Button>
                </Form>
            </React.Fragment>
        );
    }
};