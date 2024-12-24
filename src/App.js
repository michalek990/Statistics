import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Charts from "./components/Charts/Charts";
import ContactPage from "./components/Contact/Contact";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<h1 style={{ textAlign: "center", margin: "20px" }}>Witamy w aplikacji</h1>} />
                <Route path="/charts" element={<Charts />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
}

export default App;
