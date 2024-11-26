export const MoviesgenresList = [
  { id: 28, name: "Hành động" },
  { id: 12, name: "Phiêu lưu" },
  { id: 16, name: "Hoạt hình" },
  { id: 35, name: "Hài hước" },
  { id: 80, name: "Tội phạm" },
  { id: 99, name: "Phim tài liệu" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Gia đình" },
  { id: 14, name: "Viễn tưởng" },
  { id: 36, name: "Lịch sử" },
  { id: 27, name: "Kinh dị" },
  { id: 10402, name: "Âm nhạc" },
  { id: 9648, name: "Tâm lý" },
  { id: 10749, name: "Lãng mạn" },
  { id: 878, name: "Khoa học viễn tưởng" },
  { id: 10770, name: "Phim truyền hình" },
  { id: 53, name: "Giật gân" },
  { id: 10752, name: "Chiến tranh" },
  { id: 37, name: "Miền tây" },
];

export const TvgenresList = [
  { id: 10759, name: "Hành động & Phiêu lưu" },
  { id: 16, name: "Hoạt hình" },
  { id: 35, name: "Hài hước" },
  { id: 80, name: "Tội phạm" },
  { id: 99, name: "Phim tài liệu" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Gia đình" },
  { id: 10762, name: "Trẻ em" },
  { id: 9648, name: "Tâm lý" },
  { id: 10763, name: "Tin tức" },
  { id: 10764, name: "Thực tế" },
  { id: 10765, name: "Khoa học viễn tưởng và kỳ ảo" },
  { id: 10766, name: "Dài tập" },
  { id: 10767, name: "Trò chuyện" },
  { id: 10768, name: "Chiến tranh & Chính trị" },
  { id: 37, name: "Miền tây" },
];

export const GenreList = [
  { label: "Hành động", value: "Action" },
  { label: "Phiêu lưu", value: "Adventure" },
  { label: "Hoạt hình", value: "Animation" },
  { label: "Hài kịch", value: "Comedy" },
  { label: "Tội phạm", value: "Crime" },
  { label: "Tài liệu", value: "Documentary" },
  { label: "Drama", value: "Drama" },
  { label: "Gia đình", value: "Family" },
  { label: "Viễn tưởng", value: "Fantasy" },
  { label: "Lịch sử", value: "History" },
  { label: "Kinh dị", value: "Horror" },
  { label: "Âm nhạc", value: "Music" },
  { label: "Tâm lý", value: "Mystery" },
  { label: "Lãng mạn", value: "Romance" },
  { label: "Khoa học viễn tưởng", value: "Science Fiction" },
  { label: "Phim truyền hình", value: "TV Movie" },
  { label: "Giật gân", value: "Thriller" },
  { label: "Chiến tranh", value: "War" },
  { label: "Miền Tây", value: "Western" },
];

export const MoviesTab = [
  {
    title: "Phim đang thịnh hành",
    tab: "trendingmovie",
    genre: "MOVIE",
  },
  {
    title: "Phim đang chiếu",
    tab: "nowplayingmovie",
    genre: "MOVIE",
  },
  {
    title: "Phim được đánh giá cao",
    tab: "topratedmovie",
    genre: "MOVIE",
  },
  {
    title: "Phim phổ biến",
    tab: "popularmovie",
    genre: "MOVIE",
  },
  {
    title: "Phim sắp chiếu",
    tab: "upcomingmovie",
    genre: "MOVIE",
  },
];

export const TvTab = [
  {
    title: "Chương trình đang thịnh hành",
    tab: "trendingtv",
    genre: "TV",
  },
  {
    title: "Chương trình chiếu hôm nay",
    tab: "airingtoday",
    genre: "TV",
  },
  {
    title: "Đang phát sóng",
    tab: "ontheair",
    genre: "TV",
  },
  {
    title: "Chương trình phổ biến",
    tab: "populartv",
    genre: "TV",
  },
  {
    title: "Chương trình được đánh giá cao",
    tab: "topratedtv",
    genre: "TV",
  },
];

export const MoviesgenresObject: {
  [key: number]: string;
} = {
  28: "Hành động",
  12: "Phiêu lưu",
  16: "Hoạt hình",
  35: "Hài kịch",
  80: "Tội phạm",
  99: "Tài liệu",
  18: "Drama",
  10751: "Gia đình",
  14: "Fantasy",
  36: "Lịch sử",
  27: "Kinh dị",
  10402: "Âm nhạc",
  9648: "Tâm lý",
  10749: "Lãng mạn",
  878: "Khoa học viễn tưởng",
  10770: "Phim truyền hình",
  53: "Giật gân",
  10752: "Chiến tranh",
  37: "Miền Tây",
};

export const TvgenresObject: {
  [key: number]: string;
} = {
  10759: "Hành động & Phiêu lưu",
  16: "Hoạt hình",
  35: "Hài kịch",
  80: "Tội phạm",
  99: "Tài liệu",
  18: "Drama",
  10751: "Gia đình",
  10762: "Trẻ em",
  9648: "Tâm lý",
  10763: "Tin tức",
  10764: "Thực tế",
  10765: "Khoa học viễn tưởng & Fantasy",
  10766: "Dài tập",
  10767: "Talk show",
  10768: "Chiến tranh & Chính trị",
  37: "Miền Tây",
};
