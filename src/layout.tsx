import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav style={{ padding: 10, background: "#eee" }}>
        <Link to="/">Block</Link> |{" "}
        <Link to="/seatingPlan">SeatingPLan</Link> |{" "}
        <Link to="/course">Course</Link>
      </nav>

      <div style={{ padding: 20 }}>
        <Outlet /> 
      </div>
    </>
  );
};

export default Layout;
