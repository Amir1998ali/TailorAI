import React, { useState } from "react";
import { Form, Button, Spinner, Alert } from "react-bootstrap";

const ResumeForm = ({ setResult }) => {
    const [resume, setResume] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch("http://localhost:5000/api/tailor-resume", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ resume, jobDescription }),
            });
            const data = await response.json();
            setResult(data.tailoredResume);
        } catch (error) {
            setError("Failed to process your request. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group className="mb-3">
                <Form.Label>Resume</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={5}
                    value={resume}
                    onChange={(e) => setResume(e.target.value)}
                    placeholder="Paste your resume here"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Job Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={5}
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste the job description here"
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
                {loading ? <Spinner animation="border" size="sm" /> : "Tailor Resume"}
            </Button>
        </Form>
    );
};

export default ResumeForm;
