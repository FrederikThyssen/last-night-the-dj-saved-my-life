import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DJ Max — DJ Professionnel Paris & Île-de-France",
  description:
    "DJ professionnel pour mariages, anniversaires, soirées privées et événements d'entreprise. Disponible en Île-de-France et toute la France. Devis gratuit.",
  keywords: ["DJ mariage", "DJ anniversaire", "DJ Paris", "DJ professionnel", "soirée privée", "DJ événement entreprise"],
  openGraph: {
    title: "DJ Max — DJ Professionnel Paris & Île-de-France",
    description: "DJ professionnel pour tous vos événements. Mariages, anniversaires, soirées, événements pro.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',t);})();`,
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
