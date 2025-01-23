import React from "react";
import { Card } from "react-bootstrap";

const Result = ({ result }) => (
    <Card className="mt-4">
        <Card.Header as="h5">Tailored Resume</Card.Header>
        <Card.Body>
            <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
        </Card.Body>
    </Card>
);

export default Result;
