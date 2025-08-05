import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Block from "./pages/block";
import SeatingPlan from "./pages/seatingPlan";
import Course from "./pages/course";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Block/>} /> {/* for "/" */}
          <Route path="seatingPLan" element={<SeatingPlan />} />
          <Route path="course" element={<Course />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
