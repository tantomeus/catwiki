import { Poppins } from 'next/font/google';

import Footer from '@/components/Footer.js';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from '@/styles/GlobalStyles';

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
          <GlobalStyles/>
          {children}
          <Footer/>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
};