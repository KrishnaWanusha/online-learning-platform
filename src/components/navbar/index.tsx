import { useContext, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ButtonComponent from "@/components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import AuthContext, { useAuth } from "@/contexts/auth.context";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-teal-500 drop-shadow";

  const signOut = () => {
    setUser(undefined);
    navigate("/auth/login");
  };

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-20`}>
            {/* LEFT SIDE */}
            <img
              alt="logo"
              src={Logo}
              style={{ width: "150px", height: "auto" }}
            />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div
                  className={`${flexBetween} gap-8 text-lg ${
                    isTopOfPage ? "text-black" : "text-white"
                  } `}
                >
                  <Link
                    page="Home"
                    to="/"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Learn"
                    to="/courses"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="My Courses"
                    to="/"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Teach on Learnify"
                    to="/"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8 text-xl text-black`}>
                  {!user?.accessToken ? (
                    <>
                      <ButtonComponent onClick={() => navigate("/auth/login")}>
                        Sign In
                      </ButtonComponent>
                      <ButtonComponent
                        color={isTopOfPage ? undefined : "bg-white"}
                        onClick={() => navigate("/auth/signup")}
                      >
                        Sign up
                      </ButtonComponent>
                    </>
                  ) : (
                    <ButtonComponent
                      color={isTopOfPage ? undefined : "bg-white"}
                      onClick={signOut}
                    >
                      Logout
                    </ButtonComponent>
                  )}
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-black p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-teal-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              to="/"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Learn"
              to="/courses"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="My Courses"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Teach on Learnify"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
