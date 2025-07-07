import React from 'react'
import type { Metadata } from 'next'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import '../../../public/css/animate.min.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/css/flaticon.min.css'
import '../../../public/css/fontawesome-5.14.0.min.css'
import '../../../public/css/magnific-popup.min.css'
import '../../../public/css/new.css'
import '../../../public/css/nice-select.min.css'
import '../../../public/css/style.css'
import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import Script from 'next/script'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <InitTheme /> */}
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <div className="page-wrapper">

          {/* Preloader */}
        {/* <div className="preloader"><div className="custom-loader"></div></div> */}

        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Header />
          {children}
          <Footer />
        </Providers>
        <button className="scroll-top scroll-to-target" data-target="html">
            <span className="fas fa-angle-double-up"></span>
          </button>
        </div>

        <Script src="/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/js/appear.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/circle-progress.min.js" strategy="beforeInteractive" />
        <Script src="/js/imagesloaded.pkgd.min.js" strategy="beforeInteractive" />
        <Script src="/js/isotope.pkgd.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.ajaxchimp.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.nice-select.min.js" strategy="beforeInteractive" />
        <Script src="/js/script.js" strategy="beforeInteractive" />
        <Script src="/js/wow.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@nonso_uj',
  },
}
