import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sistema de Cache",
  description: "Sistema de cache no next, coisa que você deve saber",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <header className="space-x-5 p-2">
          <Link href={'/'}>Home</Link>
          <Link href={'/sobre'}>Pagina sobre</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
