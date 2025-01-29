import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import TextIconCursor from "@/components/trailing-cursor"
import TrailingCursor from "@/components/trailing-cursor"

const SpaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ayush Ray",
  description: "A portfolio website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en suppressHydrationWarning">
      <body className={SpaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <TrailingCursor />
        </ThemeProvider>
      </body>
    </html>
  )
}
