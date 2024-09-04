import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Providers from "@/components/Providers";
import Header from "@/components/Header";

const font = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata = {
  title: "Frontend Mentor | Rest Countries API with Color Theme Switcher",
  description:
    "Frontend Mentor | Rest Countries API with Color Theme Switcher using Next JS",
  icons: {
    icon: "/favicon.png", // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className + "min-h-screen font-light"}>
        <Providers>
          <Header />
          <div className="w-5/6 max-w-[1280px] mx-auto">
          {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
