import type { Metadata } from 'next'
import { Cinzel_Decorative, Cormorant_Garamond, Great_Vibes, Playfair_Display } from 'next/font/google'
import './globals.css'

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes'
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '600'],
  variable: '--font-playfair-display'
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['300', '400', '600'],
  variable: '--font-cormorant-garamond'
})

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-cinzel-decorative'
})

export const metadata: Metadata = {
  title: 'Michael & Mariam — Wedding Invitation',
  description: 'You are cordially invited to celebrate our special day.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="ltr">
      <body
        className={ `${ greatVibes.variable } ${ playfairDisplay.variable } ${ cormorantGaramond.variable } ${ cinzelDecorative.variable }` }
      >
        { children }
      </body>
    </html>
  )
}
