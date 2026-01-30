import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { QueryClient } from "@tanstack/react-query";
import QueryProvider from "./providers/providers";

export const metadata: Metadata = {
  title: "პრომეთე - დასაქმების პორტალი",
  description:
    "პრომეთე არის თანამედროვე დასაქმების პორტალი, სადაც მარტივად იპოვი სამუშაოს საქართველოში.",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="">
          <QueryProvider>
            <Header />
            {children}
            <Footer />
          </QueryProvider>
        </div>
      </body>
    </html>
  );
}
