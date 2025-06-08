import '../styles/index.css';
export const metadata = {
  title: "Sponsorly",
  description: "Effortless Collaboration For Extraordinary Events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
