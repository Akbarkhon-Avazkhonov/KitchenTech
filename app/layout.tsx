import type { Metadata } from 'next'
import './globals.css'
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: 'KitchenTech',
  description: 'Discover the latest kitchen gadgets and tools to enhance your cooking experience.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-NK3JNCWX" />
      <body>{children}</body>
    </html>
  )
}
