import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faculties Online – Expert Tutor & Mentor Marketplace",
  description:
    "Find expert tutors for any subject. Connect with verified mentors for online, offline, or home tuition. Post your learning requirement and let top tutors reach you.",
  keywords:
    "tutors, online tutoring, home tuition, find tutor, tutor marketplace, mentorship platform",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Faculties Online – Expert Tutor & Mentor Marketplace",
    description:
      "Connect with expert tutors for personalized learning. Online, offline, and home tuition available.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
