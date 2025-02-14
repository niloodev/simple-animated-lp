import type { Metadata } from "next";
import { DM_Sans, Montserrat, Poppins } from "next/font/google";
import StyledComponentsRegistry from "@/utils/styled-components/registry";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["700"],
});

const dmsans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Simple Animated Landing Page",
  description:
    "Animated Landing Page created for the Cheesecake Dev Challenge! Created in 13/02/2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} ${dmsans.variable}`}
      >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>{" "}
      </body>
    </html>
  );
}
