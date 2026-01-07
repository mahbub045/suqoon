import localFont from "next/font/local";
import "./globals.css";
import TapTop from "@/Components/Layout/TapTop/TapTop";
import { Metadata } from "next";

const theSeasons = localFont({
  src: [
    {
      path: "../public/fonts/theseasons/Fontspring-DEMO-theseasons-lt.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/theseasons/Fontspring-DEMO-theseasons-ltit.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/theseasons/Fontspring-DEMO-theseasons-reg.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/theseasons/Fontspring-DEMO-theseasons-it.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/theseasons/Fontspring-DEMO-theseasons-bd.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/theseasons/Fontspring-DEMO-theseasons-bdit.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-theseasons",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SUQOON",
  description: "SUQOON is a leading land development company specializing in real estate investment opportunities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
        suppressHydrationWarning={true} 
        className={`${theSeasons.variable} antialiased`}
      >
        {children}
        <TapTop />
      </body>
    </html>
  );
}
