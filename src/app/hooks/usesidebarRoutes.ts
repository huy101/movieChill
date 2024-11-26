"use client";

import { useMemo } from "react";
import { useParams, usePathname } from "next/navigation";
import { MdExplore } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";
import { BiHelpCircle, BiMessageSquareDots } from "react-icons/bi";
import { SiAirplayvideo } from "react-icons/si";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { MdSlideshow } from "react-icons/md";

import { BsPersonCircle } from "react-icons/bs";
import { useAppSelector } from "@/redux/hooks";

const useSidebarRoutes = () => {
  const user = useAppSelector((state) => state.auth);
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Khám phá",
        href: "/",
        icon: MdExplore,
        active: pathname === "/",
      },

      {
        label: "Phim",
        href: "/movie/genre",
        icon: RiMovie2Line,
        active: pathname === "/movie/genre",
      },
      {
        label: "Truyền hình",
        href: "/tv/genre",
        icon: MdSlideshow,
        active: pathname === "/tv/genre",
      },

      {
        label: "Trang cá nhân",
        href: `/profile/${user?.username}`,
        icon: BsPersonCircle,
        active: pathname === `/profile/${user?.username}`,
      },

      {
        label: "Danh sách theo dõi",
        href: "/watchlist",
        icon: pathname === "/watchlist" ? AiFillHeart : AiOutlineHeart,
        active: pathname === "/watchlist",
      },
      {
        label: "Trò chuyện",
        href: `/chat`,
        icon: CiMail,
        active: pathname === `/chat`,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname, user.isUserAuthenticated]
  );
  return routes;
};

export default useSidebarRoutes;
