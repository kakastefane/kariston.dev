import NextLink from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "kariston.dev",
  description: "Front-End Developer | Shopify Expert | Wordpress Specialist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full max-w-7xl m-auto py-8 px-4 lg:px-0 flex flex-col gap-3 lg:flex-row items-center justify-between">
          <h1>
            <NextLink href="/" className="text-xl font-bold">
              kariston.dev
            </NextLink>
          </h1>
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <NextLink
                  className="hover:underline hover:text-black dark:hover:text-white underline-offset-4"
                  href="/about"
                >
                  About
                </NextLink>
              </li>
              <li>
                <NextLink
                  className="hover:underline hover:text-black dark:hover:text-white underline-offset-4"
                  href="/portfolio"
                >
                  Portfolio
                </NextLink>
              </li>
              <li>
                <NextLink
                  className="hover:underline hover:text-black dark:hover:text-white underline-offset-4"
                  href="/contact"
                >
                  Contact
                </NextLink>
              </li>
            </ul>
          </nav>
        </header>
        <main className="w-full max-w-7xl m-auto py-12 px-4 lg:px-0 flex-grow flex items-center">
          {children}
        </main>
        <footer className="w-full max-w-7xl m-auto py-8 px-4 lg:px-0">
          <p className="text-center">
            Copyright &copy; 2023 - All rights reserved - Kariston Stefane da
            Silva
          </p>
        </footer>
      </body>
    </html>
  );
}
