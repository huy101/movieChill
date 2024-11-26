import React, { Suspense } from "react";
import { Watchlist } from "../component";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MovieChill | Danh sách theo dõi",
};

const page = () => {
  return (
    <div className="pt-20 pl-16">
      <Suspense>
        <Watchlist />
      </Suspense>
    </div>
  );
};

export default page;
