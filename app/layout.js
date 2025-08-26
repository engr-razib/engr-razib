import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Md. Razib Hossain — Principal Engineer | Team Lead | Architect",
  description: "Portfolio of Md. Razib Hossain — Principal Engineer (Full-Stack & DevOps), Team Lead, Software Architect.",
  authors: [{ name: "Md. Razib Hossain" }],
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Laravel",
    "DevOps",
    "Cloud Computing",
    "AWS",
    "Docker",
    "Kubernetes",
    "Software Architect",
    "Team Lead",
    "Portfolio"
  ].join(", "),
  openGraph: {
    title: "Md. Razib Hossain — Principal Engineer | Team Lead | Architect",
    description: "Portfolio of Md. Razib Hossain — Full-Stack & DevOps Expert, Team Lead, Software Architect.",
    url: "https://razib.vercel.app",
    siteName: "Md. Razib Hossain Portfolio",
    images: [
      {
        url: "https://razib.vercel.app/razib.jpg",
        width: 1200,
        height: 630,
        alt: "Md. Razib Hossain Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Razib Hossain — Principal Engineer | Team Lead | Architect",
    description: "Portfolio of Md. Razib Hossain — Full-Stack & DevOps Expert, Team Lead, Software Architect.",
    images: ["https://razib.vercel.app/razib.jpg"],
  },
  alternates: {
    canonical: "https://razib.vercel.app",
  },
};

export default function RootLayout({ children }) {
  const skills = [
    "React",
    "Next.js",
    "Redux",
    "Context API",
    "Laravel",
    "PHP",
    "MySQL",
    "DevOps",
    "Cloud Computing",
    "AWS",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Full-Stack Development",
  ];

  const services = [
    "Web Application Development",
    "Full-Stack Development",
    "Cloud & DevOps Solutions",
    "API Development & Integration",
    "Frontend Development with React/Next.js",
    "Backend Development with Laravel/PHP",
  ];

  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Md. Razib Hossain",
              url: "https://razib.vercel.app",
              sameAs: [
                "https://github.com/engr-razib",
                "https://www.linkedin.com/in/engr-razib",
              ],
              jobTitle: "Full-Stack Developer & DevOps Expert",
              skills: skills.join(", "),
              makesOffer: services.map((service) => ({
                "@type": "Service",
                name: service,
              })),
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
