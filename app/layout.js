import { Nunito } from "next/font/google";
import "@/styles/bootstrap.min.css";
import "@/styles/animate.min.css";
import "@/styles/boxicons.min.css";
import "@/styles/meanmenu.min.css";
import "@/styles/flaticon.css";
import "@/styles/Preloader.css";
import "react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-tabs/style/react-tabs.css";
import "react-18-image-lightbox/style.css";
import "swiper/css";
import "swiper/css/bundle";
// Global Styles
import "@/styles/style.css";
// Global Responsive Styles
import "@/styles/responsive.css";
// Global Dashboard Styles
import "@/styles/dashboard.css";
// Dark Mode Styles
import "@/styles/darkmode.css";
import { ThemeProvider } from "@/components/theme-provider";
import TosterProvider from "@/providers/TosterProvider";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/_App/Footer";
import { getCurrentUser } from "@/actions/getCurrentUser";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://mikdantech.local"),
  alternates: {
    canonical: "/",
  },
  title: {
    template:
      "%s | Blockchained Snipers - React Next.js Education LMS Template",
    default: "Blockchained Snipers",
  },
  keywords: [
    "Online coding courses",
    "Programming tutorials",
    "Learn Python online",
    "Digital marketing classes",
    "Web development training",
    "SEO best practices",
    "Graphic design workshops",
    "Data science online courses",
    "Online learning platform",
    "Expert-led instruction",
  ],
  description:
    "Explore a world of knowledge with our online tutorial platform. Master coding languages, delve into effective marketing strategies, and elevate your skills in diverse courses. Join expert-led sessions for practical learning. Enroll now for a brighter future!",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  openGraph: {
    title:
      "Blockchained Snipers | Unlock Your Potential with Expert-Led Online Courses | Learn Coding, Marketing, and More!",
    url: "https://mikdantech.local",
    images: [
      "https://res.cloudinary.com/dev-empty/image/upload/v1707717581/znronmo1rj2gexfrmnmy.jpg",
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({ children }) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={nunito.className} suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TosterProvider />
          <Navbar currentUser={currentUser} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
