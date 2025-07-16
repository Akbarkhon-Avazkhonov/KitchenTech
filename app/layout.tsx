import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
