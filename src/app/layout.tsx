import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/navbar";
import FooterWithSocialLinks from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <FooterWithSocialLinks />
      </body>
    </html>
  );
}
