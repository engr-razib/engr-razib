import "./globals.css";

import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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
        url: "https://razib.vercel.app/og-image.jpg",
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
    images: ["https://razib.vercel.app/twitter-image.jpg"],
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

        {/* Favicon */}
        <link rel="icon" type="image/jpeg" href="/razib.jpg" />
        <meta name="google-site-verification" content="Tz0xevGh1obZ20KVcwg57lLGq0MdTmVGI_oyQvGa87Y" />


        {/* Google Tag Manager */}
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NQFG9FQK');</script>
        {/* <!-- End Google Tag Manager --> */}


      </head>
       <body>
        {children}



        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NQFG9FQK"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
      </body>
    </html>
  );
}
