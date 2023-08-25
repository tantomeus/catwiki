"use client";

import { Poppins } from 'next/font/google';
import GlobalStyle from '../styles/GlobalStyles.js';
import Footer from '@/components/Footer.js';
import StyledComponentsRegistry from '@/lib/registry.js';

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ['latin']
});

export const metadata = {
  title: 'Cat Wiki',
  description: 'Encyclopedia about cats',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <GlobalStyle/>
          {children}
          <Footer/>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
