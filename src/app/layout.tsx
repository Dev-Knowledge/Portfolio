import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Portfolio",
    default: "Portfolio",
  },
  authors: {
    name: "Chettar",
  },

  description:
    "Cast your vote now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app",
  // openGraph: {
  //   title: "Daily Vote",
  //   description:
  //     "Cast your vote now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app.",
  //   url: "https://next-supabase-vote.vercel.app/",
  //   siteName: "Daily Vote",
  //   images: "/og.png",
  //   type: "website",
  // },
  keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-black  ${spaceGrotesk.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
