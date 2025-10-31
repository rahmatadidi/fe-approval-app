import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/header";
import LeaveDetail from "./pages/employee/LeaveDetail";
import LeaveForm from "./pages/employee/LeaveForm";
import LeaveList from "./pages/employee/LeaveList";
import GMDetail from "./pages/gm/LeaveDetail";
import GMPending from "./pages/gm/PendingList";
import HeadDetail from "./pages/head/LeaveDetail";
import PendingList from "./pages/head/PendingList";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div>
      <nav className="bg-white shadow">
        <Header />
      </nav>

      <main className=" w-full">
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/leave/new"
            element={<LeaveForm />}
          />
          <Route
            path="/leave"
            element={<LeaveList />}
          />
          <Route
            path="/leave/:id"
            element={<LeaveDetail />}
          />

          <Route
            path="/approval/head"
            element={<PendingList />}
          />
          <Route
            path="/approval/head/:id"
            element={<HeadDetail />}
          />

          <Route
            path="/approval/gm"
            element={<GMPending />}
          />
          <Route
            path="/approval/gm/:id"
            element={<GMDetail />}
          />
        </Routes>
      </main>
    </div>
  );
}
