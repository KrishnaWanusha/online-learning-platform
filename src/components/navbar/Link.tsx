import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import { Link } from "react-router-dom";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  to?: string;
};

const NavLink = ({ page, selectedPage, setSelectedPage, to }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      className={`${
        selectedPage === lowerCasePage
          ? isTopOfPage
            ? "text-teal-500"
            : "text-black"
          : ""
      }
        hover:text-gray transition duration-500
      `}
      to={to ?? ""}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </Link>
  );
};

export default NavLink;
