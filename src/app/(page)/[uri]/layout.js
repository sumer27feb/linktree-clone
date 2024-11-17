import Header from "@/components/Header";
import { Lato } from "next/font/google";
import "../../globals.css";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
