import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'optional',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'optional',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://izzat-portfolio.vercel.app'),
  title: {
    default: 'Izzat Baloghlanov | Frontend Developer & React Specialist',
    template: '%s | Izzat Baloghlanov',
  },
  description: 'Izzat Baloghlanov - Frontend Developer specializing in React, TypeScript, Next.js, Tailwind CSS, and React Native. Building scalable SaaS dashboards and premium web applications.',
  keywords: ['Izzat Baloghlanov', 'Frontend Developer', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'React Native', 'SaaS Development', 'Azerbaijan', 'Freelance Developer'],
  authors: [{ name: 'Izzat Baloghlanov', url: 'https://izzat-portfolio.vercel.app' }],
  creator: 'Izzat Baloghlanov',
  publisher: 'Izzat Baloghlanov',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://izzat-portfolio.vercel.app',
    siteName: 'Izzat Baloghlanov Portfolio',
    title: 'Izzat Baloghlanov | Frontend Developer & React Specialist',
    description: 'Building scalable React applications and SaaS dashboards with TypeScript and Next.js.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Izzat Baloghlanov - Frontend Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Izzat Baloghlanov | Frontend Developer',
    description: 'React, TypeScript, Next.js Specialist',
    images: ['/opengraph-image.png'],
  },
  alternates: {
    canonical: 'https://izzat-portfolio.vercel.app',
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

export const viewport = {
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Izzat Baloghlanov',
    url: 'https://izzat-portfolio.vercel.app',
    jobTitle: 'Frontend Developer',
    email: 'mailto:baloglanovizzet@gmail.com',
    sameAs: [
      'https://github.com/izzatbaloghlanov',
      'https://linkedin.com/in/izzatbaloghlanov',
    ],
    knowsAbout: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'React Native', 'SaaS Development'],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}