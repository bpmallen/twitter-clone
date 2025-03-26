import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/Login/LoginPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import HomePage from "./pages/home/HomePage";
import Sidebar from "./components/common/Sidebar";
import RightPanel from "./components/common/RightPanel";
import NotificationPage from "./pages/notification/NotificationPage";

function App() {
  return (
    <>
      <div className="flex max-w-6xl mx-auto">
        <Sidebar /> {/* Common component as its not wrapped in Routes */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/notifications" element={<NotificationPage />}></Route>
        </Routes>
        <RightPanel /> {/* Another common/shared component on all pages */}
      </div>
    </>
  );
}

export default App;
