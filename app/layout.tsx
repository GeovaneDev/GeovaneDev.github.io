import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({ 
  subsets: ["latin"],
  display: 'swap',
  adjustFontFallback: true
});

export const metadata: Metadata = {
  title: "GeovaneSec - Desenvolvedor Web | Projetos Self-Hosted e Open-Source",
  description: "Portfólio profissional de Geovane, desenvolvedor web especializado em projetos self-hosted e open-source. Conheça meus projetos, habilidades técnicas e experiência em desenvolvimento web seguro.",
  keywords: "desenvolvedor web, self-hosted, open-source, portfolio, programação, desenvolvimento, segurança, full-stack, frontend, backend, DevOps, cybersecurity",
  authors: [{ name: "GeovaneSec", url: "https://github.com/GeovaneSec" }],
  creator: "GeovaneSec",
  publisher: "GeovaneSec",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://geovanebr.me',
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://geovanebr.me",
    title: "GeovaneSec - Desenvolvedor Web | Projetos Self-Hosted e Open-Source",
    description: "Portfólio profissional de Geovane, desenvolvedor web especializado em projetos self-hosted e open-source. Conheça meus projetos, habilidades técnicas e experiência em desenvolvimento web seguro.",
    siteName: "GeovaneSec Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    site: "GeovaneSec",
    creator: "GeovaneSec",
    title: "GeovaneSec - Desenvolvedor Web | Projetos Self-Hosted e Open-Source",
    description: "Portfólio profissional de Geovane, desenvolvedor web especializado em projetos self-hosted e open-source.",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    other: {
      me: ['https://github.com/GeovaneSec']
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${firaCode.className} bg-[#0a0a0a] text-[#e0e0e0] min-h-screen flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}