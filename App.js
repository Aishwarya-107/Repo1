import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ForecastPage from "./pages/ForecastPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/forecast" element={<ForecastPage />} />
            </Routes>
        </Router>
    );
}

export default App;