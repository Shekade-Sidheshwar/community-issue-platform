import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

// User Pages
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
import MyIssues from "./pages/user/MyIssues";
import CreateIssue from "./pages/user/CreateIssue";

function App() {
  const userToken = localStorage.getItem("userToken");
  const adminToken = localStorage.getItem("adminToken");

  return (
    <Router>
      <Routes>
        {/* Landing page */}
        <Route
          path="/"
          element={
            userToken ? (
              <Navigate to="/user/my-issues" />
            ) : adminToken ? (
              <Navigate to="/admin/dashboard" />
            ) : (
              <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Community Issue Platform</h1>
                <div style={{ marginTop: "20px" }}>
                  <a
                    href="/user/login"
                    style={{
                      marginRight: "20px",
                      padding: "10px 20px",
                      backgroundColor: "#007bff",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "5px",
                    }}
                  >
                    User Login
                  </a>
                  <a
                    href="/admin/login"
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "#28a745",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "5px",
                    }}
                  >
                    Admin Login
                  </a>
                </div>
              </div>
            )
          }
        />

        {/* User Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/user/create-issue" element={<CreateIssue />} />
        <Route path="/user/my-issues" element={<MyIssues />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Catch-all */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
