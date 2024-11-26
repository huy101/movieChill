import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/context/GlobalProvider";
import Sidebar from "./component/sidenav/Sidebar";
import ProgressBar from "./component/progressbar/ProgressBar";
const inter = Inter({ subsets: ["latin"] });
import Analytics from "@/context/Analytics";

export const metadata = {
  title: "MovieChill",
  description:
    "Hơn cả một trang web xem phim",
  applicationName: "streamland",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark",
  keywords: [
    "MovieChill ",
    "MovieChill phim ",
    "MovieChill truyền hình",
  ],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div>
            <ProgressBar />
            <Sidebar />
            <section className="pl-56 max-md:pl-0">
              {children}
              <Analytics />
            </section>
          </div>
        </Providers>
      </body>
    </html>
  );
}
