import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MovieChill | Phim, Truyền hình và Trò chuyện",
    short_name: "MovieChill",
    description:
      "Hơn cả một trang web xem phim",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/src/app/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
