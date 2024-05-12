import Navbar from "@/components/navbar";
import Home from "@/pages/home";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

import { Routes, BrowserRouter, Route } from "react-router-dom";
import CourseAddPage from "./pages/course/add";
import AllCourses from "./pages/course/AllCourses";
import Login from "./pages/auth/login";

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

  const LoginContainer = (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Login />} />
    </Routes>
  );

  const DefaultContainer = (
    <>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Routes>
        <Route path="/course/add" element={<CourseAddPage />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route
          path="/"
          element={
            <>
              <Home setSelectedPage={setSelectedPage} />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );

  return (
    <div className="app bg-white">
      <BrowserRouter>
        <Routes>
          <Route path="/auth/*" element={LoginContainer} />
          <Route path="/" element={DefaultContainer} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
