import "./globals.css";

export const metadata = {
  title: "Md. Razib Hossain — Principal Engineer | Team Lead | Architect",
  description: "Portfolio of Md. Razib Hossain — Principal Engineer (Full-Stack & DevOps), Team Lead, Software Architect.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
