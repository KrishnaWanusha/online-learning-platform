import Navbar from "@/components/navbar";
import Home from "@/pages/home";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

import { Routes, BrowserRouter, Route } from "react-router-dom";
import CourseAddPage from "./pages/course/add";
import AllCourses from "./pages/course/all";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import ViewCourse from "./pages/course/ViewCourse";
import { Paymentstatus } from "./pages/payment/paystatus";
import { Email } from "./pages/payment/email";
import { ToastProvider } from "react-toast-notifications";
import AuthContext, { AuthProvider } from "./contexts/auth.context";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-white">
      <BrowserRouter>
        <AuthProvider>
          <ToastProvider>
            <Navbar
              isTopOfPage={isTopOfPage}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Routes>
              <Route path="/course/add" element={<CourseAddPage />} />
              <Route path="/courses" element={<AllCourses />} />
              <Route path="/course/:id" element={<ViewCourse />} />
              <Route path="/payment/status" element={<Paymentstatus />} />
              <Route path="/payment/email" element={<Email />} />
              <Route
                path="/"
                element={
                  <>
                    <Home setSelectedPage={setSelectedPage} />
                  </>
                }
              />

              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/signup" element={<Signup />} />
            </Routes>
            <Footer />
          </ToastProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
