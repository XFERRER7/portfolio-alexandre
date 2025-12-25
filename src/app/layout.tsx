import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alexandre Talles - Software Engineer Portfolio',
  description:
    'Software Engineer in training with experience in web development, integrations, and software development. Creating dynamic, responsive, and scalable applications.',
  keywords: [
    'Software Engineer',
    'Web Developer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Portfolio',
  ],
  authors: [{ name: 'Alexandre Talles' }],
  creator: 'Alexandre Talles',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Alexandre Talles - Software Engineer Portfolio',
    description:
      'Software Engineer in training with experience in web development, integrations, and software development.',
    siteName: 'Alexandre Talles Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alexandre Talles - Software Engineer Portfolio',
    description:
      'Software Engineer in training with experience in web development, integrations, and software development.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.boxicons.com/3.0.6/fonts/brands/boxicons-brands.min.css"
          rel="stylesheet"
        />
        {children}
      </body>
    </html>
  );
}
