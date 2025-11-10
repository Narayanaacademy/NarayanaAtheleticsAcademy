import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Narayana Athletics Academy | Running & Strength Training',
    template: '%s | Narayana Athletics Academy'
  },
  description:
    'Narayana Athletics Academy — running coaching, marathon prep, strength training and selection-specific programs across Hyderabad and online from entry level to elite players. Join India’s #1 performance academy.',
  keywords: [
    'running academy',
    'running coaching',
    'online running classes',
    'running coaching for kids',
    'marathon training India',
    'Tata Mumbai Marathon 2026',
    'strength training for runners',
    'Narayana Athletics Academy',
    'narayana athletics academy',
    'Narayana Athletics',
    'RunNarayana Academy',
    'fitness training',
    'endurance running',
    "Agnipath training",
    "SSC GD training",
    "SI training",
    "police training",
    "NDA training",
    "CDS training",
    "Navy SSR training",
    "airforce YFS training",
    "railway group D training",
    "RRB ALP training",
    "defence training",
    "athletics training",
    "track and field training",
    "sprint training",
    "middle distance running training",
    "long distance running training",
  ],
  openGraph: {
    title: 'Narayana Athletics Academy | Running & Strength Training',
    description:
      'Achieve your peak performance with a certified running & fitness coach — online or offline. Join India’s #1 performance academy. Marathon prep, selection training for Armed Forces & police',
    url: 'https://www.narayanaathletics.in', // <-- replace with your domain
    siteName: 'Narayana Athletics Academy',
    images: [
      {
        url: '/assets/image1.png',
        width: 1200,
        height: 630,
        alt: 'Narayana Athletics Academy - Running & Strength Training'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@narayanaathletics',
    creator: '@narayanaathletics'
  },
  alternates: {
    canonical: 'https://www.narayanaathleticsacademy.vercel.app'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Train with the best at Narayana Athletics Academy. Professional coaching for all levels." />
        <meta property="og:title" content="Narayana Athletics Academy" />
        <meta property="og:description" content=" Join Hyderabad’s No.1 premier athletics academy today!" />
        <meta property="og:image" content="/banner.jpg" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script dangerouslySetInnerHTML={{
  __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config','G-XXXXXXX'); // <-- replace with your tracking ID
  `
}} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
