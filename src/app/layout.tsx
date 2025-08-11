import "./globals.css";
import type { Metadata } from "next";
import ClientRoot from "./client-root";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Yamaji Ads Academy",
  description: "Site institucional premium.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body">
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
