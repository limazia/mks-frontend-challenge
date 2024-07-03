import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "./providers";
import { ClientOnly } from "@/components/client-only";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS Sistemas",
  description: "Desafio técnico para a vaga de desenvolvedor front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.className} suppressHydrationWarning>
      <body className="antialiased">
        <ClientOnly>
          <main>
            <Providers>{children}</Providers>
          </main>
        </ClientOnly>
      </body>
    </html>
  );
}
