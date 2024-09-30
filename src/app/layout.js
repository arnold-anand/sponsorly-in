import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Sponsorly",
  description: "Effortless Collaboration For Extraordinary Events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
