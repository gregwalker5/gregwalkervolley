import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Greg Walker Volley | Elite Summer Volleyball Camps',
  description: 'Elite volleyball camps led by NCAA Head Coach and USA National Team Coach. Satellite camps at your school or Nike Camp at Smith College. 24 hours of championship-level training.',
  keywords: 'volleyball camp, satellite camp, summer camp, Greg Walker, Smith College, Nike volleyball, coaching clinic',
  openGraph: {
    title: 'Greg Walker Volley | Elite Summer Volleyball Camps',
    description: 'Train Like a Champion. Compete Like a Pro.',
    type: 'website',
    url: 'https://www.gregwalkervolley.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
