import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/navigation';

export const metadata: Metadata = {
  title: "Key Law Chambers Ltd | Professional Legal Services",
  description: "Expert legal representation and consultation services. Specializing in corporate law, civil litigation, criminal defense, and more. Contact us for a free consultation.",
  keywords: ["law firm", "legal services", "lawyer", "attorney", "legal consultation", "Rwanda law"],
  authors: [{ name: "Key Law Chambers Ltd" }],
  openGraph: {
    title: "Key Law Chambers Ltd | Professional Legal Services",
    description: "Expert legal representation and consultation services.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

