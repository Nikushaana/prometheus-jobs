import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export const metadata: Metadata = {
  title: "პრომეთე - დასაქმების პორტალი",
  description:
    "პრომეთე არის თანამედროვე დასაქმების პორტალი, სადაც მარტივად იპოვი სამუშაოს საქართველოში.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="">
          <Header /> 
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
