import type { Metadata, Viewport } from "next";
import { Poppins, Geist } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { PANIFAIR_ADDRESS, PANIFAIR_EMAIL, PANIFAIR_PHONE_DISPLAY } from "@/lib/constants";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PANIFAIR 2027 — Feira Internacional da Panificação",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PANIFAIR 2027 — Seja Expositor",
    description:
      "A maior feira internacional de panificação. Reserve seu estande e acelere seus negócios B2B.",
    images: ["/og-image.png"],
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
      logo: `${siteUrl}/logo.png`,
      description: "Feira Internacional da Panificação",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: PANIFAIR_PHONE_DISPLAY,
        contactType: "sales",
        email: PANIFAIR_EMAIL,
        availableLanguage: ["Portuguese", "English", "Spanish"],
      },
    },
    {
      "@type": "Event",
      "@id": `${siteUrl}/#event`,
      name: "PANIFAIR 2027 — Feira Internacional da Panificação",
      description:
        "A maior feira internacional de panificação da América Latina, focada em expositores B2B do setor alimentício.",
      startDate: "2027-04-15T10:00:00-03:00",
      endDate: "2027-04-17T20:00:00-03:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: PANIFAIR_ADDRESS.line,
        address: {
          "@type": "PostalAddress",
          streetAddress: PANIFAIR_ADDRESS.street,
          addressLocality: PANIFAIR_ADDRESS.city,
          addressRegion: PANIFAIR_ADDRESS.state,
          postalCode: PANIFAIR_ADDRESS.postalCode,
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
    <html lang="pt-BR" className={cn("scroll-smooth", poppins.variable, "font-sans", geist.variable)}>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#ede2c9] font-sans text-[#452816] antialiased"
      >
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
