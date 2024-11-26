import React, { Suspense } from "react";
import { MovieGenreList, MoviesGrid } from "@/app/component";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MovieChill | Truyền hình",
};

const page = () => {
  return (
    <div className="bg-_black_bg pt-20 ">
      <h2 className="text-_sidenav_bg text-2xl pl-16 max-md:pl-5">Truyền hình</h2>
      <section>
        <Suspense>
          <MovieGenreList genre="TV" />
        </Suspense>
      </section>
      <section className="bg-_black_bg">
        <Suspense>
          <MoviesGrid genre={"TV"} />
        </Suspense>
      </section>
    </div>
  );
};
export default page;
