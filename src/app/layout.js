import "./globals.css";

export const metadata = {
  title: "ForecastHub",
  description: "A simple web application to search and view global weather conditions and forecasts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
