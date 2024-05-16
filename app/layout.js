import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <Header />
        <div className="min-h-16 lg:mx-16 md:mx-10 flex-grow"> {children}</div>
        <Footer />
      </body>
    </html>
  );
}
