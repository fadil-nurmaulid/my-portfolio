import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Fadil — Portfolio",
  description: "Portfolio of Fadil, Physics Instrumentation & AI Research Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-gray-100`}
      >
        {children}
        {/* Theme toggle script (optional) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const root = document.documentElement;
                const theme = localStorage.getItem('theme');
                if(theme === 'dark') {
                  root.classList.add('dark');
                } else if(theme === 'light') {
                  root.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
