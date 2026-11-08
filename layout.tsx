import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'DramaVerse | Hindi Dubbed Drama', description: 'Discover your next drama obsession.' };
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body>{children}</body></html>;
}
