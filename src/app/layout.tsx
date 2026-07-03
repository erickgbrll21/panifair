import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { GsapAnimations } from "@/components/layout/GsapAnimations";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const siteUrl = "https://panifair.com.br";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PANIFAIR 2027 — Feira Internacional da Panificação | Seja Expositor",
    template: "%s | PANIFAIR 2027",
  },
  description:
    "Reserve seu estande na PANIFAIR 2027, a maior feira internacional de panificação da América Latina. Conecte-se com 25.000+ visitantes qualificados e aceleradores de negócios B2B.",
  keywords: [
    "PANIFAIR 2027",
    "feira de panificação",
    "expositor feira panificação",
    "estande feira alimentícia",
    "feira internacional panificação",
    "B2B panificação",
    "fornecedores panificação",
    "equipamentos panificação",
  ],
  authors: [{ name: "PANIFAIR" }],
  creator: "PANIFAIR",
  publisher: "PANIFAIR",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "PANIFAIR 2027",
    title: "PANIFAIR 2027 — A maior oportunidade para expositores do setor",
    description:
      "Reservar estande na PANIFAIR 2027. 25.000+ visitantes qualificados, 450+ expositores, 35+ países. Garanta sua presença.",
    images: [
      {
        url: "/logo.svg",
        width: 549,
        height: 203,
        alt: "PANIFAIR 2027 — Feira Internacional da Panificação",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PANIFAIR 2027 — Seja Expositor",
    description:
      "A maior feira internacional de panificação. Reserve seu estande e acelere seus negócios B2B.",
    images: ["/logo.svg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "business",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "PANIFAIR",
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      description: "Feira Internacional da Panificação",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-11-4002-8922",
        contactType: "sales",
        email: "expositores@panifair.com.br",
        availableLanguage: ["Portuguese", "English", "Spanish"],
      },
    },
    {
      "@type": "Event",
      "@id": `${siteUrl}/#event`,
      name: "PANIFAIR 2027 — Feira Internacional da Panificação",
      description:
        "A maior feira internacional de panificação da América Latina, focada em expositores B2B do setor alimentício.",
      startDate: "2027-08-18T10:00:00-03:00",
      endDate: "2027-08-21T20:00:00-03:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "São Paulo Expo",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rodovia dos Imigrantes, Km 1,5",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          addressCountry: "BR",
        },
      },
      organizer: {
        "@id": `${siteUrl}/#organization`,
      },
      offers: {
        "@type": "Offer",
        name: "Reserva de Estande Expositor",
        url: `${siteUrl}/contato`,
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "PANIFAIR 2027",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#ede2c9] font-sans text-[#452816] antialiased">
        <ScrollProgress />
        <GsapAnimations />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
