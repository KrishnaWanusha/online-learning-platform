import Navbar from "@/components/navbar";
import Home from "@/pages/home";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

import { Routes, BrowserRouter, Route } from "react-router-dom";
import ContactUs from "./scenes/contactUs";
import CourseAddPage from "./pages/course/add";

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
    <div className="app bg-gray-20">
      <BrowserRouter>
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Routes>
          <Route path="/course/add" element={<CourseAddPage />} />
          <Route
            path="/"
            element={
              <>
                <Home setSelectedPage={setSelectedPage} />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
