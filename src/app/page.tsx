import { Metadata } from "next";
import { Suspense } from "react";
import {
  ContinueWatch,
  NowPlaying,
  TrendingMovies,
  TrendingPerson,
} from "./component";
import CarouselContainer from "./component/carousel/CarouselContainer";
import OnlineUsers from "./component/users/OnlineUsers";
import { Apis } from "./tmdbApi/TmdbApi";

export const metadata: Metadata = {
  title: "MovieChill",
};

async function getTrendingList() {
  const res = await fetch(
    `${process.env.BASE_URL}/3/trending/all/day?api_key=${process.env.API_KEY}&language=${process.env.NEXT_PUBLIC_LAN}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const res = await getTrendingList();
  const data: getTrendingListResponse[] = res.results;
  const trendingPerson = Apis.TrendingPerson();
  return (
    <div className="bg-_black_bg ">
      <section className=" relative gap-7  max-lg:flex-col  flex  w-full  max-lg:h-fit  ">
        {data ? <CarouselContainer data={data} /> : <div>Không có dữ liệu</div>}
      </section>
      <section className="mt-8">
        <div>
          <ContinueWatch />
        </div>

        <Suspense fallback={<div>Đang tải...</div>}>
          <OnlineUsers />
        </Suspense>
        <div>
          <NowPlaying />
        </div>
        <div>
          <Suspense fallback={<div>Đang tải...</div>}>
            <TrendingPerson data={trendingPerson} />
          </Suspense>
        </div>
        <div>
          <TrendingMovies />
        </div>
      </section>
    </div>
  );
}
