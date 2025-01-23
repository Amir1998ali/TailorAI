import React, { useState } from "react";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import ResumeForm from "./src/components/ResumeForm";
import Result from "./src/components/Result";
import "./App.css";

function App() {
    const [result, setResult] = useState(null);

    return (
        <div className="App">
            <Header />
            <ResumeForm setResult={setResult} />
            {result && <Result result={result} />}
            <Footer />
        </div>
    );
}

export default App;
