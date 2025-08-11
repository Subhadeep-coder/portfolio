import type React from "react";
import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import portfolioData from "@/data/portfolio.json";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} - ${portfolioData.personal.title}`,
  description: portfolioData.personal.bio,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation
            name={portfolioData.personal.name}
            username={portfolioData.personal.username}
          />
          {children}
          <Footer
            personal={portfolioData.personal}
            social={portfolioData.social}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
