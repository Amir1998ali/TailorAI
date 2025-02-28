import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResumeForm from "./components/ResumeForm";
import Result from "./components/Result";
import "./App.css";

function App() {
    const [result, setResult] = useState(null);

    return (
        <div className="container">
            <Header />
            <ResumeForm setResult={setResult} />
            {result && <Result result={result} />}
            <Footer />
        </div>
    );
}

export default App;
