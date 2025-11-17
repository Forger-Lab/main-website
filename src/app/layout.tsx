import type { Metadata } from "next";
import { dmSans} from "./fonts";
import clsx from "clsx";
import "./globals.css";

export const metadata: Metadata = {
  title: "SolvoLab",
  description: "SolvoLab is a platform that helps you build and operate AI workers inside your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <head>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        />
      </head>
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
